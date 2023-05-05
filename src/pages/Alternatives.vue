<template>
  <b-container fluid class="pt-4">
    <b-row
      ><b-col
        class="text-center"
        style="overflow-y: scroll; display: block; height: 100vh"
      >
        <h5 class="mb-5">Pilih collection :</h5>
        <div v-for="collection in collectionStore.getTables">
          <b-card
            style="width: 15vw"
            class="shadow mb-4 mx-auto collectionCard"
            :class="collectionStore.checkIfClassActive(collection.id)"
            @click="
              collectionStore.selectingTablesData(collection);
              collectionStore.setActiveClass();
            "
          >
            <b-card-body class="text-center border-0 mt-4 mb-4">{{
              collection.nama
            }}</b-card-body>
          </b-card>
        </div>
      </b-col>
      <b-col cols="9">
        <div class="title">
          <div>
            <h4>
              <span
                ><font-awesome-icon
                  class="icon"
                  icon="fa-solid fa-users"
                />&nbsp;</span
              >A l t e r n a t i v e s
            </h4>
          </div>
          <div>
            <b-button
              class="add-button"
              @click="
                showModal();
                cleanForm();
              "
              variant="primary"
              :disabled="!canClickAdd"
            >
              <span><font-awesome-icon icon="fa-solid fa-plus" />&nbsp;</span>
              Tambah Data
            </b-button>
          </div>
        </div>
        <hr />
        <MessageEmptyCollection v-if="!canClickAdd" />
        <div class="table-card" v-if="canClickAdd">
          <div class="table-card-title">
            <h5><font-awesome-icon icon="fa-solid fa-table" /></h5>
            <h5>A l t e r n a t i v e s</h5>
          </div>
          <div class="table-card-body">
            <div class="text-center">
              <Loading v-if="alternativeStore.loading" />
            </div>
            <div class="table-customize">
              <b-col class="p-3 mb-1">
                <b-form-input
                  placeholder="Search..."
                  size="sm"
                  class="text-center mx-auto search"
                  v-model="search"
                  @input="alternativeStore.searchTables(search)"
                ></b-form-input>
              </b-col>
            </div>
            <b-table
              v-if="!alternativeStore.loading"
              striped
              hover
              caption-top
              class="shadow-sm border mx-auto"
              :fields="alternativeStore.getFieldsTables"
              :items="
                search.length === 0
                  ? alternativeStore.getTables
                  : alternativeStore.getSearchTables
              "
              style="
                overflow-y: scroll;
                width: 53vw;
                height: 50vh;
                display: block;
                font-size: 14px;
              "
            >
              <template v-slot:cell(actions)="row">
                <b-button
                  variant="primary"
                  class="me-3 mb-2"
                  @click="
                    alternativeStore.selectingTablesData(row.item);
                    showModal();
                  "
                >
                  <span
                    ><font-awesome-icon
                      class="text-white"
                      style="font-size: 12px"
                      icon="fa-solid fa-pen"
                    />&nbsp;</span
                  >
                </b-button>
                <b-button
                  variant="danger"
                  @click="alternativeStore.deleteAlternative(row.item.id)"
                >
                  <span
                    ><font-awesome-icon
                      class="text-white"
                      style="font-size: 12px"
                      icon="fa-solid fa-trash"
                    />&nbsp;</span
                  >
                </b-button>
              </template>
            </b-table>
          </div>
        </div>
      </b-col>
    </b-row>
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
import { useCollectionStore } from "@/store/Collection";
import MessageEmptyCollection from "@/components/MessageEmptyCollection.vue";

const alternativeStore = useAlternativeStore();

const collectionStore = useCollectionStore();

let search = ref("");

let alternativeModal = ref(null);

let formRef = ref("");
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
let canClickAdd = ref(false);

const handlerForm = () => {
  if (isFormAdd.value) {
    let payload = {
      // aksesibilitas: sanitize(aksesibilitas.value),
      // cakupan_rumah: sanitize(cakupanRumah.value),
      // collection_id: collectionStore.getSelectedTables.value.id,
      // jarak_pemukiman: sanitize(jarakPemukiman.value),
      // jarak_sungai: sanitize(jarakSungai.value),
      // jarak_tpa: sanitize(jarakTpa.value),
      // nama: sanitize(nama.value),
      // partisipasi_masyarakat: sanitize(partisipasiMasyarakat.value),
      // timbulan_sampah: sanitize(timbulanSampah.value),
      collection_id: collectionStore.getSelectedTables.value.id,
      aksesibilitas: aksesibilitas.value,
      cakupan_rumah: cakupanRumah.value,
      jarak_pemukiman: jarakPemukiman.value,
      jarak_sungai: jarakSungai.value,
      jarak_tpa: jarakTpa.value,
      nama: nama.value,
      partisipasi_masyarakat: partisipasiMasyarakat.value,
      timbulan_sampah: timbulanSampah.value,
    };
    alternativeStore.addAlternative(payload);
  } else {
    let payload = {
      // aksesibilitas: sanitize(aksesibilitas.value),
      // cakupan_rumah: sanitize(cakupanRumah.value),
      // id: alternativeStore.getSelectedTables.value.id,
      // jarak_pemukiman: sanitize(jarakPemukiman.value),
      // jarak_sungai: sanitize(jarakSungai.value),
      // jarak_tpa: sanitize(jarakTpa.value),
      // nama: sanitize(nama.value),
      // partisipasi_masyarakat: sanitize(partisipasiMasyarakat.value),
      // timbulan_sampah: sanitize(timbulanSampah.value),
      aksesibilitas: aksesibilitas.value,
      cakupan_rumah: cakupanRumah.value,
      id: alternativeStore.getSelectedTables.value.id,
      jarak_pemukiman: jarakPemukiman.value,
      jarak_sungai: jarakSungai.value,
      jarak_tpa: jarakTpa.value,
      nama: nama.value,
      partisipasi_masyarakat: partisipasiMasyarakat.value,
      timbulan_sampah: timbulanSampah.value,
    };
    alternativeStore.updateAlternative(payload);
  }
  hideModal();
  cleanForm();
};

const showModal = () => {
  alternativeModal.value.show();
};

const hideModal = () => {
  alternativeModal.value.hide();
};

const cleanForm = () => {
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

watch(alternativeStore.getSelectedTables, (e) => {
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

watch(collectionStore.getSelectedTables, (e) => {
  canClickAdd.value = true;

  alternativeStore.fetchAlternatives(e.id).then(() => {
    alternativeStore.setTables();
  });
});

onMounted(() => {
  collectionStore.fetchCollections().then(() => {
    collectionStore.setTables();
  });
});
</script>

<style>
@import "../assets/css/alternatives.scss";
</style>
