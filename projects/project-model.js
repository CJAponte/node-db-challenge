const db = require('../data/db-config')

module.exports = {
    find,
    findById,
    findTasks,
    add,
    update,
    remove,
    addTask
}

function find(){
    return db('projects')
}

function findById(id) {
    return db('projects')
        .where({ id });
}

function findTasks(id) {
    return db('tasks')
        .where({ scheme_id: id });
}

function add({ scheme_name }) {
    return db('projects').insert({ scheme_name });
}

function update({ scheme_name }, id) {
    return db('projects')
        .where({ id })
        .update({ scheme_name })
}

function remove(id) {
    return db('projects')
        .where({ id })
        .del()
}

function addTask({ instructions, step_number }, id) {
    return db('tasks')
        .insert({ instructions, step_number, scheme_id: id })
}