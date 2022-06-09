import { defineStore } from "pinia";
import axios from "axios";

const baseUrl = "http://localhost:5000/api/";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    loggedIn: localStorage.getItem("token") ? true : false,
    // user: null,
    users: null,
    username: "",
    user: {},
  }),

  getters: {},

  actions: {
    async login(credentials) {
      console.log(" login:: " + JSON.stringify(credentials));
      this.username = credentials.username;
      // call authenticate
      const response = (await axios.post("api/authenticate", credentials)).data;
      console.log(" response:: " + JSON.stringify(response));

      if (response) {
        const token = `Bearer ${response.id_token}`;

        localStorage.setItem("token", token);
        axios.defaults.headers.common["Authorization"] = token;

        await this.ftechUser();
      }
    },

    async logout() {
      // const response = (await axios.post("api/logout")).data;

      // if (response) {
      localStorage.removeItem("token");

      this.$reset();
      // }
    },

    async ftechUser() {
      console.log("fetchUser!! ");
      const response = await axios.get("api/users/all");

      if (response.status === 200) {
        this.users = response.data;
        // this.users = (await axios.get("api/users/all")).data;
        if (this.users) {
          this.user = this.users.find(
            (user) => user.username === this.username
          );
          console.log("fetchUser: " + JSON.stringify(this.users));
          this.loggedIn = true;
        } else {
          console.log("Error: no users !! ");
          this.logout();
        }
      }
    },
  },
});
