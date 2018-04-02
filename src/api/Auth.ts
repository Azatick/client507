import AxiosWrapper from "./AxiosWrapper";

export default class Auth extends AxiosWrapper {

    static async register (account: RegisterAccount) {
        var result = (await this.post<RegisterAccount, AuthResponse>("registration", {
            params: account
        })).data;
        localStorage.setItem('auth_token', result.auth_token);
        return result;
    }

    static async login (auth: AuthRequest) {
        var result = (await this.post<AuthRequest, AuthResponse>("login", {
          params: auth
        })).data;
        localStorage.setItem('auth_token', result.auth_token) ;
        return result;
    }

    static async logout (auth_token: string) {
        localStorage.removeItem('auth_token');
    }

    static async accessToken (auth_token: string) {
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
