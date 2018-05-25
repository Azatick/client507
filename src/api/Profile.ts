import AxiosWrapper from "./AxiosWrapper";
import Exceptions from '../exceptions'

export default class Profile extends AxiosWrapper {

    static async changeTariff (tariff: string) {
        return (await this.get<ChangeTariffDto, boolean>("changeTariff", {
            tariff
        }));
    }

    static async upBalance (balance: number) {
        return (await this.get('upBalance', {
            sum: balance
        }))
    }

}

interface ChangeTariffDto {
  tariff: string
}
