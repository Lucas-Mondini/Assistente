import {Request, Response} from 'express'


interface ICrudController {
    //Create
    create  (req: Request, res: Response): Promise<Object> | never;
    //Read
    get     (req: Request, res: Response): Promise<Object> | never;
    index   (req: Request, res: Response): Promise<Object> | never;

    //Update
    update  (req: Request, res: Response): Promise<Object> | never;

    //Delete
    destroy (req: Request, res: Response): Promise<Object> | never;
}

export default ICrudController