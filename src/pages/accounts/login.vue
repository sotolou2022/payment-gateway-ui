<template>
  <div class="col-12 col-md-6">
    <div class="card shadow rounded-lg">
      <div class="card-header fw-bold text-center">Login2</div>
      <div class="card-body">
        <logo-vue />

        <!-- <login-vue /> -->
        <sign-in/>
      </div>
    </div>
  </div>
</template>

<script setup>
import LogoVue from "../../components/Logo.vue";
import LoginVue from "../../components/Forms/Login.vue";
import SignIn from "../../views/SignIn.vue";


document.title = "Login";

// NOTE!! deprecate this page
// This page will be replaced by /views/SignIn.vue component when


</script>



