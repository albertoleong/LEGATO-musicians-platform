/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
export async function seed(knex)  {
  // Deletes ALL existing entries
  await knex('artists').del()
  await knex('artists').insert([
    {
      id: 1,
      name: "Alberto Leong",
      type: "solo artist",
      music_styles: 'indie, pop, blues, rock, singer-songwriter',
      instruments: "guitar",
      location: "Columbus, OH",
      description: "Alberto Leong is a solo singer-songwriter known for his versatility as an electric guitar player. With a repertoire spanning indie, pop, blues, and rock, Alberto is ready for any gig.', 'alberto@example.com",
      email: "alberto@example.com"
    },
    {
      id: 2,
      name: "Bryan Blau",
      type: "solo artist",
      music_styles: 'folk, pop',
      instruments: "guitar",
      location: "Columbus, OH",
      description: "Bryan Balu is a solo singer-songwriter known for his folk voice and and skillfull rhythm guitar playing",
      email: "bbblau@example.com"
    },
    {
      id: 3,
      name: "Carla Mai",
      type: "solo artist",
      music_styles: 'R&B, pop, gospel',
      instruments: "vocalist",
      location: "Columbus, OH",
      description: "Carla is an incredible vocalist with a soulful voice.",
      email: "carla@example.com"
    }
  ]);
};
