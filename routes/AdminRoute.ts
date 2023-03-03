import express, {Request, Response, NextFunction} from 'express';

const router = express.Router();

router.use("/", (req:Request ,res:Response, next: NextFunction)=>{   
    res.json("Hello from Admin!")
})

export {router as AdminRoute}