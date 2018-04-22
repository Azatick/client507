import User from "../models/User";

export default class UserRegisteredException extends Error {

    name = "UserRegisteredException"
    message: string

    constructor (user?: User, message: string = "Данный пользователь уже зарегистирован") {
        super(message)
        this.message = user ? `Пользователь с почтой ${user.email} уже зарегистрирован`: message
    }

}