/*=========================================================================================
  File Name: main.js
  Description: main vue(js) file
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/


import Vue from 'vue'
import App from './App.vue'

// Vuesax Component Framework
import Vuesax from 'vuesax'
import 'material-icons/iconfont/material-icons.css' //Material Icons
import 'vuesax/dist/vuesax.css' // Vuesax
Vue.use(Vuesax)

// axios
import axios from './axios.js'
Vue.prototype.$http = axios

Vue.prototype.$buildUrl = function(path) {
  //return "https://fams24api.azurewebsites.net/api/" + path;
  return "https://localhost:44311/api/" + path;
 }

Vue.prototype.$ajaxGet = function (self, myUrl, onSuccess, onFinally) {
  var mySelf = this;
  return axios({
    method: 'get',
    url: mySelf.$buildUrl(myUrl),
  }).then(response => {
    if (onSuccess && typeof onSuccess == "function")
      onSuccess(response);
  })
    .catch(function (error) {
      var exception = "";
      var colour = "danger";
      if (error.response) {
        if (error.response.status == 401) {
          exception = error.response.data.message;
          colour = "warning";
        } else if (error.response.status == 405) {
          exception = error.response.data.message;
          colour = "warning";
        } else if (error.response.status == 498) {
          localStorage.setItem("accessToken","");
          exception = error.response.data.message;
          colour = "warning";
        }
      } else {
        exception = error.message;
        colour = "danger";
      }
      mySelf.$vs.notify({
        time: 6000,
        title: 'Error',
        text: exception,
        color: colour,
        iconPack: 'feather',
        icon: 'icon-alert-circle'
      });
    })
    .finally(onFinally)
}


Vue.prototype.$ajaxPost = function (self, myUrl, formData, onSuccess, onFinally) {
  var mySelf = this;
  return axios({
    method: 'post',
    url: mySelf.$buildUrl(myUrl),
    data: formData,
  }).then(response => {
    if (onSuccess && typeof onSuccess == "function")
      onSuccess(response);
  })
    .catch(function (error) {
      var exception = "";
      var colour = "danger";
      if (error.response) {
        if (error.response.status == 401) {
          exception = error.response.data.message;
          colour = "warning";
        } else if (error.response.status == 405) {
          exception = error.response.data.message;
          colour = "warning";
        } else if (error.response.status == 498) {
          localStorage.setItem("accessToken", "");
          exception = error.response.data.message;
          colour = "warning";
        }
      } else {
        exception = error.message;
        colour = "danger";
      }
      mySelf.$vs.notify({
        time: 6000,
        title: 'Error',
        text: exception,
        color: colour,
        iconPack: 'feather',
        icon: 'icon-alert-circle'
      });
    })
    .finally(onFinally);
}

// API Calls
import './http/requests'

// mock
import './fake-db/index.js'

// Theme Configurations
import '../themeConfig.js'


// Firebase
import '@/firebase/firebaseConfig'


// Auth0 Plugin
import AuthPlugin from './plugins/auth'
Vue.use(AuthPlugin)


// ACL
import acl from './acl/acl'


// Globally Registered Components
import './globalComponents.js'


// Styles: SCSS
import './assets/scss/main.scss'


// Tailwind
import '@/assets/css/main.css'


// Vue Router
import router from './router'


// Vuex Store
import store from './store/store'


// i18n
import i18n from './i18n/i18n'


// Vuexy Admin Filters
import './filters/filters'


// Clipboard
import VueClipboard from 'vue-clipboard2'
Vue.use(VueClipboard)


// Tour
import VueTour from 'vue-tour'
Vue.use(VueTour)
require('vue-tour/dist/vue-tour.css')


// VeeValidate
import VeeValidate from 'vee-validate'
Vue.use(VeeValidate)


// Google Maps
import * as VueGoogleMaps from 'vue2-google-maps'
Vue.use(VueGoogleMaps, {
  load: {
    // Add your API key here
    key: 'YOUR_KEY',
    libraries: 'places' // This is required if you use the Auto complete plug-in
  }
})

// Vuejs - Vue wrapper for hammerjs
import { VueHammer } from 'vue2-hammer'
Vue.use(VueHammer)


// PrismJS
import 'prismjs'
import 'prismjs/themes/prism-tomorrow.css'


// Feather font icon
require('./assets/css/iconfont.css')


// Vue select css
// Note: In latest version you have to add it separately
// import 'vue-select/dist/vue-select.css';


Vue.config.productionTip = false

new Vue({
  router,
  store,
  i18n,
  acl,
  render: h => h(App)
}).$mount('#app')
