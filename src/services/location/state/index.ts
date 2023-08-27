import IUserRepository from "../../../repositories/user/interface";
import StatusData from "../../../shared/resources/statusData";
import CrudService from "../../crud";
import IStateService from "./interface";

export default class StateService extends CrudService implements IStateService {
    constructor(stateRepository: IUserRepository) {
        super(stateRepository);
    }
}