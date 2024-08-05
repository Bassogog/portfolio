import { createRouter, createWebHistory } from 'vue-router';
import IndexSection from '../components/IndexSection.vue';
import AboutSection from '../components/AboutSection.vue';
import AchievementSection from '../components/AchievementSection.vue';
import OtherSection from '../components/OtherSection.vue';
import ContactSection from '../components/ContactSection.vue';


const routes = [
    {
        path: '/',
        name: 'IndexSection',
        component: IndexSection  
    },
    {
        path: '/aboutsection',
        name: 'AboutSection',
        component: AboutSection  
    },
    {
        path: '/achievementsection',
        name: 'AchievementSection',
        component: AchievementSection  
    },
    {
        path: '/othersection',
        name: 'OtherSection',
        component: OtherSection  
    },
    {
        path: '/contactsection',
        name: 'ContactSection',
        component: ContactSection  
    },
   
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});
  
  export default router;