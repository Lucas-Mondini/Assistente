import { EntityTarget } from 'typeorm';
import { AppDataSource } from '../../data-source';
import Model from '../../model/interface';
import ICrudRepository from './interface'

export default class CrudRepository implements ICrudRepository {
    protected model: EntityTarget<Model>;
    protected modelInstantiator: Function;
    constructor(model: EntityTarget<Model>) {
        this.model = model;
    }
    create = async (data: any): Promise<Object> => {
        return await AppDataSource.getRepository(this.model).save(data);
    }
    get = async (id: number): Promise<Object> => {
        return await AppDataSource.getRepository(this.model).findOneByOrFail({id: id});
    }
    index = async (): Promise<Object> => {
        const model = await AppDataSource.getRepository(this.model).find();
        return model;
    }
    update = async (id:number, data: any): Promise<Object> => {
        const model = await AppDataSource.getRepository(this.model).findOneByOrFail({id: id});
        for (const [key, val] of Object.entries(data)) {
            model[key as keyof typeof model] = <any>val;
        }
        return await AppDataSource.getRepository(this.model).save(model);
    }
    destroy = async (id: number): Promise<Object> => {
        const obj =  await AppDataSource.getRepository(this.model).findOneByOrFail({id: id});
        const dead = await AppDataSource.getRepository(this.model).delete(obj.id);
        
        if(!dead.affected)  {
            throw "unhandled error"
        }
        return {
            Message: "deletion successfull"
        }
    }

}