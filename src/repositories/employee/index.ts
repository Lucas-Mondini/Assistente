import { EntityTarget } from "typeorm/common/EntityTarget";
import CrudRepository from "../_crud";
import IEmployeeRepository from "./interface";
import Employee from "../../model/employee";


export default class EmployeeRepository extends CrudRepository implements IEmployeeRepository {
    constructor(model: EntityTarget<Employee>) {
        super(model, ["contact", "user"]);
        this.model = model;
        this.modelInstantiator = () => {return new Employee};
    }
}