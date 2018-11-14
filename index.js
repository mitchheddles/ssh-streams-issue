const tunnel = require("tunnel-ssh");
const mysql = require("mysql");
const colors = require("colors");

// Remove this out and everything will work
colors.setTheme({ key: "yellow" });

const config = {
  username: process.env.USER,
  host: process.env.HOST,
  password: process.env.PW,
  dstHost: process.env.HOST,
  dstPort: 3306,
  localHost: "localhost",
  localPort: 33333,
  debug: console.log
};

const tnl = tunnel(config, (error, server) => {
  if (error) {
    console.error(error);
    return;
  }

  console.log(`Created tunnel to ${config.host}`);

  const db = mysql.createConnection({
    host: 'localhost',
    port: 33333,
    user: 'user',
    password: 'password',
    database: 'database',
    multipleStatements: true
  });

  db.connect(err => {
    if (err) {
      console.error(err);
      return;
    }

    console.log(`Connected to as id ${db.threadId}`);
  });
});

tnl.on("error", error => {
  console.error(error);
});
