<template>
  <!--  <h1>{{ loading ? "Yes" : "No" }}</h1>-->
  <!--  <button @click="login">Test</button>-->
  <div>
    <b-container fluid="sm" class="login-container col-sm">
      <img
        src="../assets/images/dlh.png"
        class="rounded mx-auto d-block dlh-image"
        alt="Dinas Lingkungan Hidup"
      />
      <h5 class="login-label">Dinas Lingkungan Hidup</h5>
      <hr />
      <h1 class="login-label">LOGIN</h1>
      <router-link to="/">Dashboard</router-link>
      <b-form>
        <b-form-group
          id="input-group-username"
          label="Username"
          label-for="input-username"
          label-cols-sm="3"
        >
          <b-form-input id="input-username" type="text" required>
          </b-form-input>
        </b-form-group>
        <b-form-group
          id="input-group-password"
          label="Password"
          label-for="input-password"
          label-cols-sm="3"
        >
          <b-form-input id="input-password" type="text" required>
          </b-form-input>
        </b-form-group>
        <b-button
          class="login-button"
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
