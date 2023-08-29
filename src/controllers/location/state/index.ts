import IStateService from "../../../services/location/state/interface";
import CrudController from "../../crud";
import IStateController from "./interface";
import { Request} from "express";


export default class StateController extends CrudController implements IStateController {
    constructor(service: IStateService) {
        super(service)
    }
    validate(body: any): boolean {
        return body.name && body.acronym;
    }

    validateCreate(req: Request): boolean {
        return this.validate(req.body)
    }

    validateUpdate(req: Request): boolean {
        return this.validate(req.body)
    }
}