import User from "../models/User";
import AException from "./AException";
import {RegisterAccount} from "../api/Auth";

export default class UserNotAuthorizedException extends AException<null> {

    name = "UserNotAuthorizedException"

    constructor (message: string = "Вы не можете просматривать информацию на этой странице. Авторизуйтесь") {
        super(message)
    }

}