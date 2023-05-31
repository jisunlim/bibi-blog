import { createWebHashHistory, createRouter } from "vue-router";

const routes = [
    {
        path: "/",
        component: () => import("@/views/Home.vue")
    },
    {
        path: "/content/:id",
        component: () => import("@/views/Content.vue")
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router;