import CrudController from "../../../../controllers/crud";
import StateController from "../../../../controllers/location/state";
import State from "../../../../models/location/state";
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