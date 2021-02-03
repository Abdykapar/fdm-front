import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './_router'
import store from './_store'
import VeeValidate from 'vee-validate';
import '@/assets/style/main.scss'
import VueToastr from "vue-toastr";
import i18n from './i18n'

Vue.use(VeeValidate);
Vue.use(VueToastr, {
  defaultTimeout: 3000,
  defaultPosition: "toast-top-right"
});

Vue.config.productionTip = false

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
