import CrudController from "../crud";
import IUserService from "../../services/user/interface";
import IUserController from "./interface";
import { UserData } from "../../shared/resources/UserData";
import { Request, Response } from "express";
import { ParamsDictionary } from "express-serve-static-core";
import { ParsedQs } from "qs";


export default class UserController extends CrudController implements IUserController {
    constructor(service: IUserService) {
        super(service)
    }
    validate(body: any): boolean {
        return body.email && body.password && body.name;
    }

    create = async (req: Request, res: Response): Promise<Object> => {
        return super.create(req, res, () => { return this.validate(req.body)})
    }

    update = async (req: Request, res: Response): Promise<Object> => {
        return super.update(req, res, () => { return this.validate(req.body)})
    }

}