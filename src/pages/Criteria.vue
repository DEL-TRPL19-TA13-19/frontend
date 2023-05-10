<template>
  <v-container fluid>
    <div id="title">
      <h3>
        <span><font-awesome-icon id="icon" icon="fa-solid fa-box" />&nbsp;</span
        >C r i t e r i a
      </h3>
    </div>
    <hr />
    <div id="criteria-card">
      <div id="criteria-card-title">
        <h5>
          <v-icon id="icon" icon="fas fa-table"></v-icon>
        </h5>
        <h5>Pembobotan Kriteria</h5>
      </div>
      <div id="criteria-card-table">
        <div>
          <v-table>
            <thead>
              <tr>
                <th id="th" class="text-left">Criteria</th>
                <th id="th" class="text-left">
                  Timbulan <br />
                  Sampah
                </th>
                <th id="th" class="text-left">
                  Jarak Alternatif <br />
                  Menuju TPA
                </th>

                <th id="th" class="text-left">
                  Jarak ke <br />
                  Pemukiman
                </th>
                <th id="th" class="text-left">
                  Jarak ke <br />
                  Sungai
                </th>
                <th id="th" class="text-left">
                  Partisipasi <br />
                  Masyarakat
                </th>
                <th id="th" class="text-left">
                  Cakupan <br />
                  Rumah
                </th>
                <th id="th" class="text-left">Aksesibilitas</th>
              </tr>
            </thead>
            <tbody class="text-center">
              <tr v-for="(row, indexRow) in criteriaStore.getCriteria">
                <td v-for="(col, indexCol) in row" class="p-0">
                    <th id="th" class="text-left w-100" v-if="indexCol === 0">{{col}}</th>
                  <v-chip class="ma-2" v-if="indexRow + 1 === indexCol">
                    {{ col }}
                  </v-chip>
                  <v-select
                    v-if="indexRow + 1 < indexCol"
                    clearable
                    label="Select"
                    :items="items"
                    v-model="criteriaStore.pairwise[indexRow][indexCol]"
                    @update:modelValue="
                      (value) =>
                        onChangeSelect(indexRow + 1, indexCol - 1, value)
                    "
                    variant="underlined"
                  ></v-select>
                  <v-chip
                    class="ma-2 ps-5 pe-5"
                    v-if="indexRow + 1 > indexCol && indexCol > 0"
                    label
                  >
                    {{ col }}
                  </v-chip>
                </td>
              </tr>
            </tbody>
          </v-table>
        </div>
        <div
          class="table-utils"
          style="display: flex; justify-content: end; margin-top: 20px"
        >
          <div>
              <b-button class="add-button" variant="primary" @click="criteriaStore.updateCriteria">
                <span
                  ><font-awesome-icon
                    icon="fa-solid fa-floppy-disk"
                  />&nbsp;</span
                >
                Simpan Data
              </b-button>
          </div>
        </div>
      </div>
    </div>
  </v-container>
</template>

<style>
@import "../assets/css/_criteria.scss";

v-select {
  max-width: 80px;
}
</style>

<script setup>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { onMounted, ref } from "vue";
import { useCriteriaStore } from "@/store/Criteria";

const items = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const criteriaStore = useCriteriaStore();
const onChangeSelect = (indexRow, indexColumn, value) => {
  let tempValue = value ?? 1;
  criteriaStore.pairwise[indexColumn][indexRow] = parseFloat((1 / tempValue).toFixed(3)) ;
};

onMounted(() => {
  criteriaStore.fetchCriteria();
});
</script>
