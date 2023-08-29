import { EntityTarget } from "typeorm/common/EntityTarget";
import City from "../../../models/location/city";
import CrudRepository from "../../_crud";
import ICityRepository from "./interface";
import IstateRepository from "../state/interface";

export default class CityRepository extends CrudRepository implements ICityRepository {
    private stateRepository: IstateRepository;
    constructor(model: EntityTarget<City>, stateRepository: IstateRepository) {
        super(model, ["state"]);
        this.model = model;
        this.stateRepository = stateRepository;
        this.modelInstantiator = () => {return new City};
    }

    create = async (data: any): Promise<Object> => {
        return this.handleModel(async () => {
            data.state = await this.stateRepository.get(data.stateId);
            return await super.create(data);
        });
    }

    update = async (id: number, data: any): Promise<Object> => {
        return this.handleModel(async () => {
            if(data.stateId)
                data.state = await this.stateRepository.get(data.stateId);
            return await super.update(id, data);
        });
    }
}