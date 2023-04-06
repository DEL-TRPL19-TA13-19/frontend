import { defineStore } from "pinia";
import { computed, ref } from "vue";
import CollectionServices from "@/services/CollectionServices";
import data from "bootstrap/js/src/dom/data";

export const useCollectionStore = defineStore("store", () => {
  const collections = ref([]);
  const tablesData = ref([]);
  const tablesSearchData = ref([]);
  const loading = ref(false);
  const err = ref(null);

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

  const setTables = () => {
    tablesData.value.forEach((el, i) => {
      delete el.id;
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

  const getSearchTables = computed(() => tablesSearchData.value);

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

  return {
    fetchCollections,
    setTables,
    getTables,
    getSearchTables,
    collections,
    tablesData,
    loading,
    searchTables,
    tablesSearchData,
    err,
  };
});
