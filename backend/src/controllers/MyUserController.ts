import { Request,Response } from "express";
import User from "../models/User";

const createCurrentUser = async( req:Request, res: Response)=> {

    try {
        const {auth0Id} = req.body
        const existingUser= await User.findOne({auth0Id}) 

        if (existingUser) {
            return res.status(200).send()
        }
        const newUser = new User(req.body)
        await newUser.save()
        res.status(201).json(newUser.toObject())

    } catch (error) {
        console.log(error)
        res.status(500).json({message: "Error creating user"})

    }

}
const updateUser= async( req: Request, res:Response)=> {
    try {
        const {name, city, address, country, phoneNumber } = req.body
        const user = await User.findById(req.userId)

        if(!user) {
            return res.status(404).json({message: "User not found"})
        }

        user.name = name
        user.city =city
        user.address =address
        user.country= country
        user.phoneNumber =phoneNumber

        await user.save()
        res.send(user)

       
    } catch(error) {
        console.log(error)
        res.status(500).json({message: "Error updating User"})
        
    }

}

export default {
    createCurrentUser ,updateUser
}