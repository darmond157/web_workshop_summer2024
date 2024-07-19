import { createRouter, createWebHistory } from "vue-router";

import Signup from "../pages/Signup.vue";
import Landing from "../pages/Landing.vue";

const routes = [
	{ path: "/", component: Landing },
	{ path: "/signup", component: Signup },
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;
