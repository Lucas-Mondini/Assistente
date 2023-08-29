import ejs from "ejs"
import fs from "fs"
import CrudGenerator from "./crudGenerator.js"

const name = process.argv[2]
new CrudGenerator(name)