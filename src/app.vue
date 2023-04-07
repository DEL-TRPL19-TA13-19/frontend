<template>
    <Navbar v-if="!$route.meta.hideNavbar"/>
    <router-view/>
  <Footer v-if="!$route.meta.hideFooter"/>
</template>

<script setup>
import {RouterLink, RouterView} from "vue-router";
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";
</script>

