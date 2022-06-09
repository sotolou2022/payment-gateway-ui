import { defineStore } from "pinia";

export const useMainStore = defineStore({
  id: "main",
  state: () => ({
    hideConfigButton: false,
    isPinned: true,
    showConfig: false,
    isTransparent: "bg-transparent",
    isRTL: false,
    color: "",
    isNavFixed: false,
    isAbsolute: false,
    showNavs: true,
    showSidenav: true,
    showNavbar: true,
    showFooter: true,
    showMain: true,
    navbarFixed:
      "position-sticky blur shadow-blur left-auto top-1 z-index-sticky px-0 mx-4",
    absolute: "position-absolute px-4 mx-0 w-100 z-index-2",
    bootstrap,
  }),
  getters: {
    getCredits: (state) => {
      return state.credits;
    },
    navClasses: (state) => {
       return {
        "position-sticky blur shadow-blur mt-4 left-auto top-1 z-index-sticky": state.isNavFixed,
        "position-absolute px-4 mx-0 w-100 z-index-2": state.isAbsolute,
        "px-0 mx-4 mt-4": !state.isAbsolute,
      };
    }
  },
  actions: {
    toggleConfigurator() {
      this.showConfig = !this.showConfig;
    },
    navbarMinimize() {
      const sidenav_show = document.querySelector(".g-sidenav-show");
      if (sidenav_show.classList.contains("g-sidenav-hidden")) {
        sidenav_show.classList.remove("g-sidenav-hidden");
        sidenav_show.classList.add("g-sidenav-pinned");
        this.isPinned = true;
      } else {
        sidenav_show.classList.add("g-sidenav-hidden");
        sidenav_show.classList.remove("g-sidenav-pinned");
        this.isPinned = false;
      }
    },
    sidebarType(payload) {
      this.isTransparent = payload;
    },
    cardBackground(payload) {
      this.color = payload;
    },
    navbarFixed() {
      if (this.isNavFixed === false) {
        this.isNavFixed = true;
      } else {
        this.isNavFixed = false;
      }
    },
    toggleEveryDisplay() {
      this.showNavbar = !this.showNavbar;
      this.showSidenav = !this.showSidenav;
      this.showFooter = !this.showFooter;
    },
    toggleHideConfig() {
      this.hideConfigButton = !this.hideConfigButton;
    },
    toggleSidebarColor( payload) {
        // commit("sidebarType", payload);
        this.isTransparent = payload;
      },
      setCardBackground( payload) {
        // commit("cardBackground", payload);
        this.color = payload;
      },

  },
});
