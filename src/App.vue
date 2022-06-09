<script setup lang="ts">
  import { storeToRefs } from "pinia";
  import { useMainStore } from "./store/useMain"
  // import Sidenav from "./examples/Sidenav/index.vue";
  import Configurator from "./examples/Configurator.vue";
  import Navbar from "./examples/Navbars/Navbar.vue";
  import AppFooter from "./examples/Footer.vue";


  // get main store
  const main = useMainStore();

  // use storeRefs to destructure main store
  const { navbarFixed, isRTL, isAbsolute, showNavbar, showFooter, hideConfigButton, showConfig } = storeToRefs(main);

  // access the actions in useMain store
  const { toggleConfigurator, navbarMinimize } = main;

  // hide main nav bar
  main.showNavbar = true;

</script>

<template>
  <main
    class="main-content position-relative max-height-vh-100 h-100 border-radius-lg"
    :style="isRTL ? 'overflow-x: hidden' : ''"
  >


    <!-- main  nav bar  -->
    <navbar
      :class="[main.navClasses]"
      :textWhite="isAbsolute ? 'text-white opacity-8' : ''"
      :minNav="navbarMinimize"
      v-if="main.showNavbar"
    />
    <router-view />


  <app-footer v-show="showFooter" />
   <configurator
      :toggle="toggleConfigurator"
      :class="[
        showConfig ? 'show' : '',
        hideConfigButton ? 'd-none' : '',
      ]"
    />
   
  </main>

</template>