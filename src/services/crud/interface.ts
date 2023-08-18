import StatusData from "../../shared/resources/statusData";

interface ICrudService {
        create  (data: Object): Promise<StatusData>;
        get     (id: number): Promise<StatusData>;
        index   (): Promise<StatusData>;
        update  (id: number, data: Object): Promise<StatusData>;
        destroy (id: number): Promise<StatusData>;
}

export default ICrudService
