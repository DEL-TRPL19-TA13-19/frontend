<template>
  <h1>{{ loading ? "Yes" : "No" }}</h1>
  <button @click="login">Test</button>
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