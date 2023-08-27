import CrudController from "../../../../controller/crud";
import CityController from "../../../../controller/location/city";
import City from "../../../../model/location/city";
import State from "../../../../model/location/state";
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