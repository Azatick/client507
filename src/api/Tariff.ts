import AxiosWrapper from "./AxiosWrapper";
import Tariff from "../models/Tariff";

export default class Profile extends AxiosWrapper {

    static async changeTariff (tariffId: number) {
        return (await this.get<ChangeTariffDto, boolean>("changeTariff", {
            params: {
                tariffId
            }
        }));
    }

    static async getTariffs () {
        return (await this.get<void, Tariff[]>('tariffs')).data['tariffs'];
    }

}

interface ChangeTariffDto {
    tariffId: number
}
