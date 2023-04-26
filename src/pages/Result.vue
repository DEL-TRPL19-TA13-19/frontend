<template>
    <b-container fluid>
        <div class="title">
            <div>
                <h3><font-awesome-icon id="icon" icon="fa-solid fa-ranking-star"/> Data Hasil Akhir</h3>
            </div>
            <div>
                <a href="">
                    <b-button class="add-button" variant="primary">
                        <span><font-awesome-icon icon="fa-solid fa-print" />&nbsp;</span> Cetak Data
                    </b-button>
                </a>
            </div>
        </div>
        <hr>
        <div class="content">
            <!-- Data Alternatif -->
            <div class="custom-card">
                <div class="card-title">
                    <h5><span><font-awesome-icon id="icon" icon="fa-solid fa-table"/></span>Data Hasil Perankingan</h5>
                </div>
                <div class="card-body">
                    <b-table striped hover :items="ranks" />
                </div>
            </div>
        </div>
    </b-container>

</template>

<script>
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";

export default {
    name: "Result",
    components: {FontAwesomeIcon},
    data() {
        return {
            perPage: 3,
            currentPage: 1,
            ranks: [
                { no: 1, nama: 'Pintu Bosi', nilai: '0,479', rank: '1'},
                { no: 2, nama: 'Sitoluama', nilai: '0,398', rank: '2'},
                { no: 3, nama: 'Patane I', nilai: '0,298', rank: '3'},
                { no: 4, nama: 'Siantar Narumonda', nilai: '0,276', rank: '4'},
                { no: 5, nama: 'Balige', nilai: '0,141', rank: '5'},
            ],
        }
    }
}
</script>

<style>
@import "../assets/css/result.scss";
</style>