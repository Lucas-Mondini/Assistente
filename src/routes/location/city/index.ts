import ICityController from "../../../controllers/location/city/interface";
import CrudRouter from "../../crud";

export default class CityRouter extends CrudRouter {
    constructor(controller: ICityController) {
        super(controller, "State");
    }
}