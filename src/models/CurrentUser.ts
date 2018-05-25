import Tariff from "./Tariff";

export type UserRole = "Customer" | 'Admin' | 'Support'

export default interface CurrentUser {
    userRole?: UserRole
    balance?: number
    tariff?: Tariff
    firstName?: string
    lastName?: string
    passportSeries?: string
}
