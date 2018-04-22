import User from "../models/User";
import AException from "./AException";
import {RegisterAccount} from "../api/Auth";

export default class UserRegisteredException extends AException<RegisterAccount> {

    name = "UserRegisteredException"

    constructor (user?: RegisterAccount, message: string = "Данный пользователь уже зарегистирован") {
        super(message)
        this.target = user
        this.message = user ? `Пользователь с почтой ${user.email} уже зарегистрирован`: message
    }

}