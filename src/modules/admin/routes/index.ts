import isAdminGuard from "@/modules/auth/guards/is-admin.guard";
import type { RouteRecordRaw } from "vue-router";

export const adminRoutes:RouteRecordRaw={
    path: '/admin',
    name: 'admin',
    beforeEnter:[isAdminGuard],
    component: () => import('@/modules/admin/layouts/AdminLayout.vue'),
    
};