const Vue = window.Vue;
Vue.config.productionTip = false;

import Demo from "./Demo.vue";

Vue.component("Demo2", {
  template: `
  <div>demo2</div>
  `,
});

new Vue({
  components: {
    Lemon: {
      data() {
        return { n: 0 };
      },
      template: `
  <div>Lemon's n: {{n}}</div>
  `,
    },
    Demo,
  },
  data() {
    return {
      n: 0,
      array: [1, 2, 3, 4, 5, 6, 7, 8],
    };
  },
  template: `
  <div class="red">
        {{n}}
        <button @click="add">+1</button>
        <Lemon/>
        <Demo />
        <hr>
        {{filter()}}
    </div>
    `,
  methods: {
    add() {
      this.n += 1;
    },
    filter() {
      console.log("执行了 filter 函数");
      return this.array.filter((i) => i % 2 === 0);
    },
  },
}).$mount("#lemon");
