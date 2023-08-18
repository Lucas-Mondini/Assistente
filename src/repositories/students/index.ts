// import { EntityTarget } from "typeorm";
// import CrudRepository from "../crud";
// import { AppDataSource } from "../../data-source";
// import Student from "../../model/user/student";
// import IStudentRepository from "./interface";

// export default class StudentRepository extends CrudRepository implements IStudentRepository {
//     private student: Student;
//     private studentModel: EntityTarget<Student>;
//     constructor(model: EntityTarget<Student>, instance: Student) {
//         super(model);
//         this.student = instance;
//         this.studentModel = model;
//     }

//     create = async (data: any): Promise<Object> => {
//         const student = await new Student();
//         student.name = data.name;
//         student.email = data.email;
//         student.password = data.password;
//         student.period = data.period;
//         student.registration = data.registration;
//         this.student = student;
//         await AppDataSource.getRepository(this.studentModel).save(student);
//         return student;

//     }
//     update = async (id: number, data: any): Promise<Object> =>{
//         const student = await AppDataSource.getRepository(this.studentModel).findOneByOrFail({id: id});
//         student.name = data.name;
//         student.email = data.email;
//         student.password = data.password;
//         student.period = data.period;
//         student.registration = data.registration;
//         this.student = student;
//         await AppDataSource.getRepository(this.studentModel).save(student);
//         return student;
//     }
// }

