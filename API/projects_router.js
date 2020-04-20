const express = require("express");
const Projects = require("./project-model");

const router = express.Router();

//PROJECTS TABLE

//GET PROJECTS

router.get("/projects", (req, res) => {
  Projects.get()
    .then((project) => {
      res.status(200).json(project);
    })
    .catch((err) => {
      res.status(500).json({ message: "Could not find project", err });
    });
});

//GET PROJECTS WITH ID

router.get("/projects/:id", (req, res) => {
  const { id } = req.params;
  Projects.getById(id)
    .then((project_id) => {
      if (project_id) {
        res.status(200).json(project_id);
      } else {
        res.status(404).json({ message: "Could not find the project" });
      }
    })
    .catch((error) => {
      res
        .status(500)
        .json({ message: "Could not find the specific project id", error });
    });
});

// ADD PROJECTS
router.post("/projects", (req, res) => {
  const projectBody = req.body;
  Projects.addProject(projectBody)
    .then((project) => {
      res.status(201).json(project);
    })
    .catch((err) => {
      res.status(500).json({ message: "Cannot add Projects", err });
    });
});

// FROM TASKS TABLE

//GET TASKS
// router.get("/:id/tasks", async (req,res)=>{
//     const findtask=await Projects.getTasks(req.params.id)
//  try{
//      res.status(200).json(findtask)
//  }
//  catch (error){
//    res.status(500).json("error")
//  }

// }
// )
//     Projects.getTasks(id)
//     .then(task=>{
//         res.status(200).json(task)
//     })
//     .catch(error=>{
//         res.status(500).json({message:"Failed to get tasks",error})
//     })
// })

router.get("/tasks", (req, res) => {
  Projects.getTasks()
    .then((task) => {
      res.status(200).json(task);
    })
    .catch((error) => {
      res
        .status(500)
        .json({ message: "Cannot find the list of projects", error });
    });
});

router.post("/addtasks", (req, res) => {
  const tasks = req.body;
  Projects.addTask(tasks)
    .then(task => {
      if (task) {
        res.status(200).json(task);
      } else {
        res
          .status(404)
          .json({ message: "Could not find project with given id." });
      }
    })
    .catch((err) => {
      res.status(500).json({ message: "Failed to create new task", err });
    });
});

//  RESOURCE TABLE

//GET RESOURCE

router.get("/resource", (req, res) => {
  Projects.getResources()
    .then((resource) => {
      res.status(200).json(resource);
    })
    .catch((error) => {
      res.status(500).json({ message: "Failed to get resources", error });
    });
});

// ADD RESOURCE
router.post("/resource", (req, res) => {
  const resourceBody = req.body;
  Projects.addResources(resourceBody)
    .then((resource) => {
      res.status(200).json(resource);
    })
    .catch((error) => {
      res.status(500).json({ message: "cannot find resource", error });
    });
});

module.exports = router;
