import CurrentUser from "./CurrentUser";

export default interface ProfileData extends CurrentUser {

    phone?: string
    serviceCount?: number

}