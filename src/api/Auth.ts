import AxiosWrapper from "./AxiosWrapper";

export default class Auth extends AxiosWrapper {

    static async register (account: RegisterAccount) {
        return (await this.post<RegisterAccount, string>("registration", {
            params: account
        })).data;
    }

    static async login (auth: AuthRequest) {
        return (await this.post<AuthRequest, AuthResponse>("login", {
          params: auth
        })).data;
    }

    static async logout (auth_token: string) {
        return (await this.post<String, Number>("logout", {
          params: auth_token
        })).data;
    }

    static async accesToken (auth_token: string) {
        return (await this.post<String, String>("accessToken", {
          params: auth_token
        }));
    }

}

export interface RegisterAccount {
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    passpostSeries: string;
}

export interface AuthRequest {
    userName: string;
    password: string;
}

export interface DeadTokenRequest {
    auth_token: string;
}

export interface AuthResponse {
    id: string;
    auth_token: string;
    expires_in: number;
}
