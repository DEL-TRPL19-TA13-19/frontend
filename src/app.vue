<template>
  <Navbar/>
  <ul>
    <li>
      <router-link to="/login">Login</router-link>
    </li>
    <li>
      <router-link to="/">Dashboard</router-link>
    </li>
    <li>
      <router-link to="/collections">Collections</router-link>
    </li>
  </ul>
  <router-view/>
</template>

<script setup>



import {RouterLink, RouterView} from "vue-router";
import Navbar from "@/components/Navbar.vue";</script>
