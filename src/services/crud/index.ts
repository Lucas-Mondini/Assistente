import ICrudRepository from "../../repositories/crud/interface";
import StatusData from "../../shared/resources/statusData";
import ICrudService from "./interface";


export default class CrudService implements ICrudService {

    protected repository: ICrudRepository;

    constructor(repository: ICrudRepository) {
        this.repository = repository;
    }

    async create (data: Object): Promise<StatusData> {
        return await this.HandleRepository(async ()=>{
            return await this.repository.create(data)
        });
    }
    async get (id: number): Promise<StatusData> {
        return await this.HandleRepository(async ()=>{
            return await this.repository.get(id)
        });
    }
    async index (): Promise<StatusData> {
        return await this.HandleRepository(async () => {
            return await this.repository.index();
        });
    }
    async update (id: number, data: Object): Promise<StatusData> {
        return await this.HandleRepository(async ()=>{
            return await this.repository.update(id, data)
        });
    }
    async destroy (id: number): Promise<StatusData> {
        return await this.HandleRepository(async ()=>{
        return await this.repository.destroy(id);
        });
    }

    private async HandleRepository(func: Function) : Promise<StatusData> {
        try {
            const ret = await func()
            return {
                status: 200,
                data: ret
            }
        } catch(e) {
            return {
                status: 500,
                data: {
                    Error: "Unhandled Error",
                    details: e
                }
            }
        }
    }

}