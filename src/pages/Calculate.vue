<template>
  <b-container fluid class="pt-4">
    <b-row>
      <b-col style="overflow-y: scroll; display: block; height: 100vh">
        <h5 class="mb-5 text-center">Pilih collection :</h5>
        <div v-for="collection in collectionStore.getTables">
          <b-card
            style="width: 15vw"
            class="shadow mb-4 mx-auto collectionCard"
            :class="collectionStore.checkIfClassActive(collection.id)"
            @click="
              collectionStore.selectingTablesData(collection);
              collectionStore.setActiveClass();
            "
          >
            <b-card-body class="text-center border-0 mt-4 mb-4"
              >{{ collection.nama }}
            </b-card-body>
            <span
              class="badge rounded-pill bg-success"
              v-if="collection.score_is_calculated"
              >Sudah dihitung</span
            >
            <span
              class="badge rounded-pill bg-secondary"
              v-if="!collection.score_is_calculated"
              >Belum dihitung</span
            >
          </b-card>
        </div>
      </b-col>
      <b-col cols="9">
        <div class="title">
          <h3>
            <font-awesome-icon id="icon" icon="fa-solid fa-calculator" />
            Perhitungan
          </h3>
        </div>
        <hr />
        <Loading v-if="scoreStore.loading"></Loading>
        <MessageEmptyCollection v-if="!showContent" />
        <div class="content" v-if="!scoreStore.loading && showContent">
          <!-- Data Alternatif -->
          <div class="custom-card">
            <ButtonCalculate
              @click="
                handlerCalculate(collectionStore.getSelectedTables.value.id)
              "
              :text="isCalculated ? 'Hitung ulang' : 'Mulai perhitungan'"
              class="mb-5"
            />
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
                v-if="alternativeStore.getTables.length !== 0"
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
                :fields="alternativeStore.getFieldsCalculateTables"
              ></b-table>
            </div>
          </div>

          <!-- Matriks Keputusan -->
          <div class="custom-card" ref="matrix">
            <div class="card-title">
              <h5>
                <span
                  ><font-awesome-icon
                    id="icon"
                    icon="fa-solid fa-table" /></span
                >Data Nilai Alternative
              </h5>
            </div>
            <div class="card-body p-5 mx-auto">
              <b-table
                v-if="scoreStore.getTableAlternativesPoint.length !== 0"
                style="
                  display: block;
                  overflow-y: scroll;
                  overflow-x: scroll;
                  width: max-content;
                  height: max-content;
                  font-size: 14px;
                "
                striped
                hover
                class="shadow-sm border mx-auto"
                :items="scoreStore.getTableAlternativesPoint"
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
                >Data Nilai Alternative x bobot kriteria
              </h5>
            </div>
            <div class="card-body p-5 mx-auto">
              <b-table
                v-if="scoreStore.getTableScores.length !== 0"
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
                :items="scoreStore.getTableScores"
              ></b-table>
            </div>
          </div>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script setup>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { useCollectionStore } from "@/store/Collection";
import { onMounted, ref, watch } from "vue";
import { useScoreStore } from "@/store/Scores";
import { useAlternativeStore } from "@/store/Alternative";
import ButtonCalculate from "@/components/ButtonCalculate.vue";
import MessageEmptyCollection from "@/components/MessageEmptyCollection.vue";

const collectionStore = useCollectionStore();
const alternativeStore = useAlternativeStore();
const scoreStore = useScoreStore();

const matrix = ref(null);

const isCalculated = ref(false);

let showContent = ref(false);

const handlerCalculate = async (collectionID) => {
  await scoreStore.calculateScore(collectionID).then(async () => {
    await scoreStore.setTableScores();
  });
  await scoreStore.calculateAlternativesPoint(collectionID).then(async () => {
    await scoreStore.setTableAlternativesPoint();
  });
  await collectionStore.fetchCollections();

  if (
    scoreStore.getTableScores.length > 0 &&
    scoreStore.getTableAlternativesPoint.length > 0
  ) {
    isCalculated.value = true;
    matrix.value.scrollIntoView({ behavior: "smooth" });
  }
};

watch(collectionStore.getSelectedTables, (e) => {
  showContent.value = true;
  alternativeStore.fetchAlternatives(e.id).then(() => {
    alternativeStore.setTables();
  });
  if (e.score_is_calculated) {
    scoreStore.getScores(e.id).then(async () => {
      scoreStore.setTableScores();
      await scoreStore.calculateAlternativesPoint(e.id);
      scoreStore.setTableAlternativesPoint();
      isCalculated.value = true;
    });
  } else {
    scoreStore.getScores(e.id);
    isCalculated.value = false;
  }
});

onMounted(() => {
  collectionStore.fetchCollections().then(() => {
    collectionStore.setTables();
  });
});
</script>

<style>
@import "../assets/css/calculation.scss";

.bg-secondary {
  background-color: #d0d0d0 !important;
}
</style>
