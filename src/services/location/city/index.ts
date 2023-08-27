import ICityRepository from "../../../repositories/location/city/interface";
import IUserRepository from "../../../repositories/user/interface";
import StatusData from "../../../shared/resources/statusData";
import CrudService from "../../crud";
import ICityService from "./interface";

export default class CityService extends CrudService implements ICityService {
    constructor(cityRepository: ICityRepository) {
        super(cityRepository);
    }
}