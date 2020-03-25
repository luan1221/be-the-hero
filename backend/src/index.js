const express = require('express')
const cors = require('cors')
const routes = require('./routes')

const app = express()

app.use(cors())
app.use(express.json())
app.use(routes)

app.listen(8080)

/*
 *    Rota     / Recurso
 localhost:3030/users
*/

/**
 * Métodos HTTP:
 * 
 * GET: Buscar informações do back-end
 * POST: Criar uma informação no back-end
 * PUT: Alterar uma infomação no back-end
 * DELETE: Deletar uma informaçã no back-end
 */

/**
 * Tipos de parâmetros:
 * 
 * Query Params: Parâmetros nomeados enviados na rota após "?" (Filtros, paginação)
 * Route Params: Parâmetros utilizados para identificar recursos
 * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
 */

/**
 * SQL: MySQL, SQLite, PostgreSQL, ORACLE, Microsoft SQL Server
 * NoSQL: MongoDB, CouchDB, etc. 
 */

 /**
  * Driver: SELECT * FROM users
  * Query Builder: table('users').select('*').where()
  */