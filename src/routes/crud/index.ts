import Express  from "express";
import ICrudController from "../../controllers/crud/interface";
import Logger from "../../utils/logger";
import ICrudRouter from "./interface";

class CrudRouter implements ICrudRouter {
    private className: string;
    private router : Express.Express;
    private controller : ICrudController;
    
    constructor(controller : ICrudController, className: string) {
        this.className = className;
        this.router = Express();
        this.controller = controller;
        if(this.controller) {
            this.get(this.controller, "/:id/");
            this.create(this.controller, "/");
            this.index(this.controller, "/");
            this.update(this.controller, "/:id/");
            this.delete(this.controller, "/:id/");
        } else {
            Logger.log("No controller found on " + this.className)
        }
    }
    

    public getRouter = () : Express.Express => {
     return this.router;
    }

    public use = (route : ICrudRouter, path : string) => {
        this.router.use(path, route.getRouter());
    }

    public get =  (controller : ICrudController, path : string) => {
        this.router.get(path, controller.get);
    }

    public index =  (controller : ICrudController, path : string) => {
        this.router.get(path, controller.index);
    }

    public create =  (controller : ICrudController, path : string) => {
        this.router.post(path, controller.create);
    }

    public update =  (controller : ICrudController, path : string) => {
        this.router.put(path, controller.update);
    }

    public delete =  (controller : ICrudController, path : string) => {
        this.router.delete(path, controller.destroy);
    }

};
export default CrudRouter