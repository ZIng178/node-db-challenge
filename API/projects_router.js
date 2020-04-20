const express=require('express')
const Projects=require("./project-model")

const router=express.Router()

router.get("/", (req,res)=>{
    Projects.get()
    .then(project=>{
        res.status(200).json(project)
    })
    .catch(err=>{
        res.status(500).json({message:"Could not find project",err})
    })

})

router.get("/:id", (req,res))

module.exports=router