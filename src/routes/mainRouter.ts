
import Injector from '../injector';
import Express from 'express'
import UserRouter from './user';

const mainRouter = Express();
mainRouter.use("/user", new UserRouter(Injector.User()).getRouter())

export default mainRouter;