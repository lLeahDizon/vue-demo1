const Vue = window.Vue;

Vue.config.productionTip = false;

import Demo from "./Demo.vue";

new Vue({
  components: { Demo },
  data: {
    visible: true,
    n: 0,
  },
  template: `
  <div>
    {{n}}
    <Demo :message="n" :fn="add" />
  </div>
  `,
  methods: {
    toggle() {
      this.visible = !this.visible;
    },
    add() {
      this.n += 1;
    },
  },
}).$mount("#lemon");
