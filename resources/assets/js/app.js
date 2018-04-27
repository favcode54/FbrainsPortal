import Vue from 'vue'
window.jQuery = window.$ = require('jquery');
window.AOS = require('AOS');
AOS.init();


import App from './App.vue'
import router from './router'

const app = new Vue({
	el: '#root',
	template: `<app></app>`,
	components: { App },
	router
})