const db = require("../dbconfig");

function get() {
  return db("Projects");
}

function getById(id) {
  return db("Projects").where({ id }).first();
}

function addProject(project) {
  return db("Projects").insert(project, "id");
}

function addTask(task) {
  return db("Tasks").insert(task);
}

function getTasks() {
  return db("Tasks")
    .join("Projects", "Tasks.project_id", "Projects.id")
    //.where("Tasks.project_id", task_id)
    .select("Projects.name", "Tasks.*");
}

function addResources(body) {
  return db("Resources").insert(body);
}

function getResources() {
  return db("Resources");
}

module.exports = {
  get,
  getById,
  addProject,
  addTask,
  getTasks,
  getResources,
  addResources,
};
