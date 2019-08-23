import Home from './components/Home.vue';
import Kontaktai from './components/Kontaktai.vue';
import Sodyba from './components/Sodyba.vue';
import Veikla from './components/Veikla.vue';
import Vieta from './components/Vieta.vue';

const routes = [
    { path: '/', component: Home },
    { path: '/Kontaktai', component: Kontaktai },
    { path: '/Sodyba', component: Sodyba },
    { path: '/Veikla', component: Veikla },
    { path: '/Vieta', component: Vieta }
];

export default routes;
