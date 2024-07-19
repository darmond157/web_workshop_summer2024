require("dotenv").config();
const fastify = require("fastify")({ logger: true });

require("./src/plugins/postgres")(fastify);
require("./src/plugins/cors")(fastify);
require("./src/plugins/multipart")(fastify);
require("./src/routes/users")(fastify);

fastify.listen({ port: process.env.PORT, host: process.env.HOST });
