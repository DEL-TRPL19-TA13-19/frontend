<template>
    <v-navigation-drawer
        id="sidebar"
        theme="dark"
        permanent
    >
        <v-list density="compact" nav>
<!--            <router-link to="/">-->
<!--                Go to Home-->
<!--            </router-link>-->
<!--            <router-link to="/about">Go to About</router-link>-->
            <v-list-item id="list-item" to="/" prepend-icon="mdi-forum" value="home">
                <v-icon id="icon" icon="fas fa-gauge"></v-icon>
                Dashboard
            </v-list-item>
            <v-list-item id="list-item" to="/collections" prepend-icon="mdi-forum" value="collections">
                <v-icon id="icon" icon="fas fa-cubes"></v-icon>
                Collection
            </v-list-item>
            <v-list-item id="list-item" to="/alternatives" prepend-icon="mdi-forum" value="alternatives">
                <v-icon id="icon" icon="fas fa-users"></v-icon>
                Alternative
            </v-list-item>
            <v-list-item id="list-item" to="/criteria" prepend-icon="mdi-forum" value="criterias">
                <v-icon id="icon" icon="fas fa-box"></v-icon>
                Criteria
            </v-list-item>
            <v-list-item id="list-item" to="/sub-criteria" prepend-icon="mdi-forum" value="subCriterias">
                <v-icon id="icon" icon="fas fa-cubes"></v-icon>
                Sub Criteria
            </v-list-item>
            <v-list-item id="list-item" to="/perhitungan" prepend-icon="mdi-forum" value="calculation">
                <v-icon id="icon" icon="fas fa-calculator"></v-icon>
                Perhitungan
            </v-list-item>
            <v-list-item id="list-item" to="/result" prepend-icon="mdi-forum" value="result">
                <v-icon id="icon" icon="fas fa-ranking-star"></v-icon>
                Data Hasil Akhir
            </v-list-item>
            <p>Master Data</p>
            <hr>
            <v-list-item id="list-item" to="/users" prepend-icon="mdi-forum" value="users">
                <v-icon id="icon" icon="fas fa-users"></v-icon>
                User
            </v-list-item>
        </v-list>
    </v-navigation-drawer>
</template>

<style lang="scss">
@import "/src/assets/design/sidebar";
</style>
<script>
export default {
    data () {
        return {
            drawer: true,
            rail: true,
        }
    },
}
</script>