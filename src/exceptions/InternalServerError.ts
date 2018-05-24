import AException from "./AException";

export default class InternalServerError extends AException<null> {

    name = "InternalServerError"

    constructor (message: string = "Возникла ошибка на сервере. Попробуйте позже.") {
        super(message)
    }

}