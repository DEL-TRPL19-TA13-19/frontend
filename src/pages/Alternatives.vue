<template>
  <div class="text-center">
    <Loading v-if="store.loading" />
  </div>
  <b-container v-if="!store.loading">
    <div class="title">
      <div>
        <h3>
          <span
            ><font-awesome-icon
              class="icon"
              icon="fa-solid fa-users"
            />&nbsp;</span
          >A l t e r n a t i v e s
        </h3>
      </div>
      <div>
        <b-button class="add-button" @click="showModal()" variant="primary">
          <span><font-awesome-icon icon="fa-solid fa-plus" />&nbsp;</span>
          Tambah Data
        </b-button>
      </div>
    </div>
    <hr />
    <div class="table-card">
      <div class="table-card-title">
        <h5><font-awesome-icon icon="fa-solid fa-table" /></h5>
        <h5>A l t e r n a t i v e s</h5>
      </div>
      <div class="table-card-body">
        <div class="table-customize">
          <b-row class="select-data-entries">
            <!--            <b-form-select size="sm" class="mt-3"></b-form-select>-->
          </b-row>
          <b-row class="w-50 p-3 mb-1">
            <b-form-input
              placeholder="Search..."
              size="sm"
              class="text-center mx-auto search"
              v-model="search"
              @input="store.searchTables(search)"
            ></b-form-input>
          </b-row>
        </div>
        <b-table
          striped
          hover
          caption-top
          class="shadow-sm border"
          :fields="store.getFieldsTables"
          :items="search.length === 0 ? store.getTables : store.getSearchTables"
        >
          <template v-slot:cell(actions)="row">
            <b-button
              variant="primary"
              class="me-3"
              @click="
                store.selectingTablesData(row.item);
                showModal();
              "
            >
              Edit
            </b-button>
            <b-button
              variant="danger"
              @click="store.deleteAlternative(row.item.id)"
            >
              Delete
            </b-button>
          </template>
        </b-table>
      </div>
    </div>
    <!--    <div class="table-utils">-->
    <!--      <div>-->
    <!--        <p>Showing {{ currentPage }} to 5 of 5 entries</p>-->
    <!--      </div>-->
    <!--      <div>-->
    <!--        <b-pagination-->
    <!--          v-model="currentPage"-->
    <!--          :total-rows="rows"-->
    <!--          :per-page="perPage"-->
    <!--          aria-controls="my-table"-->
    <!--          prev-text="Previous"-->
    <!--          next-text="Next"-->
    <!--          first-number-->
    <!--          last-number-->
    <!--        ></b-pagination>-->
    <!--      </div>-->
    <!--    </div>-->
  </b-container>
  <CustomModal title="Alternative" ref="alternativeModal">
    <template v-slot:body>
      <b-form @submit.prevent="handlerForm()" ref="formRef"
        ><b-form-group
          id="input-group-name"
          label="Nama alternatif:"
          label-for="input-name"
          ><b-form-input
            id="input-name"
            v-model="nama"
            placeholder="Masukkan nama"
            required
          ></b-form-input>
        </b-form-group>
        <b-form-group
          id="input-group-timbulansampah"
          label="Timbulan sampah"
          label-for="input-timbulansampah"
          ><b-form-select
            id="input-timbulansampah"
            v-model="timbulanSampah"
            :options="optionTimbulanSampah"
            size="sm"
            class="mt-3"
          ></b-form-select>
        </b-form-group>
        <b-form-group
          id="input-group-jaraktpa"
          label="Jarak alternatif menuju TPA"
          label-for="input-jaraktpa"
          ><b-form-select
            id="input-jaraktpa"
            v-model="jarakTpa"
            :options="optionJarakTPA"
            size="sm"
            class="mt-3"
          ></b-form-select>
        </b-form-group>
        <b-form-group
          id="input-group-kondisitanah"
          label="Kondisi tanah"
          label-for="input-kondisi tanah"
          ><b-form-select
            id="input-kondisitanah"
            v-model="kondisiTanah"
            :options="optionKondisiTanah"
            size="sm"
            class="mt-3"
          ></b-form-select>
        </b-form-group>
        <b-form-group
          id="input-group-jarakpemukiman"
          label="Jarak alternatif ke pemukiman"
          label-for="input-jarakpemukiman"
          ><b-form-select
            id="input-jarakpemukiman"
            v-model="jarakPemukiman"
            :options="optionJarakPemukiman"
            size="sm"
            class="mt-3"
          ></b-form-select>
        </b-form-group>
        <b-form-group
          id="input-group-jaraksungai"
          label="Jarak alternatif ke sungai"
          label-for="input-jaraksungai"
          ><b-form-select
            id="input-jaraksungai"
            v-model="jarakSungai"
            :options="optionJarakSungai"
            size="sm"
            class="mt-3"
          ></b-form-select>
        </b-form-group>
        <b-form-group
          id="input-group-partisipasimasyarakat"
          label="Partisipasi masyarakat"
          label-for="input-partisipasimasyarakat"
          ><b-form-select
            id="input-partisipasimasyarakat"
            v-model="partisipasiMasyarakat"
            :options="optionPartisipasiMasyarakat"
            size="sm"
            class="mt-3"
          ></b-form-select>
        </b-form-group>
        <b-form-group
          id="input-group-cakupanrumah"
          label="Cakupan rumah dari alternatif"
          label-for="input-cakupanrumah"
          ><b-form-select
            id="input-cakupanrumah"
            v-model="cakupanRumah"
            :options="optionCakupanRumah"
            size="sm"
            class="mt-3"
          ></b-form-select>
        </b-form-group>
        <b-form-group
          id="input-group-aksesibilitas"
          label="Aksesibilitas"
          label-for="input-aksesibilitas"
          ><b-form-select
            id="input-aksesibilitas"
            v-model="aksesibilitas"
            :options="optionAksesibilitas"
            size="sm"
            class="mt-3"
          ></b-form-select>
        </b-form-group>
      </b-form>
    </template>
    <template v-slot:footer
      ><b-button variant="primary" @click="handlerForm()" v-if="isFormAdd"
        >Tambah </b-button
      ><b-button variant="primary" @click="handlerForm()" v-if="!isFormAdd"
        >Edit
      </b-button></template
    >
  </CustomModal>
