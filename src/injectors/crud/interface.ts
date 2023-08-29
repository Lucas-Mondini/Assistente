import CrudController from "../../controllers/crud";

export default interface ICrudInjector {
    Inject() : CrudController;
}