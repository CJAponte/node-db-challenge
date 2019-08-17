const db = require('../data/db-config')

module.exports = {
    getResources,
    getProjects,
    getTasks,
    addResource,
    addProject,
    addTask
  };


function getProjects(){
    return db('projects')
}

function addProject(project){
    return db('projects').insert(project);
}

function getTasks(){
    return db('task')
}

function addTask(task){
    return db('task').insert(task);
}

function getResources(){
    return db('resource')
}

function addResource(resource){
    return db('resource').insert(resource);
}




