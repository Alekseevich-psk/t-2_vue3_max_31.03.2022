import Main from "@/components/pages/Main";
import Welcome from "@/components/pages/Welcome";
import About from "@/components/pages/About";
import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
    {
        path: "/",
        component: Welcome,
    },
    {
        path: "/posts",
        component: Main,
    },
    {
        path: "/about",
        component: About,
    },
];

const router = createRouter({
    routes,
    history: createWebHashHistory(),
});

export default router;
