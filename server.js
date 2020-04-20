const express = require('express');
const server = express();
const project_router=require("./API/projects_router")

server.use(express.json());
server.use("/projects", project_router)
module.exports = server;