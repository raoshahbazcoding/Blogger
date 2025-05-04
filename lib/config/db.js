import mongoose from "mongoose";

 export const ConnectDB = async()=>{
    await mongoose.connect('mongodb+srv://meracodestyle:9nIUpNW6Qpnk3Yk7@cluster0.90umpwl.mongodb.net/blog-app')
    console.log("DB Connected");
    
}