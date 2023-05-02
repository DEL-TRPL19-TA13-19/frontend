<template>
  <div>
    <b-container fluid>
      <div class="title">
        <h3>
          <span><font-awesome-icon icon="fa-solid fa-gauge" /></span> D A S H B
          O A R D
        </h3>
      </div>
      <hr />
      <welcome></welcome>
      <b-card-group columns class="dashboard-card-deck">
        <b-card class="dashboard-card card-yellow" href="/login">
          <b-row align-v="center">
            <b-col md="6"><h3>Data Kriteria</h3></b-col>
            <b-col md="1" offset-md="4">
              <font-awesome-icon class="icon" icon="fa-solid fa-cube" />
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

        <router-link class="text-black" to="/collections">
          <b-card class="dashboard-card card-magenta" href="#">
            <b-row align-v="center">
              <b-col md="6"><h4>Data Collection</h4></b-col>
              <b-col md="1" offset-md="4">
                <font-awesome-icon
                  class="icon"
                  icon="fa-solid fa-pen-to-square"
                />
              </b-col>
            </b-row>
          </b-card>
        </router-link>

        <router-link to="/alternatives" class="text-black">
          <b-card class="dashboard-card card-red" href="#">
            <b-row align-v="center">
              <b-col md="6"><h4>Data Alternatif</h4></b-col>
              <b-col md="1" offset-md="4">
                <font-awesome-icon class="icon" icon="fa-solid fa-users" />
              </b-col>
            </b-row>
            <a href="/login"><span class="link"></span></a>
          </b-card>
        </router-link>

        <b-card class="dashboard-card card-orange" href="#">
          <b-row align-v="center">
            <b-col md="6"><h4>Data Perhitungan</h4></b-col>
            <b-col md="1" offset-md="4">
              <font-awesome-icon class="icon" icon="fa-solid fa-calculator" />
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

<script setup>
import Welcome from "@/components/Welcome.vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
</script>

<style>
@import "../assets/css/home.css";
@import "../assets/design/_welcome.scss";
</style>
