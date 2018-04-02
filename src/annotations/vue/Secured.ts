import auth from '../../api/Auth'

export default function Secured(roles?: String[]) {
    return (target: any, propertyKey: string, descriptor: any) => {
        let oldFunc = descriptor.value
        descriptor.value = async function (...args) {
            var res = await auth.accessToken(
                localStorage.getItem("auth_token")
            );
            if (res.status == 200 && 
            (roles == undefined || 
            roles.indexOf(res.data) >= 0)) {
                var result = await oldFunc.apply(this, ...args)
            } else {
                this.$router.push('/login')
            }
            return result
        }
    }
}
