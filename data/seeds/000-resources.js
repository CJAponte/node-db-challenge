
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resource').del()
    .then(function () {
      // Inserts seed entries
      return knex('resource').insert([
        {resource_id: 1, project_id: 1, name: 'gloves', description: 'extra sturdy'},
        {resource_id: 2, project_id: 2, name: 'leach', description: 'boy gotta walk'},
        {resource_id: 3, project_id: 3, name: 'fish net', description: 'goldfish need to swim'}
      ]);
    });
};
