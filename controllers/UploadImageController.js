import queue from "../bullmq/queue_implementation.js"

export const uploadImage = async (req,res)=>
{
    try
    {
        if(!req.file)
        {
            return res.status(404).json({error:"Image not uploaded"});
        }
        const image = req.file;
        
        await queue.add("image_processing",
            {
                filePath: image.path,
                imageName: image.originalname,
            },
            {
                attempts:3,
                removeOnComplete:true,
                removeOnFail:false
            }
        )                           
        res.status(200).json({
                                message:"Image Added to the queue",
                                filename:image.filename, });
    }
    catch(err)
    {
        console.error("Upload error:",err)
        res.status(500).json({error:"Upload failed"})
    }
}