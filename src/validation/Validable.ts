import {nonenumerable} from "core-decorators";
import {ValidatedProperty} from "../annotations/validation/ValidationFactory";

export default class Validable {

    @nonenumerable
    hasError: boolean

    @nonenumerable
    validation: ValidationObject

}

interface ValidationObject {
    [key: string]: ValidatedProperty<any>
}