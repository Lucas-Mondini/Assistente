import {Request, Response} from 'express'


interface ICrudValidatorController {
    //Create
    validateCreate  (req: Request): boolean

    //Update
    validateUpdate  (req: Request): boolean

    //Delete
    validateDestroy (req: Request): boolean
}

export default ICrudValidatorController