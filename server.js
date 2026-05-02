import express from 'express'
import dotenv from 'dotenv';
dotenv.config();
import uploadRoutes from "./routes/uploadRoutes.js"

const app =  express()

app.use(express.json());

app.use("/",uploadRoutes)

app.get("/health",(req,res)=>
{
res.send("Sever running successfully");
})

const PORT= process.env.PORT;
app.listen(PORT,()=>
{
    console.log(`Server Listening on port ${PORT}`);
})  