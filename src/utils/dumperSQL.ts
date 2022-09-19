import mysqldump from "mysqldump";

export function SqlDumper() {
  try {
    mysqldump({
      connection: {
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
      },
      dumpToFile: `./src/sql/sql.sql`,
    });
  } catch (err) {
    console.log(err);
  }
}
