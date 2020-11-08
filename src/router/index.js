import Vue from "vue";
import VueRouter from "vue-router";

import Home from "../views/Home.vue";
// import DetailPage from "../views/DetailPage.vue";

Vue.use(VueRouter);

const routes = [
	{
		path: "/",
		name: "Home",
		component: Home,
	},

	{
		path: "/random",
		name: "Random",
		component: () =>
			import(/* webpackChunkName: "Random" */ "../views/RandomDetail.vue"),
	},
	{
		path: "/:id",
		name: "Detail",
		component: () => {
			return import(/* webpackChunkName: "Detail" */ "../views/DetailPage.vue");
		},
		children: [
			{
				path: "edit/",
				name: "JokeEdit",
				component: () =>
					import(/* webpackChunkName: "Detail" */ "../components/EditJoke.vue"),
			},
		],
	},
];

const router = new VueRouter({
	mode: "history",
	base: process.env.BASE_URL,
	routes,
});

export default router;
