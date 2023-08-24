import CrudRouter from "../crud";
import IEmployeeController from "../../controller/employee/interface";


export default class EmployeeRouter extends CrudRouter {
    constructor(controller: IEmployeeController) {
        super(controller, "Employee");
    }
}