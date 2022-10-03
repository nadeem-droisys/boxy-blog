import  express from "express";
import bodyParser from "body-parser";
import cors from 'cors';
import mongoose from "mongoose";
import router from "./postRoute.js";
import dotenv from 'dotenv'

const app = express();
app.use(cors())
app.use(bodyParser.json({limit:"30mb", extended:"true"}))
app.use(bodyParser.urlencoded({limit:"30mb", extended:"true"}))
dotenv.config()
const PORT = process.env.PORT;
const MONGO_DB = process.env.MONGO_DB;
mongoose.connect(MONGO_DB).then(()=>app.listen(PORT,()=>console.log('everything is fine'))).catch(err=>console.log(err))
app.get('/',(req,res)=>{
    res.send('hii from server');
})
app.use('/post',router)
