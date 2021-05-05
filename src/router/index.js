import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Signin from "../views/Signin.vue";
import Products from "../views/Products.vue";
import Signup from "../views/Signup.vue";
import Shop from "../views/shop.vue";

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home
    },
    {
        path: "/sign-up",
        name: "Signup",
        component: Signup
    },
    {
        path: "/sign-in",
        name: "Signin",
        component: Signin
    },
    {
        path: "/products",
        name: "Products",
        component: Products
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
