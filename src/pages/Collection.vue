<template>
  <div class="page-wrapper">
    <h3 class="ps-5">Data Collection</h3>
    <b-button @click="showModal()" variant="success" class="ms-5"
      >tambah</b-button
    >
    <div class="text-center">
      <Loading v-if="store.loading" />
    </div>
    <div class="container pt-5" v-if="!store.loading">
      <b-form-input
        placeholder="Search..."
        class="text-center mx-auto search"
        v-model="search"
        @input="store.searchTables(search)"
      ></b-form-input>
      <div class="table-wrapper">
        <b-table
          itemid="_id"
          striped
          hover
          caption-top
          :fields="store.getFieldsTables"
          :items="search.length === 0 ? store.getTables : store.getSearchTables"
          class="shadow-sm border"
        >
          <template v-slot:cell(actions)="row">
            <b-button
              variant="primary"
              class="me-3"
              @click="
                store.selectingTablesData(row.item);
                showModal();
              "
              >Edit</b-button
            >
            <b-button
              variant="danger"
              @click="store.deleteCollection(row.item.id)"
              >Delete</b-button
            >
          </template>
        </b-table>
      </div>
    </div>
  </div>
  <CustomModal title="Collection" ref="collectionModal">
    <template v-slot:body>
      <b-form @submit.prevent="handlerForm()" ref="formRef"
        ><b-form-group
          id="input-group-name"
          label="Nama collection:"
          label-for="input-name"
          ><b-form-input
            id="input-name"
            v-model="nama"
            placeholder="Masukkan nama"
            required
          ></b-form-input> </b-form-group
        ><b-form-group
          id="input-group-deskripsi"
          label="Deskripsi"
          label-for="input-deskripsi"
        >
          <b-form-input
            id="input-deskripsi"
            v-model="deskripsi"
            placeholder="Masukkan deskripsi"
            required
          ></b-form-input>
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
import { useCollectionStore } from "@/store/Collection";
import { onMounted, ref, watch } from "vue";
import Loading from "@/components/Loading.vue";
import CustomModal from "@/components/CustomModal.vue";
import { sanitize } from "@/utils/constant";

// call store
const store = useCollectionStore();

// deklarasi search
let search = ref("");

// deklarasi modal
let collectionModal = ref(null);

// data form
let formRef = ref(null);
let nama = ref("");
let deskripsi = ref("");
let isFormAdd = ref(true);

const handlerForm = () => {
  if (isFormAdd.value) {
    let payload = {
      nama: sanitize(nama.value),
      deskripsi: sanitize(deskripsi.value),
    };
    store.addCollection(payload);
  } else {
    let payload = {
      id: store.getSelectedTables.value.id,
      nama: sanitize(nama.value),
      deskripsi: sanitize(deskripsi.value),
    };
    store.updateCollection(payload);
  }
  hideModal();
  nama.value = "";
  deskripsi.value = "";
  isFormAdd.value = true;
};

// MENDETEKSI PERUBAHAN STATE
watch(store.getSelectedTables, (e) => {
  isFormAdd.value = false;
  nama.value = e.nama;
  deskripsi.value = e.deskripsi;
});

// fungsi yang di expose dari component Custom Modal
const showModal = () => {
  collectionModal.value.show();
};

const hideModal = () => {
  collectionModal.value.hide();
};

// fungsi ketika semua component vue berhasil di mounted synchronous
onMounted(() => {
  store.fetchCollections().then(() => {
    store.setTables();
  });
});
</script>
