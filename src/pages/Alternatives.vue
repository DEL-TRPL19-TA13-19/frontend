<template>
    <b-container>
        <div class="title">
            <div>
                <h3><span><font-awesome-icon class="icon" icon="fa-solid fa-users" />&nbsp;</span>A l t e r n a t i v e s</h3>
            </div>
            <div>
                <a href="/alternatives/add">
                    <b-button class="add-button" variant="primary">
                        <span><font-awesome-icon icon="fa-solid fa-plus" />&nbsp;</span> Tambah Data
                    </b-button>
                </a>
            </div>
        </div>
        <hr>
        <div class="table-card">
            <div class="table-card-title">
                <h5><font-awesome-icon icon="fa-solid fa-table" /></h5>
                <h5>A l t e r n a t i v e s</h5></div>
            <div class="table-card-body">
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
                <b-table striped hover :items="items"></b-table>
            </div>
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
    </b-container>
</template>

<script>
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";

export default {
    name: "Alternatives",
    components: {FontAwesomeIcon},
    data() {
        return {
            perPage: 3,
            currentPage: 1,
            items: [
                { age: 40, first_name: 'Dickerson', last_name: 'Macdonald' },
                { age: 21, first_name: 'Larsen', last_name: 'Shaw' },
                { age: 89, first_name: 'Geneva', last_name: 'Wilson' },
                { age: 38, first_name: 'Jami', last_name: 'Carney' }
            ],
            selected: 10,
            options: [
                { value: 10, text: '10' },
                { value: 20, text: '20' },
                { value: 50, text: '50' },
                { value: 100, text: '100' }
            ]
        }
    },
    computed: {
        rows() {
            return this.items.length
        }
    }
}
</script>

<style>
@import "../assets/css/alternatives.scss";
</style>