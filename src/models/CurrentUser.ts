import Tariff from "./Tariff";

type UserRole = "Customer"
type UserTariff = "Smart"

export default interface CurrentUser {
    userRole?: UserRole
    balance?: number
    tariff?: Tariff
    firstName?: string
    lastName?: string
    passportSeries?: string
}
