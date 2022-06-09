<template>
  <div class="container top-0 position-sticky z-index-sticky">
    <div class="row">
      <div class="col-12">
        <navbar
          is-blur="blur blur-rounded my-3 py-2 start-0 end-0 mx-4 shadow"
          btn-background="bg-gradient-success"
          :dark-mode="false"
        />
      </div>
    </div>
  </div>
  <main class="mt-0 main-content main-content-bg">
    <section>
      <div class="page-header min-vh-75">
        <div class="container">
          <div class="row">
            <div class="mx-auto col-xl-4 col-lg-5 col-md-6 d-flex flex-column">
              <div class="mt-8 card card-plain">
                <div class="pb-0 card-header text-start">
                  <h3 class="font-weight-bolder text-success text-gradient">
                    Welcome back
                  </h3>
                  <p class="mb-0">Enter your email and password to sign in</p>
                </div>
                <div class="card-body">
                  <form @submit.prevent="onSubmit">
                    <!-- <form role="form" class="text-start"> -->
                    <label>Email</label>

  <input
    type="text"
    class="form-control"
    v-model="credentials.username"
    id="email"
    :class="error.errors.email ? 'is-invalid' : ''"
    :disabled="loading"
  />
                    <!-- <vsud-input
                      id="username"
                      type="text"
                      placeholder="username"
                      name="username"
                      value="owner"
                    /> -->


                    <label>Password</label>
    <input
      type="password"
      class="form-control"
      v-model="credentials.password"
      id="current-password"
      :class="error.errors.password ? 'is-invalid' : ''"
      :disabled="loading"
      autocomplete="false"
    />
                    <!-- <vsud-input
                      id="password"
                      type="password"
                      placeholder="Password"
                      name="password"
                      :value="credentials.password"
                    /> -->
                    <!-- <vsud-switch id="rememberMe" name="rememberMe" checked>
                      Remember me
                    </vsud-switch> -->
                    <div class="text-center">
                      <!-- <vsud-button
                        class="my-4 mb-2"
                        variant="gradient"
                        color="success"
                        full-width
                        >Sign in
                      </vsud-button> -->
                      <button
                        type="submit"
                        class="btn btn-outline-primary"
                      >
                        <!-- <div
                          v-if="loading"
                          class="spinner-border mx-3 spinner-border-sm"
                          role="status"
                        > -->
                          <!-- <span class="visually-hidden">Loading...</span> -->
                        <!-- </div> -->
                        <!-- <span v-else>Login</span> -->
                        Login
                      </button>
                    </div>
                  </form>
                </div>
                <div class="px-1 pt-0 text-center card-footer px-lg-2">
                  <p class="mx-auto mb-4 text-sm">
                    Don't have an account?
                    <!-- <router-link
                      :to="{ name: 'Sign Up' }"
                      class="text-success text-gradient font-weight-bold"
                      >Sign up</router-link
                    > -->
                  </p>
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div
                class="
                  top-0
                  oblique
                  position-absolute
                  h-100
                  d-md-block d-none
                  me-n8
                "
              >
                <div
                  class="
                    bg-cover
                    oblique-image
                    position-absolute
                    fixed-top
                    ms-auto
                    h-100
                    z-index-0
                    ms-n6
                  "
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
  <!-- <app-footer /> -->
</template>




<script setup>
import { ref, onBeforeUnmount } from "vue";
import { useRouter } from "vue-router";
import { useAuthStore } from "../store/useAuth";
import { useErrorStore } from "../store/useError";

// import { VsudInput } from "../components/VsudInput.vue";
// import { VsudButton } from "../components/VsudButton.vue";
import VsudInput from "../components/VsudInput.vue";
import VsudButton from "../components/VsudButton.vue";
import Navbar from "../examples/PageLayout/Navbar.vue";

const credentials = ref({});
const loading = ref(false);
const router = useRouter();
const error = useErrorStore();

const onSubmit = () => {
  console.log("onSubmit...");
  loading.value = !loading.value;

console.log("credentials: " + JSON.stringify(credentials.value));

  useAuthStore()
    .login(credentials.value)
    .then(() => router.push({ name: "index" }))
    .catch(() => (loading.value = !loading.value));
};

onBeforeUnmount(() => error.$reset());
</script>
