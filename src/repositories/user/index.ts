// import { EntityTarget } from "typeorm";
// import CrudRepository from "../crud";
import { EntityTarget } from "typeorm/common/EntityTarget";
import CrudRepository from "../crud";
import IUserRepository from "./interface";
import User from "../../model/user";
export default class UserRepository extends CrudRepository implements IUserRepository {
    constructor(model: EntityTarget<User>) {
        super(model);
        this.model = model;
        this.modelInstantiator = () => {return new User};
    }
}