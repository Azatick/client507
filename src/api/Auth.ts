import AxiosWrapper from "./AxiosWrapper";
import Exceptions from '../exceptions'
import CurrentUser from "../models/CurrentUser";

export default class Auth extends AxiosWrapper {

    static async register (account: RegisterAccount) {
        try {
            var result = (await this.post<RegisterAccount, AuthResponse>("registration", account));
            return result;
        } catch (e) {
            if (e.response.status == 500) {
                throw new Exceptions.InternalServerError()
            } else if (e.response.data.DuplicateUserName) {
                throw new Exceptions.UserRegisteredException(account)
            }
        }
    }

    static async login (auth: AuthUser) {
        try {
            var result = (await this.post<AuthUser, AuthResponse>("login", auth)).data;
            localStorage.setItem('auth_token', result.auth_token);
            return result;
        } catch (e) {
            throw new Exceptions.InvalidLoginOrPasswordException()
        }
    }

    static async logout () {
        localStorage.removeItem('auth_token');
    }

    static async accessToken (auth_token: string) {
        return (await this.post<String, String>("accessToken", {
          params: auth_token
        }));
    }

    static async userInfo () {
        try {
            return (await this.get<String, CurrentUser>("auth/currentUser"));
        } catch (e) {
            console.dir(e);
            throw new Exceptions.UserNotAuthorizedException()
        }

    }

}

export interface RegisterAccount {
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    passportSeries: string;
}

export interface AuthUser {
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
