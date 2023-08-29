import CrudController from "../../../../controllers/crud";
import CityController from "../../../../controllers/location/city";
import City from "../../../../models/location/city";
import State from "../../../../models/location/state";
import CityRepository from "../../../../repositories/location/city";
import StateRepository from "../../../../repositories/location/state";
import CityService from "../../../../services/location/city";
import ICrudInjector from "../../interface";

export default class CityInjector implements ICrudInjector {
    Inject(): CityController {
        return new CityController(
            new CityService(
                new CityRepository(
                    City,
                    new StateRepository(
                        State
                    )
                )
            )
        )
    }
}