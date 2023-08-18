import Express from 'express'
import mainRouter from './routes/mainRouter'
import cors from  'cors';
import { AppDataSource } from './data-source';
import 'reflect-metadata'
import 'dotenv'
import bodyParser from 'body-parser';

const corsOptions = {
    origin: "*",
    optionSuccessStatus: 200
}

const app = Express();
app.use(cors(corsOptions));
app.use(Express.json());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(mainRouter);

AppDataSource.initialize().then(()=> {
    app.listen(process.env.PORT, ()=> {
        console.log("iniciado na porta "+ process.env.PORT)
    });
})