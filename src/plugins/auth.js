import { useAuthStore } from "../store/useAuth";

export default {
  install: ({ config }) => {
    config.globalProperties.$auth = useAuthStore();

    if (useAuthStore().loggedIn) {
      console.log("auth.js: logged in ");
      useAuthStore().ftechUser();
    }else{
      console.log("auth.js: not logged in ");
    }
  },
};
