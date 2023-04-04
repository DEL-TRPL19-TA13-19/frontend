<template>
  <div>
      <b-container fluid>
          <div class="title">
              <h3><span><font-awesome-icon icon="fa-solid fa-gauge" /></span> D A S H B O A R D</h3>
          </div>
          <hr>
          <welcome></welcome>
          <!--  <h1>{{ loading ? "Yes" : "No" }}</h1>-->
          <!--  <button @click="login">Test</button>-->
          <b-card-group columns class="dashboard-card-deck">
              <b-card class="dashboard-card card-yellow" href="/login">
                  <b-row align-v="center">
                      <b-col md="6"><h3>Data Kriteria</h3></b-col>
                      <b-col md="1" offset-md="4">
                          <font-awesome-icon class="icon" icon="fa-solid fa-cube"/>
                      </b-col>
                  </b-row>
                  <a href="/login"><span class="link"></span></a>
              </b-card>

              <b-card class="dashboard-card card-magenta" href="#">
                  <b-row align-v="center">
                      <b-col md="6"><h4>Data Penilaian</h4></b-col>
                      <b-col md="1" offset-md="4">
                          <font-awesome-icon class="icon" icon="fa-solid fa-pen-to-square" />
                      </b-col>
                  </b-row>
                  <a href="/login"><span class="link"></span></a>
              </b-card>

              <b-card class="dashboard-card card-blue" href="#">
                  <b-row align-v="center">
                      <b-col md="6"><h4>Data Sub Kriteria</h4></b-col>
                      <b-col md="1" offset-md="4">
                          <font-awesome-icon class="icon" icon="fa-solid fa-cubes" />
                      </b-col>
                  </b-row>
                  <a href="/login"><span class="link"></span></a>
              </b-card>

              <b-card class="dashboard-card card-orange" href="#">
                  <b-row align-v="center">
                      <b-col md="6"><h4>Data Perhitungan</h4></b-col>
                      <b-col md="1" offset-md="4">
                          <font-awesome-icon class="icon" icon="fa-solid fa-calculator" />
                      </b-col>
                  </b-row>
                  <a href="/login"><span class="link"></span></a>
              </b-card>

              <b-card class="dashboard-card card-red" href="#">
                  <b-row align-v="center">
                      <b-col md="6"><h4>Data Alternatif</h4></b-col>
                      <b-col md="1" offset-md="4">
                          <font-awesome-icon class="icon" icon="fa-solid fa-users" />
                      </b-col>
                  </b-row>
                  <a href="/login"><span class="link"></span></a>
              </b-card>

              <b-card class="dashboard-card card-green" href="#">
                  <b-row align-v="center">
                      <b-col md="6"><h4>Hasil Akhir</h4></b-col>
                      <b-col md="1" offset-md="4">
                          <font-awesome-icon class="icon" icon="fa-solid fa-ranking-star" />
                      </b-col>
                  </b-row>
                  <a href="/login"><span class="link"></span></a>
              </b-card>
          </b-card-group>

      </b-container>
  </div>
</template>

<script>
import TPSServices from "@/services/TPSServices";
import Card from "@/components/Card.vue";
import Welcome from "@/components/Welcome.vue";
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import Footer from "@/components/Footer.vue";

export default {
  name: "app",
    components: {Footer, FontAwesomeIcon, Welcome, Card},
  data() {
    return {
      data: [],
    };
  },
  methods: {
    retrieveTPS() {
      TPSServices.getAll()
        .then((res) => {
          // this.data = res.data;
          console.log(res.data);
        })
        .catch((e) => {
          console.log(e);
        });
    },
    findTPSByID() {
      let id = "8c45e89a-37a4-4c03-80df-a8ce60d14c3a";
      TPSServices.getByID(id)
        .then((res) => {
          // this.data = res.d
          console.log(res.data);
        })
        .catch((e) => {
          console.log(e.data);
        });
    },
    createTPS() {
      TPSServices.createTPS({
        jarak_tpa: "woiiiiiiiii",
        kabupaten: "woi",
        kecamatan: "woi",
        kelurahan: "woi",
        lattitude: "woi",
        location: "woi",
        longtitude: "woi",
        name: "woi",
      })
        .then((res) => {
          console.log(res.data);
        })
        .catch((e) => {
          console.log(e.data);
        });
    },
  },
  // mounted() {
  //   this.retrieveTPS();
  //   // this.findTPSByID();
  //   // this.createTPS();
  // },
};
</script>

<style>
@import "../assets/css/home.css";
@import "../assets/design/_welcome.scss";
</style>