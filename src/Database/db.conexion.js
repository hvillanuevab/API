const pgp = require("pg-promise")();

const cn ={
    host:"127.0.0.1",
    port: "5432",
    database: "pedidos",
    user: "postgres",
    password: "postgres"
}

const db = pgp(cn);

module.exports = db;