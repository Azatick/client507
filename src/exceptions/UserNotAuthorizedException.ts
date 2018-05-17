import AException from "./AException";

export default class UserNotAuthorizedException extends AException<null> {

    name = "UserNotAuthorizedException"

    constructor (message: string = "Вы не можете просматривать информацию на этой странице. Авторизуйтесь") {
        super(message)
    }

}