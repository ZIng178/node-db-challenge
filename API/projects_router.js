const express=require('express')

const router=express.Router()

router.get("/", (req,res)=>{
    res.json("hello from server")
})

module.exports=router