import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import HomePage from './HomePage.vue'
import recipeList from './recipeListPage'

import { BootstrapVue } from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
// Install BootstrapVue
Vue.use(BootstrapVue);

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {
    path: '/',
    name: 'Home',
    component: HomePage
    },
    {
      path: '/recipes',
      name: 'recipes',
      component: recipeList
    }
  ]
})

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
