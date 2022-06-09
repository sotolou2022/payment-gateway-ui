
 <template>
    <div class="card mb-4">
      <div class="card-header pb-0">
        <h6>Cancel Transactions</h6>
        {{ authState.id_token}}
      </div>
      <!-- <pre>
          <div>
           {{ date }}
          </div>
              
      </pre> -->

      <div class="card-body px-0 pt-0 pb-2">
        <div class="table-responsive p-0">
          <table class="table align-items-center mb-0">
            <thead>
              <tr>
                <th
                  class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
                >
                  Id
                </th>
                <th
                  class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2"
                >
                  order Number
                </th>
                <th
                  class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
                >
                  Refund Amount
                </th>
                <th
                  class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
                >
                  Merchant Type
                </th>
                <th
                  class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
                >
                  STATUS
                </th>
                <th
                  class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
                >
                  submit time
                </th>
                 <th
                  class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
                >
                  message
                </th>
               
              </tr>
            </thead>
            <tbody>
             <!-- row 1 -->
              <tr v-for="credit in creditState.credits" :key="credit.id">
                <!-- <span>{{idx+1}}</span> -->
  
                <td>
                  <div class="d-flex px-2 py-1">
                    <div class="d-flex flex-column justify-content-center">
                      <h6 class="mb-0 text-sm">{{credit.id}}</h6>
                      <!-- <p class="text-xs text-secondary mb-0">
                        john@creative-tim.com
                      </p> -->
                    </div>
                  </div>
                </td>
                <td>
                     <div class="d-flex flex-column justify-content-center">
                      <h6 class="mb-0 text-sm">{{credit.orderNumber}}</h6>
                      <!-- <p class="text-xs text-secondary mb-0">
                        john@creative-tim.com
                      </p> -->
                    </div>
                </td>
                <td class="align-middle text-center text-sm">
  
                  <div v-if="credit.state != 'REFUNDED'">
                      <div class="d-flex flex-column justify-content-center">
                          <h6 class="mb-0 text-sm">-</h6>
                          <!-- <p class="text-xs text-secondary mb-0">
                          john@creative-tim.com
                          </p> -->
                      </div>
                  </div>
                  <div v-else>
                      <div class="d-flex flex-column justify-content-center">
                          <h6 class="mb-0 text-sm">${{credit.totalAmount}}</h6>
                          <!-- <p class="text-xs text-secondary mb-0">
                          john@creative-tim.com
                          </p> -->
                      </div>
                  
                  </div>
  
                </td>
                
                <td class="align-middle text-center">
                   <div class="d-flex flex-column justify-content-center">
                      <h6 class="mb-0 text-sm">{{credit.merchantType}}</h6>
                      <!-- <p class="text-xs text-secondary mb-0">
                        john@creative-tim.com
                      </p> -->
                    </div>
                </td>
                <!-- button -->
                 <td class="align-middle text-center text-sm">
                  <div v-if="credit.state == 'REFUNDED'">
                      <vsud-badge color="success" variant="gradient" size="sm"
                      >{{ credit.state }}</vsud-badge
                      >
                  </div>
                  <div v-else-if="credit.state == 'VOIDED'">
                       <vsud-badge color="primary" variant="gradient" size="sm" active="false"
                      >{{ credit.state }}</vsud-badge
                      >
                  </div>
                  <div v-else-if="credit.state == 'REVERSED'">
                       <vsud-badge color="warning" variant="gradient" size="sm"
                      >{{ credit.state }}</vsud-badge
                      >
                  </div>
                   <div v-else-if="credit.state == '.'">
                       <vsud-badge color="secondary" variant="gradient" size="sm"
                      >{{ credit.state }}</vsud-badge
                      >
                  </div>
                  
                </td>
                 <td class="align-middle text-center">
                   <div class="d-flex flex-column justify-content-center">
                      <h6 class="mb-0 text-sm">{{credit.submitTime}}</h6>
                      <!-- <p class="text-xs text-secondary mb-0">
                        john@creative-tim.com
                      </p> -->
                    </div>
                </td>
                 <td class="align-middle text-center">
                   <div class="d-flex flex-column justify-content-center">
                      <h6 class="mb-0 text-sm">{{credit.message}}</h6>
                      <!-- <p class="text-xs text-secondary mb-0">
                        john@creative-tim.com
                      </p> -->
                    </div>
                </td>
              
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      
    </div>




 <div v-if="!userState.loading && userState.users.length > 0" class="container">
      <div class="row">
        <div class="col">
          <table class="table table-hover text-center table-striped">
            <thead class="bg-secondary text-white">
            <tr>
              <th>SNO</th>
              <th>Name</th>
              <th>Email</th>
              <th>Website</th>
              <th>Company</th>
              <th>Location</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="user in userState.users" :key="user.id">
              <td>{{ user.id }}</td>
              <td>{{ user.name }}</td>
              <td>{{ user.email }}</td>
              <td>{{ user.website }}</td>
              <td>{{ user.company.name }}</td>
              <td>{{ user.address.city }}</td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
</template>

<script>


import VsudBadge from "../../components/VsudBadge.vue";
// import img1 from "../../assets/img/team-1.jpg";
// import img2 from "../../assets/img/team-2.jpg";
// import img3 from "../../assets/img/team-3.jpg";
// import img4 from "../../assets/img/team-3.jpg";
// import img5 from "../../assets/img/team-2.jpg";
// import img6 from "../../assets/img/team-4.jpg";
import { mapGetters } from "vuex";


export default {
  name: "authors-table",
  data() {
    return {
      // img1,
      // img2,
      // img3,
      // img4,
      // img5,
      // img6,
      user: { 
        username: 'owner',
        password: 'L2ybatg777!@'
      }
    };
  },
  components: {
    VsudBadge,
  },
  created: function (){
    // this.$store.dispatch("authModule/login", this.user);
    this.$store.dispatch("usersModule/getUsers");
    // this.$store.dispatch("usersModule/getCredits");

  },
  computed: mapGetters(
    {
    userState: "getUsersState",
    // authState: "getAuthState",
    // creditState: "getCreditState",
    date: "getFormattedDate"
  })

  
};
</script>


