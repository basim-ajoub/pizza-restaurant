import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

//fontawesome import
//Start Font Awesome
import {library} from '@fortawesome/fontawesome-svg-core'
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome';

import { fab } from '@fortawesome/free-brands-svg-icons';
library.add(fab);

import {fas} from '@fortawesome/free-solid-svg-icons'
library.add(fas);

import { far } from '@fortawesome/free-regular-svg-icons';
library.add(far);

Vue.component('fontawesome-icon',FontAwesomeIcon);
//End Font Awesome


Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
