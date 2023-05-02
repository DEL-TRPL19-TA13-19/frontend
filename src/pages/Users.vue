<template>
    <b-container fluid>
        <div class="title">
            <div>
                <h3><font-awesome-icon id="icon" icon="fa-solid fa-users"/> Data Hasil Akhir</h3>
            </div>
            <div>
                <a href="">
                    <b-button class="custom-button" variant="primary">
                        <span><font-awesome-icon icon="fa-solid fa-user-plus" />&nbsp;</span> Tambah User
                    </b-button>
                </a>
            </div>
        </div>
        <hr>
        <div class="content">
            <!-- Users -->
            <div class="custom-card">
                <div class="card-title">
                    <h5><span><font-awesome-icon id="icon" icon="fa-solid fa-users"/></span>Daftar Data Users</h5>
                </div>
                <div class="card-body">
                    <div class="table-customize">
                        <b-row class="select-data-entries">
                            <b-form-select v-model="selected" :options="options" size="sm" class="mt-3"></b-form-select>
                        </b-row>
                        <b-row class="w-25 p-3 mb-1 ">
                            <b-form-input
                                v-model="filter"
                                type="search"
                                placeholder="Type to filter data"
                                size="sm"
                            ></b-form-input>
                        </b-row>
                    </div>
                    <b-table striped hover :items="users" />
                </div>
                <div class="table-utils">
                    <div>
                        <p>Showing {{ currentPage }} to 5 of 5 entries</p>
                    </div>
                    <div>
                        <b-pagination
                            v-model="currentPage"
                            :total-rows="rows"
                            :per-page="perPage"
                            aria-controls="my-table"
                            prev-text="Previous"
                            next-text="Next"
                            first-number
                            last-number
                        ></b-pagination>
                    </div>
                </div>
            </div>
        </div>
    </b-container>
</template>

<script>
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";

export default {
    name: "Users",
    components: {FontAwesomeIcon},
    data() {
        return {
            perPage: 3,
            currentPage: 1,
            users: [
                { no: 1, nama: 'Pintu Bosi', nilai: '0,479', rank: '1'},
                { no: 2, nama: 'Sitoluama', nilai: '0,398', rank: '2'},
                { no: 3, nama: 'Patane I', nilai: '0,298', rank: '3'},
                { no: 4, nama: 'Siantar Narumonda', nilai: '0,276', rank: '4'},
                { no: 5, nama: 'Balige', nilai: '0,141', rank: '5'},
            ],
            selected: 10,
            options: [
                { value: 10, text: '10' },
                { value: 20, text: '20' },
                { value: 50, text: '50' },
                { value: 100, text: '100' }
            ]
        }
    }
}
</script>

<style>
@import "../assets/css/app.scss";
</style>