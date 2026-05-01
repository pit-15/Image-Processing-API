import { Worker } from "bullmq";
import redis from "./config/redis.js";
import sharp from "sharp";
import path from "path";
import fs from "fs"

const worker = new Worker("image_processing",async(job)=> 
{
    try                                                             
    {
        const {filePath,imageName} = job.data; 

        fs.mkdirSync("compressed",{recursive:true});

        const outputPath = path.join("compressed",`compressed-${imageName}`);
        
        await sharp(filePath).resize(800).jpeg({quality:60}).toFile(outputPath);
        
        console.log(`Image compressed: ${outputPath}`);
    }   
    catch(err){
        console.error("Error processing image",err);
        throw err;
    } 
    
},{
        connection:redis   
    })
export default worker;