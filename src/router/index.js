import { createRouter, createWebHistory } from "vue-router";
import { useAuthStore } from "../store/useAuth";
import Dashboard from "../views/Dashboard.vue";

// import Tables from "../views/Tables.vue";
// import Billing from "../views/Billing.vue";
// import VirtualReality from "../views/VirtualReality.vue";
// import Profile from "../views/Profile.vue";
// import Rtl from "../views/Rtl.vue";
import SignIn from "../views/SignIn.vue";
// import SignUp from "../views/SignUp.vue";

const redirectToHomeOnLoggedIn = (to, from, next) => {
  if (useAuthStore().loggedIn) next({ name: "index" });
  else next();
};

const routes = [
  {
    path: "/",
    name: "/",
    redirect: "/sign-in",
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: Dashboard,
  },
  // {
  //   path: "/tables",
  //   name: "Tables",
  //   component: Tables,
  // },
  // {
  //   path: "/billing",
  //   name: "Billing",
  //   component: Billing,
  // },
  // {
  //   path: "/virtual-reality",
  //   name: "Virtual Reality",
  //   component: VirtualReality,
  // },
  // {
  //   path: "/profile",
  //   name: "Profile",
  //   component: Profile,
  // },
  // {
  //   path: "/rtl-page",
  //   name: "Rtl",
  //   component: Rtl,
  // },
  {
    path: "/sign-in",
    name: "sign-in",
    component: SignIn,
  },
  // {
  //   path: "/sign-up",
  //   name: "Sign Up",
  //   component: SignUp,
  // },
  {
    path: "/",
    name: "index",
    component: () => import("~~/index"),
    meta: { layout: "loggedIn" },
  },
  {
    path: "/accounts/login",
    name: "accounts-login",
    component: () => import("~~/accounts/login"),
    // component: () => import("../views/SignIn"),
    beforeEnter: redirectToHomeOnLoggedIn,
  },
  {
    path: "/accounts/reset",
    name: "accounts-reset",
    component: () => import("~~/accounts/reset"),
    beforeEnter: (to, from, next) => {
      if (useAuthStore().loggedIn) next({ name: "index" });
      else if (!to.query.email || !to.query.token)
        next({ name: "accounts-login" });
      else next();
    },
  },
  {
    path: "/accounts/forgot",
    name: "accounts-forgot",
    component: () => import("~~/accounts/forgot"),
    beforeEnter: redirectToHomeOnLoggedIn,
  },
  {
    path: "/accounts/register",
    name: "accounts-register",
    component: () => import("~~/accounts/register"),
    beforeEnter: redirectToHomeOnLoggedIn,
  },
  {
    path: "/accounts/logout",
    name: "accounts-logout",
    component: () => import("~~/accounts/logout"),
    meta: { requireAuth: true },
  },
  {
    path: "/:pathMatch(.*)*",
    component: () => import("~~/404.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  linkActiveClass: "active",
});

router.beforeEach((to, from, next) => {
  if (to.meta.requireAuth && !useAuthStore().loggedIn)
    next({ name: "accounts-login" });
  else next();
});

export default router;
