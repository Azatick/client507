import User from "../models/User";
import AException from "./AException";
import {RegisterAccount} from "../api/Auth";

export default class InvalidLoginOrPasswordException extends AException<RegisterAccount> {

    name = "InvalidLoginOrPasswordException"

    constructor (message: string = "Неправильные логин или пароль") {
        super(message)
    }

}