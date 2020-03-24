exports.up = function(knex) {
  return knex.schema.createTable("users", users => {
    users.increments();
    users.string("type", 128);
    users
      .string("email", 128)
      .notNullable()
      .unique();
    users
      .string("uid")
      .notNullable()
      .unique();
    users.text("first_name");
    users.text("last_name");
    users.text("profile_image");
    users.boolean("is_onboarded").defaultTo(false);
    users.timestamps(true, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("users");
};
