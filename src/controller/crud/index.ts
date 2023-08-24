import { Request, Response } from "express";
import ICrudService from "../../services/crud/interface";
import ICrudController from "./interface";
import ICrudValidatorController from "./validator/ICrudValidator";
import { ParamsDictionary } from "express-serve-static-core";
import { ParsedQs } from "qs";

export default class CrudController implements ICrudController, ICrudValidatorController {

    protected service: ICrudService;

    constructor(service: ICrudService) {
        this.service = service;
    }
    validateCreate(req: Request): boolean {
        return true
    }
    validateUpdate(req: Request): boolean {
        return true
    }
    validateDestroy(req: Request): boolean {
        return true
    }
    create = async (req: Request, res: Response): Promise<Object> => {
        if(!this.validateCreate(req)) {
            return res.status(400).send("Cannot validate request");
        }
        const ret = await this.service.create(req.body);
        return res.status(ret.status).json(ret.data);
    }
    get = async (req: Request, res: Response): Promise<Object> => {
        const ret = await this.service.get(Number(req.params.id));
        return res.status(ret.status).json(ret.data);
    }
    index = async (req: Request, res: Response): Promise<Object> => {
        const ret = await this.service.index();
        return res.status(ret.status).json(ret.data);
    }
    update = async (req: Request, res: Response): Promise<Object> => {
        if(!this.validateUpdate(req)) {
            return res.status(400).send("Cannot validate request");
        }
        const ret = await this.service.update(Number(req.params.id), req.body);
        return res.status(ret.status).json(ret.data);
    }
    destroy = async (req: Request, res: Response): Promise<Object> => {
        if(!this.validateDestroy(req)) {
            return res.status(400).send("Cannot validate request");
        }
        const ret = await this.service.destroy(Number(req.params.id));
        return res.status(ret.status).json(ret.data);
    }

}