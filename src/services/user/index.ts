import CrudService from "../crud";
import IUserService from "./interface";
import IUserRepository from "../../repositories/user/interface";
import StatusData from "../../shared/resources/statusData";
import bcrypt from "bcrypt";


export default class UserService extends CrudService implements IUserService {
    constructor(userRepository: IUserRepository) {
        super(userRepository);
    }

    create = async (data: any): Promise<StatusData> => {
        let hash = null;

        hash = await bcrypt.hash(data.password, 10);
            
        if(!hash) {
            return {
                status: 500,
                data: {
                    Error: "failed to generate hash",
                }
            };
        }
        data.password = hash
        return super.create(data);
    }

    update = async (id: number, data: any): Promise<StatusData> => {
        let hash = null;

        hash = await bcrypt.hash(data.password, 10);
            
        if(!hash) {
            return {
                status: 500,
                data: {
                    Error: "failed to generate hash",
                }
            };
        }
        data.password = hash
        return super.update(id, data);
    }
}