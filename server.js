import express from 'express'
import dotenv from 'dotenv';
dotenv.config();
const app =  express()
app.use(express.json());

app.get("/",(req,res)=>
{
res.send("Sever running successfully");
})


app.listen(1001,()=>
{
    console.log("Server Listening on port 1001");
})  