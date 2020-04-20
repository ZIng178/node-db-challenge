const express=require('express')
const Projects=require("./project-model")

const router=express.Router()

router.get("/projects", (req,res)=>{
    Projects.get()
    .then(project=>{
        res.status(200).json(project)
    })
    .catch(err=>{
        res.status(500).json({message:"Could not find project",err})
    })

})



router.get("/projects/:id", (req,res)=>{
    const{id}=req.params
    Projects.getById(id)
    .then(project_id=>{
        if(project_id){
         res.status(200).json(project_id)
        }
        else{
            res.status(404).json({message:"Could not find the project"})
        }
        
    })
    .catch(error=>{
        res.status(500).json({message:"Could not find the specific project id", error})
    })
})

router.post("/projects", (req,res)=>{
    const projectBody=req.body
    Projects.addProject(projectBody)
    .then(project=>{
        res.status(201).json(project)
    })
    .catch(err=>{
        res.status(500).json({message: "Cannot add Projects", err})
    })
})

router.get("/tasks", (req,res)=>{
    Projects.getTasks()
    .then(task=>{
        res.status(200).json(task)
    })
    .catch(error=>{
        res.status(500).json({message:"Failed to get tasks"}, error)
    })
})

router.get("/resource", (req,res)=>{
    Projects.getResources()
    .then(resource=>{
        res.status(200).json(resource)
    })
    .catch(error=>{
        res.status(500).json({message:"Failed to get resources", error})
    })
})

router.post("/resource", (req,res)=>{
    const resourceBody=req.body
    Projects.addResources(resourceBody)
    .then(resource=>{
        res.status(200).json(resource)
    })
    .catch(error=>{
        res.status(500).json({message: "cannot find resource", error})
    })
})


module.exports=router