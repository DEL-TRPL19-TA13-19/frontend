<template>
  <b-container fluid>
      <div class="add-title">
          <div>
              <h3><a @click="$router.back()"><span><font-awesome-icon icon="fa-solid fa-arrow-left" /></span></a></h3>
          </div>
          <div>
              <h3><v-icon id="icon" icon="fas fa-users"></v-icon>A l t e r n a t i v e s</h3>
          </div>
      </div>
      <hr>
      <div class="table-card">
          <div class="table-card-title">
              <h5><font-awesome-icon icon="fa-solid fa-table" /></h5>
              <h5>Tambah data alternatif</h5></div>
          <div class="table-card-body">
              <label style="margin-bottom: 15px">
                  Nama Alternatif
              </label>
              <b-form-input v-model="text" placeholder="Enter your name"></b-form-input>
              <div class="form-action">
                  <a href="/alternatives/add">
                      <b-button class="cancel-button" variant="light">
                          Batal
                      </b-button>
                  </a>
                  <a href="/alternatives/add">
                      <b-button class="add-button" variant="primary">
                          <span><font-awesome-icon icon="fa-solid fa-floppy-disk" />&nbsp;</span> Simpan
                      </b-button>
                  </a>
              </div>
          </div>
      </div>


  </b-container>
</template>

<script>
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
export default {
    name: "Add Alternative",
    components: {FontAwesomeIcon},
}
</script>

<style>
@import "../assets/css/alternatives.scss";
</style>

