import { EntityTarget } from "typeorm/common/EntityTarget";
import CrudRepository from "../_crud";
import IEmployeeRepository from "./interface";
import Employee from "../../model/employee";
import IContactRepository from "../contact/interface";


export default class EmployeeRepository extends CrudRepository implements IEmployeeRepository {
    private  contactRepository: IContactRepository;
    constructor(model: EntityTarget<Employee>, contactRepository: IContactRepository) {
        super(model, ["contact", "user"]);
        this.model = model;
        this.contactRepository = contactRepository;
        this.modelInstantiator = () => {return new Employee};
    }

    destroy = async (id: any): Promise<Object> => {
        return this.handleModel(async () => {
            const employee = <Employee> await this.get(id);
            const message = await super.destroy(id);
            await this.contactRepository.destroy(employee.contact.id);
            return message;
        });
    }
}