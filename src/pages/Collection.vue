<template>
  <div class="page-wrapper">
    <h3 class="ps-5">Data Collection</h3>
  </div>

  <div class="table-wrapper">
    <b-table striped hover caption-top :items="store.getTables()"></b-table>
  </div>
</template>

<script setup>
import { useCollectionStore } from "@/store/Collection";
import { computed, onMounted } from "vue";

const store = useCollectionStore();

onMounted(() => {
  store.fetchCollections();
});
</script>
