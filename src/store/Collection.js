import { defineStore } from "pinia";
import { ref } from "vue";
import CollectionServices from "@/services/CollectionServices";

export const useCollectionStore = defineStore("store", () => {
  const collections = ref([]);
  const dataTables = ref([]);
  const loading = ref(false);
  const err = null;

  async function fetchCollections() {
    this.collections = [];
    this.loading = true;

    try {
      this.collections = (await CollectionServices.getAll()).data.data;
    } catch (err) {
      this.err = err;
    } finally {
      this.loading = false;
    }
  }

  function getTables() {
    this.collections.forEach((el, i) => {
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

    return this.collections;
  }

  return { fetchCollections, getTables, collections };
});
