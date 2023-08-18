import Express from 'express'
import ICrudController from '../../controller/crud/interface';

export default interface ICrudRouter {
    getRouter () : Express.Express;
    use (route :ICrudRouter, path : string) : void;
    get (controller : ICrudController, path : string) : void;
    index (controller : ICrudController, path : string) : void;
    create (controller : ICrudController, path : string) : void;
    update (controller : ICrudController, path : string) : void;
    delete (controller : ICrudController, path : string) : void;
}