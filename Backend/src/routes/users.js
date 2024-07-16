module.exports = (fastify) => {
	const getAllUsers = require("../controllers/getAllUsers")(fastify);
	const getUser = require("../controllers/getUser")(fastify);
	
	fastify.get("/users", getAllUsers);
	fastify.post("/user", getUser);
};
