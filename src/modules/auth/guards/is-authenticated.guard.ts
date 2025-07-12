import type { NavigationGuardNext, RouteLocationNormalized } from 'vue-router';
import { useAuthStores } from '../stores/auth.stores';
import { AuthStatus } from '../interfaces';

const isAuthenticatedGuard = async (
  to: RouteLocationNormalized,
  from: RouteLocationNormalized,
  next: NavigationGuardNext,
) => {

const isNotAuthenticatedGuard = async (
  to: RouteLocationNormalized,
  from: RouteLocationNormalized,
  next: NavigationGuardNext,
) => {
  const authStore=useAuthStores();
  await authStore.checkAuthStatus();

  authStore.authStatus===AuthStatus.Unauthenticated 
  ? next({ name: 'home' })
  : next();
};

};

export default isAuthenticatedGuard;
