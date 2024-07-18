const path = require("path");

module.exports = ({ env }) => ({
  connection: {
    client: "postgres",
    connection: {
      host: env("DATABASE_HOST", "aws-0-eu-central-1.pooler.supabase.com"),
      port: env("DATABASE_HOST", 6543),
      database: env("DATABASE_HOST", "postgres"),
      user: env("DATABASE_HOST", "postgres.hqvjskjaxswncsfkxhdw"),
      password: env("DATABASE_HOST", "aslancimbom41"),
      ssl: env.bool("DATABASE_HOST", false),
    },
    useNullAsDefault: true,
  },
});
