/*
 * @Date         : 2023-03-03 11:46:03
 * @Author       : BDFD,bdfd2005@gmail.com
 * @Github       : https://github.com/bdfd
 * @LastEditTime : 2023-03-03 15:28:57
 * @LastEditors  : BDFD
 * @Description  : 
 * @FilePath     : \dto\Vandor.dto.ts
 * Copyright (c) 2023 by BDFD, All Rights Reserved. 
 */
export interface CreateVandorInput{
    name: string;
    ownerName: string;
    foodType: [string];
    pincode: string;
    address: string;
    phone: string;
    email: string;
    password: string;
}