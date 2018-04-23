import auth from '../../api/Auth'
import CurrentUser from "../../models/CurrentUser";
import * as $ from 'jquery'

export default function Secured(predicat: (user: CurrentUser) => boolean = (user: CurrentUser = {}) => !!user.userRole, redirectTo: string = '/login') {
    return (target: any, propertyKey: string, descriptor: any) => {
        let oldFunc = descriptor.value
        descriptor.value = async function (...args) {
            $('body').addClass('hide-content body-loading')
            try {
                let res = await auth.userInfo();
                if (res.status == 200 && predicat(res.data)) {
                    var result = await oldFunc.apply(this, ...args)
                } else {
                    this.$router.push(redirectTo)
                }
                return result
            } catch (err) {
                if (!predicat({})) {
                    this.$router.push(redirectTo)
                }
                throw err
            } finally {
                $('body').removeClass('hide-content body-loading')
            }
        }
    }
}
