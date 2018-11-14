# SSH Stream issue

This will create a SSH tunnel and attempt to make a mysql connection.

Dependencies:

- [colors](https://github.com/Marak/colors.js)
- [ssh-tunnel](https://github.com/mitchheddles/tunnel-ssh) (forked verison with updated ssh2)
- [mysql](https://github.com/mysqljs/mysql)


The tunnel will connect, but once mysql tries to connect, there is the following issue:

```
Error: PEM_read_bio_PUBKEY failed
```

Removing `colors.setTheme({ key: "yellow" });` solves the issue.


### Setup

Install node modules: `yarn`

Then run: `USER=user HOST=host PW=password node index`

You don't need to worry about the mysql config, this is just setup to show that it throws during connection.
