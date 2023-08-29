import { EntityTarget } from "typeorm/common/EntityTarget";
import State from "../../../models/location/state";
import CrudRepository from "../../_crud";
import IStateRepository from "./interface";

export default class StateRepository extends CrudRepository implements IStateRepository {
    constructor(model: EntityTarget<State>) {
        super(model);
        this.model = model;
        this.modelInstantiator = () => {return new State};
    }
}