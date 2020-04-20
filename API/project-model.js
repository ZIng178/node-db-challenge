const db=require("../dbconfig")

function get(){
    return db("Projects")
}

function getById(id){
    return db("Projects")
    .where({id})
    .first()
}

function addProject(project){
    return db("Projects")
    .insert(project,"id")
    
}

function addTask(task, porject_id){
    return db("Tasks")
    .where({project_id})
    .insert({project_id:project_id})
}


    function getTasks(task_id) {
        return db("Tasks")
        .join("Project", "Project.id", "task.project_id")
        .where("task.project_id", task_id)
    }

    function getResources() {
        return db("Resources");
      }
      
      function addResources(body) {
        return db("Resources").insert(body);
      }
        
        


module.exports={
    get,
    getById,
    addProject,
    addTask,
    getTasks,
    getResources,
    addResources
}