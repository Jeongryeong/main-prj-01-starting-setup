import { createRouter, createWebHistory } from "vue-router";

import CoachDetail from './pages/coaches/CoachDetail.vue';
import CoachesList from './pages/coaches/CoachesList.vue';
import CoachRegisteration from './pages/coaches/CoachRegisteration.vue';
import CoachContact from './pages/requests/CoachContact.vue';
import RequestReceived from './pages/requests/RequestReceived.vue';
import NotFound from './pages/NotFound.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/', redirect: '/coaches'},
        {path: '/coaches', component: CoachesList},
        {
            path: '/coaches/:id', 
            component: CoachDetail, 
            props: true,
            children: [
                {path: 'contact', component: CoachContact}
        ]},
        {path: '/register', component: CoachRegisteration},
        {path: '/requests', component: RequestReceived},
        {path: '/notFound(.*)', component: NotFound}
    ]
});

export default router;