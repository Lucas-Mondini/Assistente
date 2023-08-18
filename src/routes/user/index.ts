import CrudRouter from "../crud";
import IUserController from "../../controller/user/interface";


export default class UserRouter extends CrudRouter {
    constructor(controller: IUserController) {
        super(controller, "User");
    }
}