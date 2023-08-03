/*
 * @Date         : 2023-03-03 11:46:15
 * @Author       : BDFD,bdfd2005@gmail.com
 * @Github       : https://github.com/bdfd
 * @LastEditTime : 2023-03-03 15:20:54
 * @LastEditors  : BDFD
 * @Description  : 
 * @FilePath     : \controllers\AdminController.ts
 * Copyright (c) 2023 by BDFD, All Rights Reserved. 
 */
import { Request, Response, NextFunction } from 'express'
import { CreateVandorInput } from '../dto';
import { Vandor } from '../models';

export const CreateVandor = async (req:Request, res:Response, next:NextFunction) => {
    const { name, ownerName, foodType, pincode, address, phone, email, password} = <CreateVandorInput>req.body;
    const CreateVandor = await Vandor.create({
        name: name,
        address: address,
        pincode: pincode,
        foodType: foodType,
        email: email,
        password: password,
        salt: '',
        ownerName: ownerName,
        phone: phone,
        rating: 0,
        serviceAvailable: false,
        coverImages: [],
    })


    return res.json({name, ownerName, foodType, pincode, address, phone, email, password})
}

export const GetVandors = async (req:Request, res:Response, next:NextFunction) => {
    
}

export const GetVandorByID = async (req:Request, res:Response, next:NextFunction) => {
    
}