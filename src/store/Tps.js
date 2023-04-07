import { defineStore } from "pinia";
import TPSServices from "@/services/TPSServices";
import { computed, ref } from "vue";

export const useTpsStore = defineStore("tps", () => {
  const tps = ref([]);
  const loading = ref(false);
  const err = null;

  // const getTps = computed(() => tps);

  async function fetchTPS() {
    this.tps = [];
    this.loading = true;
    try {
      this.tps = await TPSServices.getAll();
    } catch (err) {
      this.err = err;
    } finally {
      this.loading = false;
    }
  }
  return { tps, loading, err, fetchTPS };
});
