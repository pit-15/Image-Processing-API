import Redis from "ioredis";
import dotenv from "dotenv"
import path from "path"
dotenv.config(
    {path: path.resolve(process.cwd(), ".env")
        
    });

const redis = new Redis(process.env.REDIS_URL,{
    maxRetriesPerRequest:null,
    enableReadyCheck:false,
})

redis.on("connect",()=>
{

    console.log("Redis connected!")
})

redis.on("error",(err)=>
{
    console.log("Error Occurred:",err.message)
})

export default redis;