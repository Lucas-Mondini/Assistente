import Express from 'express'
import StateRouter from './state';
import Injector from '../../injectors';
import CityRouter from './city';

const locationRouter = Express();

locationRouter.use("/state", new StateRouter(Injector.State()).getRouter())
locationRouter.use("/city", new CityRouter(Injector.City()).getRouter())

export default locationRouter;