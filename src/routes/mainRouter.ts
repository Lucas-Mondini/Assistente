
import Injector from '../injector';
import Express from 'express'
import UserRouter from './user';
import EmployeeRouter from './employee';

const mainRouter = Express();
mainRouter.use("/user", new UserRouter(Injector.User()).getRouter())
mainRouter.use("/employee", new EmployeeRouter(Injector.Employee()).getRouter())

export default mainRouter;