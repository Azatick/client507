import AxiosWrapper from "./AxiosWrapper";
import Exceptions from '../exceptions'

export default class Map extends AxiosWrapper {
    static async allRepublics() {
        return (await this.get<undefined, republic>("republics")).data;
    }

    static async republicStats() {
        return (await this.get<undefined, republic>("republicStats")).data;
    }
}

interface republic {
    id: number,
    code: string,
    name: string,
    customers: number
}