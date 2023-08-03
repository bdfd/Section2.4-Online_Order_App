/*
 * @Date         : 2023-03-02 13:37:57
 * @Author       : BDFD,bdfd2005@gmail.com
 * @Github       : https://github.com/bdfd
 * @LastEditTime : 2023-03-06 11:41:20
 * @LastEditors  : BDFD
 * @Description  : 
 * @FilePath     : \index.ts
 * Copyright (c) 2023 by BDFD, All Rights Reserved. 
 */
import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';

import { AdminRoute, VandorRoute} from './routes'
import { MONGO_URI } from './config';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))

app.use('/admin', AdminRoute)
app.use('/vandor', VandorRoute)

mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
}).then(result => {
    // console.log(result)
    console.log('DB connected')
}).catch(err => console.log('error'+ err))

app.use("/", (req,res)=>{
    return res.json("Hello from Food Order Backend!")
})

app.listen(8000,()=>{

    console.clear()
    console.log("App is listening to the port 8000...")
})