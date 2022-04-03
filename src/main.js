import { createApp } from 'vue';
import { createWebHashHistory, createRouter } from "vue-router";
import App from './App.vue';
import Main from './view/Main.vue';
import Config from './view/Config.vue';

const routes = [
    { path: '/', component: Main },
    { path: '/config', component: Config },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

createApp(App).use(router).mount('#app')
