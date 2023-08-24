export default class StatusData {
    status: number;
    data: Object;

    constructor(status: number, data: Object) {
        this.status = status;
        this.data = data;
    }

    static Status500(message: string) {
        return new StatusData(500, {details: message})
    }
}