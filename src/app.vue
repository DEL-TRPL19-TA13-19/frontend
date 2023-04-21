<template xmlns="http://www.w3.org/1999/html">
<!--    <Navbar v-if="!$route.meta.hideNavbar"/>-->
<!--  <Footer v-if="!$route.meta.hideFooter"/>-->

    <v-layout>
        <Sidebar v-if="!$route.meta.hideNavbar"/>
        <Navbar v-if="!$route.meta.hideNavbar"/>
        <v-main>
            <router-view/>
            <Footer v-if="!$route.meta.hideNavbar"/>
        </v-main>
    </v-layout>
</template>

<script setup>
import {RouterLink, RouterView} from "vue-router";
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";
import Sidebar from "@/components/Sidebar.vue";
</script>

