import { defineStore } from "pinia";
import { computed, ref } from "vue";
import AHPServices from "@/services/AHPServices";

export const useScoreStore = defineStore("scoreStore", () => {
  const scores = ref([]);
  const tableMatrix = ref([]);
  const tableComputing = ref([]);
  const loading = ref(false);
  const err = ref(null);

  const tableFieldsAlternatives = [
    { key: "nama", sortable: true },
    { key: "aksesibilitas", sortable: true },
    { key: "cakupan_rumah", sortable: true },
    { key: "jarak_pemukiman", sortable: true },
    { key: "jarak_sungai", sortable: true },
    { key: "jarak_tpa", sortable: true },
    { key: "partisipasi_masyarakat", sortable: true },
    { key: "timbulan_sampah", sortable: true },
  ];

  const tableFieldsMatrixCalculate = [
    { key: "aksesibilitas", sortable: true },
    { key: "cakupan_rumah", sortable: true },
    { key: "jarak_pemukiman", sortable: true },
    { key: "jarak_sungai", sortable: true },
    { key: "jarak_tpa", sortable: true },
    { key: "partisipasi_masyarakat", sortable: true },
    { key: "timbulan_sampah", sortable: true },
  ];

  const calculateScore = async (collectionID) => {
    loading.value = true;
    try {
      const response = await AHPServices.calculateScoreByCollectionID(
        collectionID
      );
    } catch (err) {
      err.value = err.data;
    } finally {
      loading.value = false;
      await getScores(collectionID);
    }
  };

  const getScores = async (collectionID) => {
    scores.value = [];
    loading.value = true;

    try {
      const response = await AHPServices.getScoresByCollectionID(collectionID);
      scores.value = response.data.data;
    } catch (err) {
      err.value = err.data;
    } finally {
      loading.value = false;
    }

    tableMatrix.value = JSON.parse(JSON.stringify(scores.value));
  };

  const setTableMatrix = () => {
    tableMatrix.value.forEach((el, i) => {
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

  const getTableMatrix = computed(() => tableMatrix.value);
  const getTableFieldAlternatives = computed(() => tableFieldsAlternatives);
  const getTableFieldMatrix = computed(() => tableFieldsMatrixCalculate);

  return {
    calculateScore,
    setTableMatrix,
    getScores,
    err,
    tableMatrix,
    getTableMatrix,
    getTableFieldAlternatives,
    getTableFieldMatrix,
    loading,
    scores,
  };
});
