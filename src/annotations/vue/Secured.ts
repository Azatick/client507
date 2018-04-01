import auth from '../../api/Auth';

export default function Secured(roles?: String[]) {
    return (target: any, propertyKey: string, descriptor: any) => {
        let oldFunc = descriptor.value;
        console.log(target);
        descriptor.value = async function () {
            var res = await auth.accesToken(
                localStorage.getItem("auth_token")
            );
            if (res.status == 200 && 
            (roles == undefined || 
            roles.indexOf(res.data) >= 0)) {
                var result = oldFunc.apply(this);
            } else {
                this.$router.push('/login')
            }
            return result;
        }
    }
}
