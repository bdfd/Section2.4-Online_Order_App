/*
 * @Date         : 2023-03-02 13:37:57
 * @Author       : BDFD,bdfd2005@gmail.com
 * @Github       : https://github.com/bdfd
 * @LastEditTime : 2023-03-02 13:41:24
 * @LastEditors  : BDFD
 * @Description  : 
 * @FilePath     : \index.ts
 * Copyright (c) 2023 by BDFD, All Rights Reserved. 
 */
import express from 'express';

const app = express();

app.use("/", (req,res)=>{
    return res.json("Hello from Food Order Backend!")
})

app.listen(8000,()=>{
    console.log("App is listening to the port 8000...")
})