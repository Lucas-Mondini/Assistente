import 'reflect-metadata'
import { DataSource } from "typeorm"

import 'dotenv/config';
import User from './models/user';
import Contact from './models/contact';
import Employee from './models/employee';
import City from './models/location/city';
import State from './models/location/state';

const host = process.env.DATABASE_HOST;
const port = Number(process.env.DATABASE_PORT);
const username = process.env.DATABASE_USERNAME;
const password = process.env.DATABASE_PASSWORD;
const database = process.env.DATABASE_DATABASE;

export const AppDataSource = new DataSource({
    type:   'postgres',
    host:   host,
    port:   port,
    username:   username,
    password:   password,
    database:   database,
    synchronize:    true,
    logging:        false,
    entities: [
        User,
        Contact,
        Employee,

        City,
        State
    ],
    subscribers: [],
    migrations: [],
});