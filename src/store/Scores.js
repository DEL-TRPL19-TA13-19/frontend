import { defineStore } from "pinia";
import { computed, ref } from "vue";
import AHPServices from "@/services/AHPServices";

export const useScoreStore = defineStore("scoreStore", () => {
  const scores = ref([]);
  const tableScores = ref([]);
  const alternativesPoint = ref([]);
  const tableAlternativesPoint = ref([]);
  const loading = ref(false);
  const err = ref(null);

  const getScores = async (collectionID) => {
    scores.value = [];
    alternativesPoint.value = [];
    tableScores.value = [];
    tableAlternativesPoint.value = [];

    loading.value = true;

    try {
      const response = await AHPServices.getScoresByCollectionID(collectionID);
      scores.value = response.data.data;
    } catch (err) {
      err.value = err.data;
    } finally {
      loading.value = false;
    }
  };

  const calculateScore = async (collectionID) => {
    loading.value = true;
    try {
      const response = await AHPServices.calculateScoreByCollectionID(
        collectionID
      );
      scores.value = response.data.data;
    } catch (err) {
      err.value = err.data;
    } finally {
      loading.value = false;
      tableScores.value = [];
      await getScores(collectionID);
    }
  };
  const calculateAlternativesPoint = async (collectionID) => {
    loading.value = true;
    try {
      const response = await AHPServices.calculateAlternativesPoint(
        collectionID
      );
      alternativesPoint.value = response.data.data;
    } catch (err) {
      err.value = err.data;
    } finally {
      loading.value = false;
    }
  };

  const setTableScores = () => {
    loading.value = true;
    scores.value.forEach((e, i) => {
      let obj = {};
      obj.nama = scores.value[i].nama;
      obj.timbulan_sampah = e.scores.timbulan_sampah;
      obj.jarak_tpa = e.scores.jarak_tpa;
      obj.jarak_pemukiman = e.scores.jarak_pemukiman;
      obj.jarak_sungai = e.scores.jarak_sungai;
      obj.partisipasi_masyarakat = e.scores.partisipasi_masyarakat;
      obj.cakupan_rumah = e.scores.cakupan_rumah;
      obj.aksesibilitas = e.scores.aksesibilitas;
      tableScores.value.push(obj);
    });
    loading.value = false;
  };

  const setTableAlternativesPoint = () => {
    loading.value = true;

    alternativesPoint.value.forEach((e, i) => {
      let obj = {};
      obj.nama = scores.value[i].nama;
      obj.timbulan_sampah = e[0];
      obj.jarak_tpa = e[1];
      obj.jarak_pemukiman = e[2];
      obj.jarak_sungai = e[3];
      obj.partisipasi_masyarakat = e[4];
      obj.cakupan_rumah = e[5];
      obj.aksesibilitas = e[6];
      tableAlternativesPoint.value.push(obj);
    });

    loading.value = false;
  };

  const getTableScores = computed(() => tableScores.value);
  const getTableAlternativesPoint = computed(
    () => tableAlternativesPoint.value
  );

  return {
    calculateScore,
    calculateAlternativesPoint,
    setTableScores,
    setTableAlternativesPoint,
    getScores,
    err,
    tableScores,
    getTableScores,
    getTableAlternativesPoint,
    loading,
    scores,
    alternativesPoint,
  };
});
