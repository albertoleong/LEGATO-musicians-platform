/**
 * @param {Knex} knex
 * @returns {Promise<void>}
 */
export const up = async (knex) => {
    await knex.schema.createTable('inquiries', (table) => {
        table.increments('id').primary();
        table.string('email').notNullable();
        table.date('date').notNullable();
        table.string('description').notNullable();
        table.integer('artist_id').unsigned().notNullable();
        table.foreign('artist_id').references('id').inTable('artists');  
    });
};

/**
 * @param {Knex} knex
 * @returns {Promise<void>}
 */
export const down = async (knex) => {
    await knex.schema.dropTableIfExists('inquiries');
};
