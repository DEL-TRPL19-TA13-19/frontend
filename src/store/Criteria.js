import { defineStore } from "pinia";
import { computed, ref } from "vue";
import { endpoint } from "@/api/endpoint";
import CriteriaServices from "@/services/CriteriaServices";
import criteriaServices from "@/services/CriteriaServices";

export const useCriteriaStore = defineStore("criteriaScore", () => {
  const pairwise = ref([]);
  const loading = ref(false);
  const tempValue = ref([]);
  const err = ref(null);
  const fetchCriteria = async () => {
    loading.value = true;
    let criteria = [
      "Timbulan Sampah",
      "Jarak Alternatif Menuju TPA",
      "Jarak ke Pemukiman",
      "Jarak ke Sungai",
      "Partisipasi Masyarakat",
      "Cakupan Rumah",
      "Aksesibilitas",
    ];
    try {
      const response = await CriteriaServices.getAllCriteria();
      let tempArray = response.data.data.pairwise;
      for (let i = 0; i < tempArray.length; i++) {
        tempArray[i] = [criteria[i], ...tempArray[i]];
      }
      pairwise.value = tempArray;
    } catch (err) {
      err.value = err.data;
    } finally {
      loading.value = false;
    }
  };

  const updateCriteria = async () => {
    loading.value = true;

    try {
      let tempArray = [];
      for (let i = 0; i < pairwise.value.length; i++) {
        let secondTemp = [...pairwise.value[i]];
        secondTemp.splice(0, 1);
        tempArray.push(secondTemp);
      }
      const response = await criteriaServices.updateCriteria({
        pairwise: tempArray,
      });
    } catch (err) {
      err.value = err.data;
    } finally {
      loading.value = false;
    }
  };

  const getCriteria = computed(() => pairwise.value);

  return { pairwise, fetchCriteria, getCriteria, updateCriteria };
});
