import { EntityTarget } from 'typeorm';
import { AppDataSource } from '../../data-source';
import Model from '../../model';
import ICrudRepository from './interface'
import Logger from '../../utils/logger';

export default abstract class CrudRepository implements ICrudRepository {
    protected model: EntityTarget<Model>;
    protected modelInstantiator: Function;
    protected relations: any;
    constructor(model: EntityTarget<Model>, relations: any = []) {
        this.model = model;
        this.relations = relations;
    }
    create = async (data: any): Promise<Object> => {
        return await this.handleModel( async () => AppDataSource.getRepository(this.model).save(data));
    }
    get = async (id: number): Promise<Object> => {
        return await this.handleModel( async () => AppDataSource.getRepository(this.model).findOneOrFail({where: {id: id}, relations: this.relations}));
    }
    index = async (): Promise<Object> => {
        return await this.handleModel( async () => {
            const model = await AppDataSource.getRepository(this.model).find({relations: this.relations});
            return model;
        })
    }
    update = async (id:number, data: any): Promise<Object> => {
        return await this.handleModel(async () => {
            const model = await AppDataSource.getRepository(this.model).findOneOrFail({where: {id: id}, relations: this.relations});
            for (const [key, val] of Object.entries(data)) {
                model[key as keyof typeof model] = <any>val;
            }
            return await AppDataSource.getRepository(this.model).save(model);
        })
    }
    destroy = async (id: number): Promise<Object> => {
        return await this.handleModel(async ()=> {
            const obj =  await AppDataSource.getRepository(this.model).findOneOrFail({where: {id: id}});
            const dead = await AppDataSource.getRepository(this.model).delete(obj.id);
            
            if(!dead.affected)  {
                throw "unhandled error"
            }
            return {
                Message: "deletion successfull"
            }
        })
    }

    protected async handleModel(callback: Function) {
        try {
            return await callback();
        } catch (e: any) {
            Logger.log(e);
            throw {"Repository error": e.detail}
        }
    }

}