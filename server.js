import express from 'express'
import dotenv from 'dotenv';
dotenv.config();
const app =  express()
app.use(express.json());

app.get("/",(req,res)=>
{
res.send("Sever running successfully");
})


const PORT= process.env.PORT;
app.listen(PORT,()=>
{
    console.log("Server Listening on port 1001");
})  