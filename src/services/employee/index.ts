import CrudService from "../crud";
import IEmployeeService from "./interface";
import IEmployeeRepository from "../../repositories/employee/interface";
import StatusData from "../../shared/resources/statusData";
import IUserRepository from "../../repositories/user/interface";


export default class EmployeeService extends CrudService implements IEmployeeService {
    private userRepository: IUserRepository;
    constructor(employeeRepository: IEmployeeRepository, userRepository: IUserRepository) {
        super(employeeRepository);
        this.userRepository = userRepository;
    }

    create = async (data: any): Promise<StatusData> => {
        try {
            data.user = await this.userRepository.get(data.userId);
            return super.create(data);
        } catch (e) {
            console.log(e)
            return {
                status: 500,
                data: {
                    Error: "Unhandled Error",
                    details: "Probably cannot find the user"
                }
            }
        }
    }
}