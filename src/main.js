import Vue from "vue";

Vue.config.productionTip = false;

import Demo from "./Demo.vue";

new Vue({
  el: "#app",
  render(h) {
    return h(Demo);
  },
});
