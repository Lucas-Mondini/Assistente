import CrudController from "../crud";
import IUserService from "../../services/user/interface";
import IUserController from "./interface";
import { Request} from "express";


export default class UserController extends CrudController implements IUserController {
    constructor(service: IUserService) {
        super(service)
    }
    validate(body: any): boolean {
        return body.email && body.password && body.name;
    }

    validateCreate(req: Request): boolean {
        return this.validate(req.body)
    }

    validateUpdate(req: Request): boolean {
        return this.validate(req.body)
    }
}