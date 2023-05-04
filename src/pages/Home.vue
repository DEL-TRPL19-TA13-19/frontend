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
        <router-link to="/criteria" class="text-black">
          <b-card class="dashboard-card card-yellow">
            <b-row align-v="center">
              <b-col md="6"><h3>Data Kriteria</h3></b-col>
              <b-col md="1" offset-md="4">
                <font-awesome-icon class="icon" icon="fa-solid fa-cube" />
              </b-col>
            </b-row>
          </b-card>
        </router-link>

        <router-link to="sub-criteria" class="text-black">
          <b-card class="dashboard-card card-blue">
            <b-row align-v="center">
              <b-col md="6"><h4>Data Sub Kriteria</h4></b-col>
              <b-col md="1" offset-md="4">
                <font-awesome-icon class="icon" icon="fa-solid fa-cubes" />
              </b-col>
            </b-row>
          </b-card>
        </router-link>

        <router-link class="text-black" to="/collections">
          <b-card class="dashboard-card card-magenta">
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
          <b-card class="dashboard-card card-red">
            <b-row align-v="center">
              <b-col md="6"><h4>Data Alternatif</h4></b-col>
              <b-col md="1" offset-md="4">
                <font-awesome-icon class="icon" icon="fa-solid fa-users" />
              </b-col>
            </b-row>
          </b-card>
        </router-link>

        <router-link to="/calculates" class="text-black">
          <b-card class="dashboard-card card-orange">
            <b-row align-v="center">
              <b-col md="6"><h4>Data Perhitungan</h4></b-col>
              <b-col md="1" offset-md="4">
                <font-awesome-icon class="icon" icon="fa-solid fa-calculator" />
              </b-col>
            </b-row>
          </b-card>
        </router-link>

        <router-link to="final-scores" class="text-black">
          <b-card class="dashboard-card card-green">
            <b-row align-v="center">
              <b-col md="6"><h4>Hasil Akhir</h4></b-col>
              <b-col md="1" offset-md="4">
                <font-awesome-icon
                  class="icon"
                  icon="fa-solid fa-ranking-star"
                />
              </b-col>
            </b-row>
          </b-card>
        </router-link>
      </b-card-group>
    </b-container>
  </div>
</template>

<script setup>
import Welcome from "@/components/Welcome.vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
</script>

<style>
.dashboard-card {
  display: flex;
  flex-direction: row;
  padding: 25px;
  max-width: 450px;
  height: 150px;
  margin: 25px 20px 25px 20px;
  justify-content: space-around;
}

.dashboard-card > h3 {
  flex-grow: 8;
}

.dashboard-card > img {
  flex-grow: 2;
  width: 30px;
  height: 30px;
}

.dashboard-card:hover {
  box-shadow: 10px 10px black;
}

.dashboard-card-deck {
  padding: 25px;
}

b-row {
  width: 100%;
}

.icon {
  width: 50px;
  height: 50px;
}

.title {
  margin: 40px;
}

.link {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 1;
}

.card-yellow {
  border: 0px solid #fff507;
  border-left-width: 10px;
  background-color: #fff7ac;
}

.card-blue {
  border: 0px solid #44abec;
  border-left-width: 10px;
  background-color: #b0e1ff;
}

.card-red {
  border: 0px solid #f55b5b;
  border-left-width: 10px;
  background-color: #ffd7d7;
}

.card-magenta {
  border: 0px solid #c862ca;
  border-left-width: 10px;
  background-color: #fecfff;
}

.card-orange {
  border: 0px solid #ff9c0c;
  border-left-width: 10px;
  background-color: #fee7a3;
}

.card-green {
  border: 0px solid #4bb14f;
  border-left-width: 10px;
  background-color: #adffb0;
}
</style>
