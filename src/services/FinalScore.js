import { defineStore } from "pinia";
import { computed, ref } from "vue";
import AHPServices from "@/services/AHPServices";

export const useFinalScoreStore = defineStore("finalScoreStore", () => {
  const finalScores = ref([]);
  const tableFinalScores = ref([]);
  const tableComputing = ref([]);
  const loading = ref(false);
  const err = ref(null);

  const tableFieldsFinalScore = [
    { key: "nama", sortable: true },
    { key: "score", sortable: true },
    { key: "rank", sortable: true },
  ];

  const calculateFinalScore = async (collectionID) => {
    finalScores.value = [];
    loading.value = true;
    try {
      const response = await AHPServices.calculateFinalScoreByCollectionID(
        collectionID
      );
      finalScores.value = response.data.data;
    } catch (err) {
      err.value = err.data;
    } finally {
      loading.value = false;
    }

    tableFinalScores.value = JSON.parse(JSON.stringify(finalScores.value));
  };

  const setFinalScore = () => {
    tableFinalScores.value.forEach((el, i) => {
      delete el.modified_at;
      delete el.modified_by;
      delete el.created_by;
      delete el.created_at;
      delete el.created_by;
      delete el.id;
      delete el.alternative_id;
      delete el.collection_id;
    });
  };

  const getTableFinalScore = computed(() => tableFinalScores.value);
  const getTableFieldsFinalScore = computed(() => tableFieldsFinalScore);
  return {
    calculateFinalScore,
    setFinalScore,
    getTableFinalScore,
    getTableFieldsFinalScore,
    err,
    loading,
    finalScores,
  };
});
