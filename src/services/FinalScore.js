import { defineStore } from "pinia";
import { computed, ref } from "vue";
import AHPServices from "@/services/AHPServices";

export const useFinalScoreStore = defineStore("finalScoreStore", () => {
  const finalScores = ref([]);
  const tableFinalScores = ref([]);
  const loading = ref(false);
  const err = ref(null);

  const calculateFinalScore = async (collectionID) => {
    loading.value = true;
    try {
      const response = await AHPServices.calculateFinalScoreByCollectionID(
        collectionID
      );
    } catch (err) {
      err.value = err.data;
    } finally {
      loading.value = false;
      tableFinalScores.value = [];
      await getFinalScores(collectionID);
    }
  };

  const getFinalScores = async (collectionID) => {
    tableFinalScores.value = [];
    finalScores.value = [];
    loading.value = true;

    try {
      const response = await AHPServices.getFinalScoresByCollectionID(
        collectionID
      );
      finalScores.value = response.data.data;
    } catch (err) {
      err.value = err.data;
    } finally {
      loading.value = false;
    }
  };

  const setTableFinalScore = () => {
    loading.value = true;
    finalScores.value.forEach((e, i) => {
      let obj = {};
      obj.nama = e.nama;
      obj.score = e.final_scores.final_score;

      tableFinalScores.value.push(obj);
    });
    tableFinalScores.value.sort((a, b) => b.score - a.score);

    tableFinalScores.value.forEach((e, i) => {
      e.rank = i + 1;
    });
    loading.value = false;
  };

  const getTableFinalScore = computed(() => tableFinalScores.value);

  return {
    calculateFinalScore,
    setTableFinalScore,
    getFinalScores,
    tableFinalScores,
    getTableFinalScore,
    err,
    loading,
    finalScores,
  };
});
