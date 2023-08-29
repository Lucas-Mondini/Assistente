// import UserController from "../controllers/user";
// import Student from "../models/user/student";
// import StudentRepository from "../repositories/students";
// import UserService from "../services/user";

import CrudController from "../controllers/crud";
import EmployeeController from "../controllers/employee";
import UserController from "../controllers/user";
import Contact from "../models/contact";
import Employee from "../models/employee";
import User from "../models/user";
import ContactRepository from "../repositories/contact";
import EmployeeRepository from "../repositories/employee";
import UserRepository from "../repositories/user";
import EmployeeService from "../services/employee";
import UserService from "../services/user";
import CityInjector from "./crud/location/city";
import StateInjector from "./crud/location/state";

export default class Injector {
    public static User() : UserController {
        return new UserController(
            new UserService(
                new UserRepository(
                    User
                )
            )
        )
    }
    
    public static Employee() : EmployeeController {
        return new EmployeeController(
            new EmployeeService(
                new EmployeeRepository(
                    Employee, new ContactRepository(
                        Contact
                    )
                ),
                new UserRepository(
                    User
                )
            )
        )
    }

    public static State() : CrudController {
        return new StateInjector().Inject();
    }

    public static City() : CrudController {
        return new CityInjector().Inject();
    }
}