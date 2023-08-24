import { EntityTarget } from "typeorm/common/EntityTarget";
import CrudRepository from "../_crud";
import IContactRepository from "./interface";
import Contact from "../../model/contact";
import { AppDataSource } from "../../data-source";

export default class ContactRepository extends CrudRepository implements IContactRepository {
    constructor(model: EntityTarget<Contact>) {
        super(model);
        this.model = model;
        this.modelInstantiator = () => {return new Contact};
    }
}