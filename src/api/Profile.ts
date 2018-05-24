import AxiosWrapper from "./AxiosWrapper";
import Exceptions from '../exceptions'

export default class Profile extends AxiosWrapper {

    static async changeTariff (tariff: string) {
        return (await this.get<ChangeTariffDto, boolean>("changeTariff", {
            tariff
        }));
    }

}

interface ChangeTariffDto {
  tariff: string
}
