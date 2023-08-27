import CrudController from "../../../../controller/crud";
import StateController from "../../../../controller/location/state";
import State from "../../../../model/location/state";
import StateRepository from "../../../../repositories/location/state";
import StateService from "../../../../services/location/state";
import ICrudInjector from "../../interface";

export default class StateInjector implements ICrudInjector {
    Inject(): StateController {
        return new StateController(
            new StateService(
                new StateRepository(
                    State
                )
            )
        )
    }
}