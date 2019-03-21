import Vue from "vue";
import App from "./App.vue";

Vue.config.productionTip = false;

Vue.filter("upperCase", function(value) {
  return value.toUpperCase();
});

Vue.filter("uncapitalize", function(value) {
  if (!value) {
    return "";
  }

  value = value.toString();

  return value.charAt(0).toLowerCase() + value.slice(1);
});

new Vue({
  render: h => h(App)
}).$mount("#app");
