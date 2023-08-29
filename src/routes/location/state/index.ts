import IStateController from "../../../controllers/location/state/interface";
import CrudRouter from "../../crud";

export default class StateRouter extends CrudRouter {
    constructor(controller: IStateController) {
        super(controller, "State");
    }
}