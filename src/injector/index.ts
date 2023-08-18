// import UserController from "../controller/user";
// import Student from "../model/user/student";
// import StudentRepository from "../repositories/students";
// import UserService from "../services/user";

import UserController from "../controller/user";
import User from "../model/user";
import UserRepository from "../repositories/user";
import UserService from "../services/user";

export default class Injector {
    // public static Student() : UserController {
    //     return new UserController(
    //         new UserService(
    //             new StudentRepository(
    //                 Student, new Student()
    //             )
    //         )
    //     )
    // }

    public static User() : UserController {
        return new UserController(
            new UserService(
                new UserRepository(
                    User
                )
            )
        )
    }
}