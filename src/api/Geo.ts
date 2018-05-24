import Exceptions from '../exceptions'
import {AxiosResponse} from "axios";
import axios from "axios";

let key = 'AIzaSyACs8yML0SaRQ8DRDJdiKGdyBg9BKhE3bg'

export default class Geo {
    static async get<ParamsType, DataType> (latitude: number, longitude: number) : Promise<AxiosResponse<DataType>> {
        return (await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${key}`)).data;
    }
}