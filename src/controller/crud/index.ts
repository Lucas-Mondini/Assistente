import { Request, Response } from "express";
import ICrudService from "../../services/crud/interface";
import ICrudController from "./interface";

export default class CrudController implements ICrudController {

    protected service: ICrudService;

    constructor(service: ICrudService) {
        this.service = service;
    }
    async create(req: Request, res: Response, validate: Function = () => { return true}): Promise<Object> {
        if(!validate()) {
            return res.status(400).send("Cannot validate request");
        }
        const ret = await this.service.create(req.body);
        return res.status(ret.status).json(ret.data);
    }
    async get(req: Request, res: Response, validate: Function = ()=> { return true}): Promise<Object> {
        if(!validate()) {
            return res.status(400).send("Cannot validate request");
        }
        const ret = await this.service.get(Number(req.params.id));
        return res.status(ret.status).json(ret.data);
    }
    async index(req: Request, res: Response, validate: Function = ()=> { return true}): Promise<Object> {
        if(!validate()) {
            return res.status(400).send("Cannot validate request");
        }
        const ret = await this.service.index();
        return res.status(ret.status).json(ret.data);
    }
    async update(req: Request, res: Response, validate: Function = ()=> { return true}): Promise<Object> {
        if(!validate()) {
            return res.status(400).send("Cannot validate request");
        }
        const ret = await this.service.update(Number(req.params.id), req.body);
        return res.status(ret.status).json(ret.data);
    }
    async destroy(req: Request, res: Response, validate: Function = ()=> { return true}): Promise<Object> {
        if(!validate()) {
            return res.status(400).send("Cannot validate request");
        }
        const ret = await this.service.destroy(Number(req.params.id));
        return res.status(ret.status).json(ret.data);
    }

}