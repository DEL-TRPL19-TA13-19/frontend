<template>
  <b-container>
    <div class="title">
      <div>
        <h3>
          <span
            ><font-awesome-icon
              class="icon"
              icon="fa-solid fa-users"
            />&nbsp;</span
          >A l t e r n a t i v e s
        </h3>
      </div>
      <div>
        <a href="/alternatives/add">
          <b-button class="add-button" variant="primary">
            <span><font-awesome-icon icon="fa-solid fa-plus" />&nbsp;</span>
            Tambah Data
          </b-button>
        </a>
      </div>
    </div>
    <hr />
    <div class="table-card">
      <div class="table-card-title">
        <h5><font-awesome-icon icon="fa-solid fa-table" /></h5>
        <h5>A l t e r n a t i v e s</h5>
      </div>
      <div class="table-card-body">
        <div class="table-customize">
          <b-row class="select-data-entries">
            <b-form-select size="sm" class="mt-3"></b-form-select>
          </b-row>
          <b-row class="w-25 p-3 mb-1">
            <b-form-input
              placeholder="Search..."
              size="sm"
              class="text-center mx-auto search"
              v-model="search"
              @input="store.searchTables(search)"
            ></b-form-input>
          </b-row>
        </div>
        <b-table
          striped
          hover
          caption-top
          :fields="store.getFieldsTables"
          :items="search.length === 0 ? store.getTables : store.getSearchTables"
        ></b-table>
      </div>
    </div>
    <!--    <div class="table-utils">-->
    <!--      <div>-->
    <!--        <p>Showing {{ currentPage }} to 5 of 5 entries</p>-->
    <!--      </div>-->
    <!--      <div>-->
    <!--        <b-pagination-->
    <!--          v-model="currentPage"-->
    <!--          :total-rows="rows"-->
    <!--          :per-page="perPage"-->
    <!--          aria-controls="my-table"-->
    <!--          prev-text="Previous"-->
    <!--          next-text="Next"-->
    <!--          first-number-->
    <!--          last-number-->
    <!--        ></b-pagination>-->
    <!--      </div>-->
    <!--    </div>-->
  </b-container>
</template>

<script setup>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { useAlternativeStore } from "@/store/Alternative";
import { onMounted, ref } from "vue";

const store = useAlternativeStore();

let search = ref("");

let alternativeModal = ref(null);

let nama = ref("");
let timbulanSampah = ref("");
let aksesibilitas = ref("");
let cakupanRumah = ref("");
let jarakPemukiman = ref("");
let jarakSungai = ref("");
let jarakTpa = ref("");
let kondisiTanah = ref("");
let partisipasiMasyarakat = ref("");

const showModal = () => {
  alternativeModal.value.show();
};

const hideModal = () => {
  alternativeModal.value.hide();
};

onMounted(() => {
  store.fetchAlternatives().then(() => {
    store.setTables();
  });
});
</script>

<style>
@import "../assets/css/alternatives.scss";
</style>
