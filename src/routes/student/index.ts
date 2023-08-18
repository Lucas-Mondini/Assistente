import CrudRouter from "../crud";
import IUserController from "../../controller/user/interface";


export default class StudentRouter extends CrudRouter {
    constructor(controller: IUserController) {
        super(controller, "Student");
    }
}