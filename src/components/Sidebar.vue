<template>
  <v-navigation-drawer id="sidebar" theme="dark" permanent>
    <v-list density="compact" nav>
      <v-list-item id="list-item" to="/" prepend-icon="mdi-forum" value="home">
        <v-icon id="icon" icon="fas fa-gauge"></v-icon>
        Dashboard
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
