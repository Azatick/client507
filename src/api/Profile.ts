import AxiosWrapper from "./AxiosWrapper";
import Exceptions from '../exceptions'
import CurrentUser from "../models/CurrentUser";

export default class Profile extends AxiosWrapper {

    static async changeTariff (tariff: string) {
        let token = localStorage.getItem("auth_token")
        return (await this.get<ChangeTariffDto, boolean>("changeTariff", {
          params: {
            tariff
          }
        }));
    }

}

interface ChangeTariffDto {
  tariff: string
}
