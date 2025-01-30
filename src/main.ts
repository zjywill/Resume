import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import 'github-markdown-css/github-markdown.css';

import { createHead } from '@unhead/vue'; // <--

const app = createApp(App);
const head = createHead(); // <--
app.use(head); // <--
app.mount('#app');
