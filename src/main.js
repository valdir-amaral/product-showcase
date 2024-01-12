import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import PageLoading from '@/components/PageLoading.vue'
import "@/assets/global.css"; 

const app = createApp(App)

app.component(PageLoading)
app.use(store).use(router).mount('#app');
