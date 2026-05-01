import { Worker } from "bullmq";
import redis from "./config/redis.js";
import sharp from "sharp";
import path from "path";

const worker = new Worker("image_processing",async(job)=> 
{
    try                                                             
    {
        const {image,imageName} = job.data; 

        const filePath = image.path
        const outputPath = path.join("compressed",`compressed-${imageName}`);
        
        await sharp(filePath).resize(800).jpeg({quality:60}).toFile(outputPath);
        console.log("Image compressed")
    }   
    catch(err){
        console.error("Error processing image");
        throw err;
    } 
    
},{
        connection:redis   
    })