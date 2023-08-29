
import Injector from '../injectors';
import Express from 'express'
import UserRouter from './user';
import EmployeeRouter from './employee';
import locationRouter from './location';

const mainRouter = Express();
mainRouter.use("/user", new UserRouter(Injector.User()).getRouter())
mainRouter.use("/employee", new EmployeeRouter(Injector.Employee()).getRouter())

mainRouter.use("/location", locationRouter)

export default mainRouter;