const router = require("express").Router();
const cloudinary = require("cloudinary");
const fs = require("fs")


//we will upload image on cloudinary
cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUD_API_KEY,
    api_secret:process.env.CLOUD_API_SECRET
})

//upload code
router.post('/upload' , (req,res)=>{
    try {
    //    console.log(req.files); 

       if(!req.files || Object.keys(req.files).length=== 0){
        return res.status(400).json({msg:"No files uploaded"})
       }

       const file = req.files.file;
       if(file.size>1024*1024){
        removeTmp(file.tempFilePath)
        return res.status(400).json({msg:"Size is too large"})
       }

       if(file.mimetype !== 'image/jpeg' && file.mimetype !=='image/png'){
        removeTmp(file.tempFilePath)
        return res.status(400).json({msg:"File format is invalid try to upload png/jpeg"})
       }

       cloudinary.v2.uploader.upload(file.tempFilePath , {folder:"blogs" }, async(err , result)=>{
        if(err) throw err;
        removeTmp(file.tempFilePath)

        res.json({public_id: result.public_id , url: result.secure_url})
       })

    } catch (error) {
        res.status(500).json({msg: error.msg})
    }
})

//delete the image
router.post('/destroy', async(req , res)=>{
    try {
        const public_id = req.body
        if(!public_id) return res.status(400).json({msg:"No image selected"})

        cloudinary.v2.uploader.destroy(public_id, async(err , result)=>{
            if(err) throw err;
            removeTmp(file.tempFilePath)
            res.json({msg: "Deleted Image"})
        })
    } catch (error) {
        return res.status(500).json({msg:error.message})
    }
})


//removing temp file form local
const removeTmp=(path)=>{
    fs.unlink(path,err=>{
        if(err) throw err;
    })
}


module.exports = router;