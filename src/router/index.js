import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Help from "../views/Help.vue";
import Blog from "../views/Blog.vue";
import Shop from "../views/shop.vue";

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home
    },
    {
        path: "/blog",
        name: "Blog",
        component: Blog
    },
    {
        path: "/about",
        name: "About",
        component: About
    },
    {
        path: "/help",
        name: "Help",
        component: Help
    },
    {
        path: "/shop",
        name: "Shop",
        component: Shop
    }
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});

export default router;
