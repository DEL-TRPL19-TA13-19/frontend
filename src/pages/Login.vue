<template>
<!--  <h1>{{ loading ? "Yes" : "No" }}</h1>-->
<!--  <button @click="login">Test</button>-->
    <div>
        <b-container fluid="sm" class="login-container col-sm">
            <img src="../assets/images/dlh.png" class="rounded mx-auto d-block dlh-image" alt="Dinas Lingkungan Hidup">
            <h5 class="login-label">Dinas Lingkungan Hidup</h5>
            <hr>
            <h1 class="login-label">LOGIN</h1>
            <b-form>
                <b-form-group
                        id="input-group-username"
                        label="Username"
                        label-for="input-username"
                        label-cols-sm="3">
                    <b-form-input
                            id="input-username"
                            type="text"
                            required>
                    </b-form-input>
                </b-form-group>
                <b-form-group
                        id="input-group-password"
                        label="Password"
                        label-for="input-password"
                        label-cols-sm="3">
                    <b-form-input
                            id="input-password"
                            type="text"
                            required>
                    </b-form-input>
                </b-form-group>
                <b-button class="login-button" type="submit" variant="primary" align-h="center">Login</b-button>
            </b-form>
        </b-container>
    </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  computed: {
    ...mapGetters('auth', {
      loading: 'loading',
      authData: 'authData',
    }),
  },
  methods: {
    login() {
      this.$store.dispatch("auth/login", {
        email: "Andree",
        password: "Andree"
      }).then((data) => {
        console.log(this.authData);
        this.$router.push("/");
      });
    }
  }
}
</script>

<style>
@import "../assets/css/login.css";
</style>