import { defineStore, mapState } from "pinia";
import {
  computed,
  effect,
  ref,
  watch,
  watchEffect,
  watchPostEffect,
} from "vue";
import CollectionServices from "@/services/CollectionServices";
export const useCollectionStore = defineStore("store", () => {
  const collections = ref([]);
  const tablesData = ref([]);
  const tablesSearchData = ref([]);
  const tablesSelectedData = ref(null);
  const loading = ref(false);
  const err = ref(null);

  const dataFields = [
    { key: "id", thClass: "d-none", tdClass: "d-none" },
    { key: "nama", sortable: true },
    { key: "deskripsi", sortable: true },
    { key: "actions" },
  ];

  const fetchCollections = async () => {
    console.log("hit api");
    collections.value = [];
    loading.value = true;

    try {
      collections.value = (await CollectionServices.getAll()).data.data;
    } catch (err) {
      err.value = err.data;
    } finally {
      loading.value = false;
    }

    tablesData.value = JSON.parse(JSON.stringify(collections.value));
  };

  const addCollection = async (payload) => {
    loading.value = true;

    try {
      const response = await CollectionServices.create(payload);
      tablesData.value = [...tablesData.value, response.data.data];
    } catch (err) {
      err.value = err;
    } finally {
      loading.value = false;
    }
  };

  const updateCollection = async (payload) => {
    loading.value = true;

    try {
      const response = await CollectionServices.update(payload);
    } catch (err) {
      err.value = err;
    } finally {
      loading.value = false;
    }
    let index = tablesData.value.findIndex((index) => index.id === payload.id);
    tablesData.value[index] = payload;
  };

  const deleteCollection = async (id) => {
    loading.value = true;
    try {
      const response = await CollectionServices.delete(id);
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
      delete el.alternatives;
      delete el.user_id;
      delete el.created_by;
      delete el.created_at;
      delete el.created_by;
      delete el.is_calculated;
    });
  };

  const getTables = computed(() => tablesData.value);
  const getFieldsTables = computed(() => dataFields);
  const getSearchTables = computed(() => tablesSearchData.value);
  const getSelectedTables = computed(() => tablesSelectedData);
  const searchTables = (input) => {
    tablesSearchData.value = tablesData.value.filter((item) => {
      if (item.nama.toLowerCase().includes(input.toLowerCase())) {
        return item;
      }
      if (item.deskripsi.toLowerCase().includes(input.toLowerCase())) {
        return item;
      }
    });
  };

  const selectingTablesData = (e) => {
    tablesSelectedData.value = e;
  };

  return {
    fetchCollections,
    collections,
    setTables,
    getTables,
    tablesData,
    getSearchTables,
    getFieldsTables,
    getSelectedTables,
    tablesSelectedData,
    searchTables,
    addCollection,
    deleteCollection,
    updateCollection,
    selectingTablesData,
    tablesSearchData,
    loading,
    err,
  };
});
