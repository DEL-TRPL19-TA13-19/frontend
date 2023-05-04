<template>
  <b-container fluid>
    <b-row>
      <b-col
        class="text-center"
        style="overflow-y: scroll; display: block; height: 100vh"
      >
        <h5 class="mb-5">Pilih collection :</h5>
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
        </div>
      </b-col>
      <b-col cols="9"
        ><div class="title">
          <div>
            <h3>
              <font-awesome-icon id="icon" icon="fa-solid fa-ranking-star" />
              Data Hasil Akhir
            </h3>
          </div>
        </div>
        <hr />
        <div class="content">
          <!-- Data Alternatif -->
          <div class="custom-card">
            <div class="card-title">
              <h5>
                <span
                  ><font-awesome-icon
                    id="icon"
                    icon="fa-solid fa-table" /></span
                >Data Hasil Perankingan
              </h5>
            </div>
            <div class="card-body p-5 mx-auto">
              <b-table
                style="
                  display: block;
                  overflow-y: scroll;
                  height: 50vh;
                  font-size: 14px;
                "
                caption-top
                striped
                hover
                class="shadow-sm border mx-auto"
                :items="finalScoreStore.getTableFinalScore"
                :fields="finalScoreStore.getTableFieldsFinalScore"
              ></b-table>
            </div>
          </div></div
      ></b-col>
    </b-row>
  </b-container>
</template>

<script setup>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { onMounted } from "vue";
import { useCollectionStore } from "@/store/Collection";
import { useFinalScoreStore } from "@/services/FinalScore";

const collectionStore = useCollectionStore();
const finalScoreStore = useFinalScoreStore();

onMounted(() => {
  collectionStore.fetchCollections().then(() => {
    collectionStore.setTables();
  });
});
</script>

<style>
@import "../assets/css/result.scss";
</style>
