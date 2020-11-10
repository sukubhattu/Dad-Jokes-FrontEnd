import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import router from "./router";

Vue.config.productionTip = false;

// Import axios and create a base URL
import axios from "axios";
axios.defaults.baseURL = "http://localhost:8000/";

// import store
import { store } from "./store/store";
new Vue({
	store,
	vuetify,
	router,
	render: (h) => h(App),
}).$mount("#app");
