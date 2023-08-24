// import UserController from "../controller/user";
// import Student from "../model/user/student";
// import StudentRepository from "../repositories/students";
// import UserService from "../services/user";

import EmployeeController from "../controller/employee";
import UserController from "../controller/user";
import Contact from "../model/contact";
import Employee from "../model/employee";
import User from "../model/user";
import ContactRepository from "../repositories/contact";
import EmployeeRepository from "../repositories/employee";
import UserRepository from "../repositories/user";
import EmployeeService from "../services/employee";
import UserService from "../services/user";

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
                    Employee
                ),
                new UserRepository(
                    User
                )
            )
        )
    }
}