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
              v-if="collection.final_score_is_calculated"
              >Sudah dihitung</span
            >
            <span
              class="badge rounded-pill bg-secondary"
              v-if="!collection.final_score_is_calculated"
              >Belum dihitung</span
            >
          </b-card>
        </div>
      </b-col>
      <b-col cols="9">
        <div class="title">
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

          <MessageEmptyCollection v-if="!showContent" />
          <div class="custom-card" v-if="showContent">
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
                >Data Hasil Perankingan
              </h5>
            </div>
            <div class="card-body p-5 mx-auto">
              <Loading v-if="finalScoreStore.loading" class="text-center" />
              <b-table
                v-if="finalScoreStore.getTableFinalScore.length > 0"
                style="width: 40vw; font-size: 14px"
                caption-top
                striped
                hover
                class="shadow-sm border mx-auto"
                :items="finalScoreStore.getTableFinalScore"
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
import { onMounted, ref, watch } from "vue";
import { useCollectionStore } from "@/store/Collection";
import { useFinalScoreStore } from "@/services/FinalScore";
import MessageEmptyCollection from "@/components/MessageEmptyCollection.vue";
import ButtonCalculate from "@/components/ButtonCalculate.vue";
import Loading from "@/components/Loading.vue";

const collectionStore = useCollectionStore();
const finalScoreStore = useFinalScoreStore();

const isCalculated = ref(false);

let showContent = ref(false);

const handlerCalculate = async (collectionID) => {
  await finalScoreStore.calculateFinalScore(collectionID).then(async () => {
    await finalScoreStore.setTableFinalScore();
    await collectionStore.fetchCollections();
  });
  if (finalScoreStore.getTableFinalScore.length > 0) {
    isCalculated.value = true;
  }
};

watch(collectionStore.getSelectedTables, (e) => {
  showContent.value = true;
  if (e.final_score_is_calculated) {
    finalScoreStore.getFinalScores(e.id).then(() => {
      finalScoreStore.setTableFinalScore();
      isCalculated.value = true;
    });
  } else {
    finalScoreStore.getFinalScores(e.id);
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
@import "../assets/css/result.scss";

.bg-secondary {
  background-color: #d0d0d0 !important;
}
</style>
