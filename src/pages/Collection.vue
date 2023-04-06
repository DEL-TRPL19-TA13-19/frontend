<template>
  <div class="page-wrapper">
    <h3 class="ps-5">Data Collection</h3>

    <div class="text-center">
      <Loading v-if="store.loading" />
    </div>
    <div class="container pt-5" v-if="!store.loading">
      <b-form-input
        placeholder="Search..."
        class="text-center mx-auto search"
        v-model="search"
        @input="store.searchTables(search)"
      ></b-form-input>
      {{ search }}
      <div class="table-wrapper">
        <b-table
          striped
          hover
          caption-top
          :items="search.length === 0 ? store.getTables : store.getSearchTables"
          class="shadow-sm border"
        ></b-table>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useCollectionStore } from "@/store/Collection";
import { computed, onMounted, ref } from "vue";
import Loading from "@/components/Loading.vue";
import { storeToRefs } from "pinia";

let search = ref("");

const store = useCollectionStore();

onMounted(() => {
  store.fetchCollections().then(() => {
    store.setTables();
  });
});
</script>
