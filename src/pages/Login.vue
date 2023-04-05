<template>
  <h1>Halaman login</h1>
  <p>{{ tps.data }}</p>
</template>

<script setup>
import { useTpsStore } from "@/store/Tps";
import { storeToRefs } from "pinia";

const store = useTpsStore();
const { tps } = storeToRefs(store);
</script>
