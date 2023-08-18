import CrudService from "../crud";
import IUserService from "./interface";
import IUserRepository from "../../repositories/user/interface";
import StatusData from "../../shared/resources/statusData";


export default class UserService extends CrudService implements IUserService {
    constructor(userRepository: IUserRepository) {
        super(userRepository);
    }

    create = async (data: Object): Promise<StatusData> => {
        //TODO Generate Hash to password with bcrypt
        return super.create(data);
    }

    update = async (id: number, data: Object): Promise<StatusData> => {
        //TODO Generate Hash to password with bcrypt
        return super.update(id, data);
    }
}