import express from "express"
import cors from "cors"
import "dotenv/config"
import mongoose from "mongoose"
import myUserRoot from "./routes/MyUserRoot"

const dbConnect = async ()=> {
    try{
        await mongoose.connect(process.env.MONGODB_URI as string)
        console.log("Connected to the database");

    }catch (error){
        console.log(error)
    }

}
dbConnect()
const app = express()
app.use(express.json())
app.use(cors())

app.use("/api/my/user", myUserRoot)

app.listen(7000, ()=> {
    console.log("server started at port 7000")
})