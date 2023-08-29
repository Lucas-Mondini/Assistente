import CrudController from "../crud";
import IEmployeeService from "../../services/employee/interface";
import IEmployeeController from "./interface";
import { Request} from "express";


export default class EmployeeController extends CrudController implements IEmployeeController {
    constructor(service: IEmployeeService) {
        super(service)
    }

    validateCreate(req: Request): boolean {
        const body = req.body;
        try {
            if(body.name && body.userId) {
                const contact = body.contact;
                if(contact.email && contact.phone)
                    return true;
            }
            return false;
        } catch (e) {
            return false;
        }
    }

    validateUpdate(req: Request): boolean {
        return true;
    }
}