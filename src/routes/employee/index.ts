import CrudRouter from "../crud";
import IEmployeeController from "../../controllers/employee/interface";


export default class EmployeeRouter extends CrudRouter {
    constructor(controller: IEmployeeController) {
        super(controller, "Employee");
    }
}