
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('episodes').insert([
    {name: 'test1', season: 1},
    {name: 'test2', season: 2},
    {name: 'test3', season: 3}
  ])
};
