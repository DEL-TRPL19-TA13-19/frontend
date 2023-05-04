<template>
  <v-navigation-drawer id="sidebar" theme="dark" permanent>
    <v-list density="compact" nav>
      <v-list-item id="list-item" to="/" prepend-icon="mdi-forum" value="home">
        <v-icon id="icon" icon="fas fa-gauge"></v-icon>
        Dashboard
      </v-list-item>
      <v-list-item
        id="list-item"
        to="/sub-criteria"
        prepend-icon="mdi-forum"
        value="sub-criteria"
      >
        <v-icon id="icon" icon="fas fa-cubes"></v-icon>
        Data Sub Kriteria
      </v-list-item>
      <v-list-item
        id="list-item"
        to="/criteria"
        prepend-icon="mdi-forum"
        value="criteria"
      >
        <v-icon id="icon" icon="fas fa-cubes"></v-icon>
        Data Kriteria
      </v-list-item>
      <v-list-item
        id="list-item"
        to="/collections"
        prepend-icon="mdi-forum"
        value="collections"
      >
        <v-icon id="icon" icon="fas fa-cubes"></v-icon>
        Collection
      </v-list-item>
      <v-list-item
        id="list-item"
        to="/alternatives"
        prepend-icon="mdi-forum"
        value="alternatives"
      >
        <v-icon id="icon" icon="fas fa-users"></v-icon>
        Alternative
      </v-list-item>
      <v-list-item
        id="list-item"
        to="/calculates"
        prepend-icon="mdi-forum"
        value="calculates"
      >
        <v-icon id="icon" icon="fas fa-calculator"></v-icon>
        Calculate
      </v-list-item>
      <v-list-item
        id="list-item"
        to="/final-scores"
        prepend-icon="mdi-forum"
        value="final-scores"
      >
        <v-icon id="icon" icon="fas fa-calculator"></v-icon>
        Hasil akhir
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<style lang="scss">
@import "/src/assets/design/sidebar";
</style>
<script>
export default {
  data() {
    return {
      drawer: true,
      rail: true,
    };
  },
};
</script>
