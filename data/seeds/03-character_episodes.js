
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('character_episodes').insert([
    {character_id: 1, episodes_id: 1},
    {character_id: 2, episodes_id: 1},
    {character_id: 3, episodes_id: 1},
    {character_id: 2, episodes_id: 2},
    {character_id: 3, episodes_id: 2},
  ])
};
