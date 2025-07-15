import isAdminGuard from "@/modules/auth/guards/is-admin.guard";
import type { RouteRecordRaw } from "vue-router";

export const adminRoutes:RouteRecordRaw={
    path: '/admin',
    name: 'admin',
    beforeEnter:[isAdminGuard],
    redirect: { name: 'admin-dashboard' },
    component: () => import('@/modules/admin/layouts/AdminLayout.vue'),
    children:[
        {
            path:'dashboard',
            name:'admin-dashboard',
            component: () => import('@/modules/admin/views/DashBoard.vue'),
        },
        {
            path: 'products',
            name: 'admin-products',
            component: () => import('@/modules/admin/views/Productsview.vue'),
        },
         {
            path: 'products/:productId',
            name: 'admin-product',
            props: true,
            component: () => import('@/modules/admin/views/ProductView.vue'),
        },
    ],
};