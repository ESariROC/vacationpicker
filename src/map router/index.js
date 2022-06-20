import { createRouter, createWebHistory} from "vue-router";
import VacationPicker from "@/components/VacationPicker";

const routes = [
    //routes
    {
        path: '/',
        name: 'home',
        component: VacationPicker
    }
]

const router = createRouter(   {
    history:createWebHistory(process.env.BASE_URL), routes
})

export default router