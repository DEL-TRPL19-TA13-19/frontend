<template>
  <div class="text-center">
    <Loading v-if="store.loading" />
  </div>
  <div class="page-wrapper" v-if="!store.loading">
    <b-container>
      <div class="title">
        <div>
          <h3>
            <span
              ><font-awesome-icon
                class="icon"
                icon="fa-solid fa-users"
              />&nbsp;</span
            >
            C o l l e c t i o n s
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
          <h5>C o l l e c t i o n s</h5>
        </div>
        <div class="table-card-body">
          <div class="table-customize">
            <b-row class="select-data-entries">
              <!--              <b-form-select-->
              <!--                v-model="selected"-->
              <!--                :options="options"-->
              <!--                size="sm"-->
              <!--                class="mt-3"-->
              <!--              ></b-form-select>-->
            </b-row>
            <b-row class="w-25 p-3 mb-1">
              <b-form-input
                v-model="search"
                type="search"
                placeholder="Type to search data"
                @input="store.searchTables(search)"
                size="sm"
              ></b-form-input>
            </b-row>
          </div>
          <b-table
            striped
            hover
            caption-top
            :fields="store.getFieldsTables"
            :items="
              search.length === 0 ? store.getTables : store.getSearchTables
            "
            class="shadow-sm border"
          >
            <template v-slot:cell(actions)="row">
              <router-link
                :to="{ name: 'alternatives', params: { id: row.item.id } }"
              >
                <b-button
                  variant="success"
                  class="me-3"
                  @click="store.selectingTablesData(row.item)"
                >
                  Alternatives
                </b-button>
              </router-link>
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
                @click="store.deleteCollection(row.item.id)"
              >
                Delete
              </b-button>
            </template>
          </b-table>
        </div>
      </div>
    </b-container>
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
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
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

// selected: 10,
//   (options) => [
//     { value: 10, text: "10" },
//     { value: 20, text: "20" },
//     { value: 50, text: "50" },
//     { value: 100, text: "100" },
//   ];

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

<style>
@import "../assets/css/alternatives.scss";
</style>
