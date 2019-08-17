const express = require('express');
const Projects = require('./project-model');
const router = express.Router();

router.get('/projects', async (req, res) => {  
    try {
      const projects = await Projects.getProjects();
      for(let i = 0; i < projects.length; i++){
        if(projects[i].completed == 0){
          projects[i].completed = false
        } else if(projects[i].completed == 1){
          projects[i].completed = true
        }
      }
      res.status(200).json(projects);
      console.log(projects)
    } catch (err) {
      res.status(500).json({ message: 'Could not retreive projects' });
    }
  });

router.post('/projects', async (req, res) => {
    const projectData = req.body;
    try {
      const project = await Projects.addProject(projectData);
      res.status(201).json(project);
    } catch (err) {
      res.status(500).json({ message: 'Could not add to projects' });
    }
  });

router.get('/resources', async (req, res) => {
    try {
      const resources = await Projects.getResources();
      res.status(200).json(resources);
    } catch (err) {
      res.status(500).json({ message: 'Could not retreive resources' });
    }
  });

router.post('/resources', async (req, res) => {
    const resourceData = req.body;
    try {
      const resource = await Projects.addResource(resourceData);
      res.status(201).json(resource);
    } catch (err) {
      res.status(500).json({ message: 'Could not add to resources' });
    }
  });

router.get('/tasks', async (req, res) => {
    try {
      const tasks = await Projects.getTasks();
      for(let i = 0; i < tasks.length; i++){
        if(tasks[i].completed == 0){
          tasks[i].completed = false
        } else if(tasks[i].completed == 1){
          tasks[i].completed = true
        }
      }
      console.log(tasks)
      res.status(200).json(tasks);
    } catch (err) {
      res.status(500).json({ message: 'Could not retreive tasks' });
    }
  });

router.post('/tasks', async (req, res) => {
    const taskData = req.body;
    try {
      const task = await Projects.addTask(taskData);
      res.status(201).json(task);
    } catch (err) {
      res.status(500).json({ message: 'Could not add to tasks' });
    }
  });


module.exports = router;