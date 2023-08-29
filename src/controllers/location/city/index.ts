import { Request} from "express";
import ICityController from "./interface";
import CrudController from "../../crud";
import ICityService from "../../../services/location/city/interface";


export default class CityController extends CrudController implements ICityController {
    constructor(service: ICityService) {
        super(service)
    }
    validate(body: any): boolean {
        return body.name && body.stateId;
    }

    validateCreate(req: Request): boolean {
        return req.body.name && req.body.stateId
    }

    validateUpdate(req: Request): boolean {
        return req.body.name;
    }
}