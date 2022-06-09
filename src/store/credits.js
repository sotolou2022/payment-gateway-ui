import axios from "axios";
import { defineStore } from "pinia";

const baseUrl = "http://localhost:5000/api/payment/";
const creditUrl = "api/payment/getAllCredits";

export const useCreditStore = defineStore({
  id: "credit",
  state: () => ({
    credits: [],
    token: "",
    errorMessage: null,
  }),
  getters: {
    getCredits: (state) => {
      return state.credits;
    },
  },
  actions: {
    async fetchCredits() {
      console.log("fetchCredits!! ");
      this.credits = [];

      try {
        const creditResponse = await axios.get(creditUrl);

        if (creditResponse) {
          this.credits = creditResponse.data;
          console.log("credit data: " + this.credits);
        }
      } catch (error) {
        this.errorMessage = error;

        if (error.response.status === 401) {
          console.log("error message: " + this.errorMessage);
          // re-auth if 401 error
        }

        return Promise.reject(error.response.data);
      }
    },
  },
});