</template>

<script setup>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { useAlternativeStore } from "@/store/Alternative";
import { onMounted, ref, watch } from "vue";
import { useRoute } from "vue-router";
import CustomModal from "@/components/CustomModal.vue";
import { sanitize } from "@/utils/constant";
import {
  optionAksesibilitas,
  optionCakupanRumah,
  optionJarakPemukiman,
  optionJarakSungai,
  optionJarakTPA,
  optionKondisiTanah,
  optionPartisipasiMasyarakat,
  optionTimbulanSampah,
} from "@/utils/options";
import Loading from "@/components/Loading.vue";

const store = useAlternativeStore();

const route = useRoute();
const idCollection = route.params.id;

let search = ref("");

let alternativeModal = ref(null);

let nama = ref("");
let timbulanSampah = ref("");
let aksesibilitas = ref("");
let cakupanRumah = ref("");
let jarakPemukiman = ref("");
let jarakSungai = ref("");
let jarakTpa = ref("");
let kondisiTanah = ref("");
let partisipasiMasyarakat = ref("");
let isFormAdd = ref(true);

const handlerForm = () => {
  if (isFormAdd.value) {
    let payload = {
      aksesibilitas: sanitize(aksesibilitas.value),
      cakupan_rumah: sanitize(cakupanRumah.value),
      collection_id: idCollection,
      jarak_pemukiman: sanitize(jarakPemukiman.value),
      jarak_sungai: sanitize(jarakSungai.value),
      jarak_tpa: sanitize(jarakTpa.value),
      kondisi_tanah: sanitize(kondisiTanah.value),
      nama: sanitize(nama.value),
      partisipasi_masyarakat: sanitize(partisipasiMasyarakat.value),
      timbulan_sampah: sanitize(timbulanSampah.value),
    };
    store.addAlternative(payload);
  } else {
    let payload = {
      aksesibilitas: sanitize(aksesibilitas.value),
      cakupan_rumah: sanitize(cakupanRumah.value),
      id: store.getSelectedTables.value.id,
      jarak_pemukiman: sanitize(jarakPemukiman.value),
      jarak_sungai: sanitize(jarakSungai.value),
      jarak_tpa: sanitize(jarakTpa.value),
      kondisi_tanah: sanitize(kondisiTanah.value),
      nama: sanitize(nama.value),
      partisipasi_masyarakat: sanitize(partisipasiMasyarakat.value),
      timbulan_sampah: sanitize(timbulanSampah.value),
    };
    store.updateAlternative(payload);
  }
  hideModal();
  isFormAdd.value = true;
  nama.value = "";
  timbulanSampah.value = "";
  aksesibilitas.value = "";
  cakupanRumah.value = "";
  jarakPemukiman.value = "";
  jarakSungai.value = "";
  jarakTpa.value = "";
  kondisiTanah.value = "";
  partisipasiMasyarakat.value = "";
};

const showModal = () => {
  alternativeModal.value.show();
};

const hideModal = () => {
  alternativeModal.value.hide();
};

watch(store.getSelectedTables, (e) => {
  isFormAdd.value = false;
  nama.value = e.nama;
  timbulanSampah.value = e.timbulan_sampah;
  aksesibilitas.value = e.aksesibilitas;
  cakupanRumah.value = e.cakupan_rumah;
  jarakPemukiman.value = e.jarak_pemukiman;
  jarakSungai.value = e.jarak_sungai;
  jarakTpa.value = e.jarak_tpa;
  kondisiTanah.value = e.kondisi_tanah;
  partisipasiMasyarakat.value = e.partisipasi_masyarakat;
});

onMounted(() => {
  store.fetchAlternatives(idCollection).then(() => {
    store.setTables();
  });
});
</script>

<style>
@import "../assets/css/alternatives.scss";
</style>
