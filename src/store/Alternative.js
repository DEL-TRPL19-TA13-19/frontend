import { defineStore } from "pinia";
import { computed, ref } from "vue";
import AlternativeServices from "@/services/AlternativeServices";

export const useAlternativeStore = defineStore("alternativeStore", () => {
  const alternatives = ref([]);
  const tablesData = ref([]);
  const tablesSearchData = ref([]);
  const tablesSelectedData = ref(null);
  const loading = ref(false);
  const err = ref(null);

  const tableFields = [
    { key: "id", thClass: "d-none", tdClass: "d-none" },
    { key: "nama", sortable: true },
    { key: "aksesibilitas", sortable: true },
    { key: "cakupan_rumah", sortable: true },
    { key: "jarak_pemukiman", sortable: true },
    { key: "jarak_sungai", sortable: true },
    { key: "jarak_tpa", sortable: true },
    { key: "partisipasi_masyarakat", sortable: true },
    { key: "timbulan_sampah", sortable: true },
    { key: "actions" },
  ];

  const fetchAlternatives = async (id) => {
    alternatives.value = [];
    loading.value = true;

    try {
      alternatives.value = (
        await AlternativeServices.getByCollectionID(id)
      ).data.data;
    } catch (err) {
      err.value = err.data;
    } finally {
      loading.value = false;
    }

    tablesData.value = JSON.parse(JSON.stringify(alternatives.value));
  };

  const addAlternative = async (payload) => {
    loading.value = true;

    try {
      const response = await AlternativeServices.create(payload);
      tablesData.value = [...tablesData.value, response.data.data];
    } catch (err) {
      err.value = err;
    } finally {
      loading.value = false;
    }
  };

  const updateAlternative = async (payload) => {
    loading.value = true;

    try {
      const response = await AlternativeServices.update(payload);
    } catch (err) {
      err.value = err;
    } finally {
      loading.value = false;
    }
    let index = tablesData.value.findIndex((index) => index.id === payload.id);
    tablesData.value[index] = payload;
  };

  const deleteAlternative = async (id) => {
    loading.value = true;
    try {
      const response = await AlternativeServices.delete(id);
    } catch (err) {
      err.value = err;
    } finally {
      loading.value = false;
    }
    tablesData.value = tablesData.value.filter((item) => item.id !== id);
  };

  const setTables = () => {
    tablesData.value.forEach((el, i) => {
      delete el.modified_at;
      delete el.modified_by;
      delete el.created_by;
      delete el.created_at;
      delete el.created_by;
    });
  };

  const getTables = computed(() => tablesData.value);
  const getFieldsTables = computed(() => tableFields);
  const getSearchTables = computed(() => tablesSearchData.value);
  const getSelectedTables = computed(() => tablesSelectedData);
  const searchTables = (input) => {
    tablesSearchData.value = tablesData.value.filter((item) => {
      if (item.nama.toLowerCase().includes(input.toLowerCase())) {
        return item;
      }
    });
  };

  const selectingTablesData = (e) => {
    tablesSelectedData.value = e;
  };

  return {
    alternatives,
    fetchAlternatives,
    addAlternative,
    deleteAlternative,
    updateAlternative,
    setTables,
    getTables,
    getSearchTables,
    getFieldsTables,
    searchTables,
    selectingTablesData,
    getSelectedTables,
    loading,
    err,
  };
});
