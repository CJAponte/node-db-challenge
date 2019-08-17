
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('task').del()
    .then(function () {
      // Inserts seed entries
      return knex('task').insert([
        {project_id: 1, task_id: 1, notes: 'Do it by 1pm', description: 'mom asked', completed: true, },
        {project_id: 2, task_id: 2, notes: 'Do it by 10am', description: 'mom asked', completed: false},
        {project_id: 3, task_id: 3, notes: 'Do it by 9am', description: 'mom asked', completed: false}
      ]);
    });
};
