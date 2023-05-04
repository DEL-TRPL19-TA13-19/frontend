<template>
  <b-container fluid class="pt-4">
    <b-row>
      <b-col style="overflow-y: scroll; display: block; height: 100vh">
        <h5 class="mb-5 text-center">Pilih collection :</h5>
        <div v-for="collection in collectionStore.getTables">
          <b-card
            style="width: 15vw"
            class="shadow mb-4 mx-auto"
            @click="collectionStore.selectingTablesData(collection)"
          >
            <b-card-body class="text-center border-0 mt-4 mb-4">{{
              collection.nama
            }}</b-card-body>
          </b-card>
        </div></b-col
      >
      <b-col cols="9">
        <div class="title">
          <h3>
            <font-awesome-icon id="icon" icon="fa-solid fa-calculator" />
            Perhitungan
          </h3>
        </div>
        <hr />
        <Loading v-if="scoreStore.loading"></Loading>
        <div class="content" v-if="!scoreStore.loading">
          <!-- Data Alternatif -->
          <div class="custom-card">
            <div class="card-title">
              <h5>
                <span
                  ><font-awesome-icon
                    id="icon"
                    icon="fa-solid fa-table" /></span
                >Data Penilaian Alternatif
              </h5>
            </div>
            <div class="card-body p-5 mx-auto">
              <b-table
                style="
                  display: block;
                  overflow-y: scroll;
                  overflow-x: scroll;
                  height: 50vh;
                  width: 55vw;
                  font-size: 14px;
                "
                striped
                hover
                caption-top
                class="shadow-sm border mx-auto"
                :items="alternativeStore.getTables"
                :fields="scoreStore.getTableFieldAlternatives"
              ></b-table>
            </div>
          </div>

          <!-- Matriks Keputusan -->
          <div class="custom-card">
            <div class="card-title">
              <h5>
                <span
                  ><font-awesome-icon
                    id="icon"
                    icon="fa-solid fa-table" /></span
                >Matriks Keputusan (X)
              </h5>
            </div>
            <div class="card-body p-5 mx-auto">
              <b-table
                style="
                  display: block;
                  overflow-y: scroll;
                  overflow-x: scroll;
                  height: 50vh;
                  width: 55vw;
                  font-size: 14px;
                "
                striped
                hover
                class="shadow-sm border mx-auto"
                :items="scoreStore.getTableMatrix"
                :fields="scoreStore.getTableFieldMatrix"
              ></b-table>
            </div>
          </div>

          <!-- Data Perhitungan Nilai  Atribut -->
          <div class="custom-card">
            <div class="card-title">
              <h5>
                <span
                  ><font-awesome-icon
                    id="icon"
                    icon="fa-solid fa-table" /></span
                >Data Perhitungan Nilai Atribut
              </h5>
            </div>
            <div class="card-body">
              <b-table striped hover />
            </div>
          </div></div
      ></b-col>
    </b-row>
  </b-container>
</template>

<script setup>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { useCollectionStore } from "@/store/Collection";
import { onMounted, watch } from "vue";
import { useScoreStore } from "@/store/Scores";
import { useAlternativeStore } from "@/store/Alternative";

const collectionStore = useCollectionStore();
const alternativeStore = useAlternativeStore();
const scoreStore = useScoreStore();

watch(collectionStore.getSelectedTables, (e) => {
  alternativeStore.fetchAlternatives(e.id).then(() => {
    alternativeStore.setTables();
  });

  scoreStore.calculateScore(e.id).then(() => {
    scoreStore.setTableMatrix();
  });
});

onMounted(() => {
  collectionStore.fetchCollections().then(() => {
    collectionStore.setTables();
  });
});
</script>

<style>
@import "../assets/css/calculation.scss";
</style>
