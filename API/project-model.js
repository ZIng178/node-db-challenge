const db=require("../dbconfig")

function get(){
    return db("Projects")
}

module.exports={
    get
}