<template>
  <!--  <h1>{{ loading ? "Yes" : "No" }}</h1>-->
  <!--  <button @click="login">Test</button>-->
  <div>
    <b-container fluid="sm" class="login-container col-sm shadow-sm">
      <img
        src="../assets/images/hd.png"
        class="rounded mx-auto d-block dlh-image"
        alt="Dinas Lingkungan Hidup"
      />
      <h4 class="login-label">Sistem Pendukung Keputusan</h4>
      <h5>Metode AHP</h5>
      <hr />
      <!--      <router-link to="/">Dashboard</router-link>-->
      <b-form>
        <b-form-group
          id="input-group-username"
          label="Username"
          label-for="input-username"
          class="text-left"
        >
          <b-form-input
            id="input-username"
            type="text"
            required
            placeholder="Username"
          >
          </b-form-input>
        </b-form-group>
        <b-form-group
          id="input-group-password"
          label="Password"
          class="text-left"
          label-for="input-password"
        >
          <b-form-input id="input-password" type="text" required>
          </b-form-input>
        </b-form-group>
        <b-button
          class="login-button w-25 mt-4"
          type="submit"
          variant="primary"
          align-h="center"
          >Login</b-button
        >
      </b-form>
    </b-container>
  </div>
</template>

<script></script>

<style>
@import "../assets/css/login.css";
</style>
