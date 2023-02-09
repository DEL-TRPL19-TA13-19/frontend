<template>
  <button @click="store.commit('increment')">Click counter {{ store.state.count }}</button>
</template>

<script setup>
import {ref} from "vue";
import store from "@/store/index.js";

const counter = ref(0);
</script>
