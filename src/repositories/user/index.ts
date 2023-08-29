// import { EntityTarget } from "typeorm";
// import CrudRepository from "../crud";
import { EntityTarget } from "typeorm/common/EntityTarget";
import CrudRepository from "../_crud";
import IUserRepository from "./interface";
import User from "../../models/user";
import { AppDataSource } from "../../data-source";
export default class UserRepository extends CrudRepository implements IUserRepository {
    constructor(model: EntityTarget<User>) {
        super(model);
        this.model = model;
        this.modelInstantiator = () => {return new User};
    }
}