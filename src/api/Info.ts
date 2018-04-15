import AxiosWrapper from "./AxiosWrapper";

export default class Info extends AxiosWrapper {

    static async userInfo () {
        let token = localStorage.getItem("auth_token")
        var result = ( await this.get<String, any>("auth/currentUser", {
            headers: {
                'authorization': token ? `Bearer ${token}` : ''
              }
        }));
        console.log(result)
        return result;
    }
}

    