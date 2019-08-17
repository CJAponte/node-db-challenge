
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects').del()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {id: 1, name: 'Take out the trash',description: 'To the dumpster', completed: true},
        {id: 2, name: 'Take out the dog',description: 'To the park', completed: false},
        {id: 3, name: 'Take out the fish',description: 'To the pool', completed: false}
      ]);
    });
};
