type UserRole = "Customer"
type UserTariff = "Smart"

export default interface CurrentUser {

    userRole?: UserRole
    balance?: number
    currentTariff?: UserTariff
    firstName?: string
    lastName?: string
    passportSeries?: string

}