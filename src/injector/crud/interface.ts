import CrudController from "../../controller/crud";

export default interface ICrudInjector {
    Inject() : CrudController;
}