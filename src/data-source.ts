import 'reflect-metadata'
import { DataSource } from "typeorm"

import 'dotenv/config';
import User from './model/user';
import Contact from './model/contact';
import Employee from './model/employee';
import City from './model/location/city';
import State from './model/location/state';

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