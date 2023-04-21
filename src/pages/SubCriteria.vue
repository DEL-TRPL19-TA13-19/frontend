<template>
    <b-container fluid>
        <div class="title">
            <h3><font-awesome-icon id="icon" icon="fa-solid fa-cubes"/> Sub Criteria</h3>
        </div>
        <hr>
        <div class="sub-criteria-body">
            <!-- Timbulan Sampah -->
            <div class="custom-card">
                <div class="card-title">
                    <h5><span><font-awesome-icon id="icon" icon="fa-solid fa-table"/></span>Timbulan Sampah</h5>
                </div>
                <div class="card-body">
                    <b-table striped hover :items="timbulan_sampah" />
                </div>
            </div>
            <!-- Jarak Alternatif Menuju TPA -->
            <div class="custom-card">
                <div class="card-title">
                    <h5><span><font-awesome-icon id="icon" icon="fa-solid fa-table"/></span>Jarak Alternatif Menuju TPA</h5>
                </div>
                <div class="card-body">
                    <b-table striped hover :items="jarak_tpa" />
                </div>
            </div>
            <!-- Jarak Ke Pemukiman -->
            <div class="custom-card">
                <div class="card-title">
                    <h5><span><font-awesome-icon id="icon" icon="fa-solid fa-table"/></span>Jarak ke Pemukiman</h5>
                </div>
                <div class="card-body">
                    <b-table striped hover :items="jarak_pemukiman" />
                </div>
            </div>
            <!-- Jarak ke Sungai -->
            <div class="custom-card">
                <div class="card-title">
                    <h5><span><font-awesome-icon id="icon" icon="fa-solid fa-table"/></span>Jarak ke Sungai</h5>
                </div>
                <div class="card-body">
                    <b-table striped hover :items="jarak_sungai" />
                </div>
            </div>
            <!-- Partisipasi Masyarakat -->
            <div class="custom-card">
                <div class="card-title">
                    <h5><span><font-awesome-icon id="icon" icon="fa-solid fa-table"/></span>Partisipasi Masyarakat</h5>
                </div>
                <div class="card-body">
                    <b-table striped hover :items="partisipasi_masyarakat" />
                </div>
            </div>
            <!-- Cakupan Rumah -->
            <div class="custom-card">
                <div class="card-title">
                    <h5><span><font-awesome-icon id="icon" icon="fa-solid fa-table"/></span>Cakupan Rumah</h5>
                </div>
                <div class="card-body">
                    <b-table striped hover :items="cakupan_rumah" />
                </div>
            </div>
            <!-- Aksesibilitas -->
            <div class="custom-card">
                <div class="card-title">
                    <h5><span><font-awesome-icon id="icon" icon="fa-solid fa-table"/></span>Aksesibilitas</h5>
                </div>
                <div class="card-body">
                    <b-table striped hover :items="aksesibilitas" />
                </div>
            </div>
        </div>
    </b-container>
</template>

<script>

import {defineComponent} from "vue";
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";

export default {
    name: "Sub Criteria",
    components: {FontAwesomeIcon},
    data() {
        return {
            perPage: 3,
            currentPage: 1,
            timbulan_sampah: [
                { no: 1, nama_Sub_Kriteria: 'Jaringan Jalan', kategori: 'Sangat Baik' },
                { no: 2, nama_Sub_Kriteria: 'Perumahan', kategori: 'Baik' },
                { no: 3, nama_Sub_Kriteria: 'Fasilitas Komersil', kategori: 'Baik' },
                { no: 4, nama_Sub_Kriteria: 'Fasilitas Umum', kategori: 'Cukup' },
                { no: 5, nama_Sub_Kriteria: 'Fasilitas Sosial', kategori: 'Kurang' },
                { no: 6, nama_Sub_Kriteria: 'Ruang Terbuka', kategori: 'Sangat Kurang' },
            ],
            jarak_tpa: [
                { no: 1, nama_Sub_Kriteria: 'Alternatif berada di jangkauan layanan TPA', kategori: 'Baik' },
                { no: 2, nama_Sub_Kriteria: 'Alternatif berada di jangkauan terjauh layanan TPA', kategori: 'Cukup' },
                { no: 3, nama_Sub_Kriteria: 'Alternatif tidak berada di jangkauan layanan TPA', kategori: 'Kurang' },
            ],
            jarak_pemukiman: [
                { no: 1, nama_Sub_Kriteria: '> 400 meter', kategori: 'Cukup Baik' },
                { no: 2, nama_Sub_Kriteria: '301 - 400 meter', kategori: 'Baik' },
                { no: 3, nama_Sub_Kriteria: '201 - 300 meter', kategori: 'Cukup' },
                { no: 4, nama_Sub_Kriteria: '101 - 200 meter', kategori: 'Kurang' },
                { no: 5, nama_Sub_Kriteria: '0 - 100 meter', kategori: 'Sangat Kurang' },
            ],
            jarak_sungai: [
                { no: 1, nama_Sub_Kriteria: 'Lokasi memenuhi peil banjir', kategori: 'Baik' },
                { no: 2, nama_Sub_Kriteria: 'Lokasi memenuhi sebagian peil banjir', kategori: 'Cukup' },
                { no: 3, nama_Sub_Kriteria: 'Lokasi tidak memenuhi peil banjir', kategori: 'Kurang' },
            ],
            partisipasi_masyarakat: [
                { no: 1, nama_Sub_Kriteria: '>80% Masyarakat Setuju', kategori: 'Cukup Baik' },
                { no: 2, nama_Sub_Kriteria: '61%–80% Masyarakat Setuju', kategori: 'Baik' },
                { no: 3, nama_Sub_Kriteria: '41%–60% Masyarakat Setuju', kategori: 'Cukup' },
                { no: 4, nama_Sub_Kriteria: '21%–40% Masyarakat Setuju', kategori: 'Kurang' },
                { no: 5, nama_Sub_Kriteria: '< 20% Masyarakat Setuju', kategori: 'Sangat Kurang' },
            ],
            cakupan_rumah: [
                { no: 1, nama_Sub_Kriteria: '>160 Rumah', kategori: 'Cukup Baik' },
                { no: 2, nama_Sub_Kriteria: '121–160 Rumah', kategori: 'Baik' },
                { no: 3, nama_Sub_Kriteria: '81-120 Rumah', kategori: 'Cukup' },
                { no: 4, nama_Sub_Kriteria: '41–80 Rumah', kategori: 'Kurang' },
                { no: 5, nama_Sub_Kriteria: '<40 Rumah', kategori: 'Sangat Kurang' },
            ],
            aksesibilitas: [
                { no: 1, nama_Sub_Kriteria: 'Kondisi jalan bagus dan bisa dilewati kendaraan pengangkut sampah', kategori: 'Baik' },
                { no: 2, nama_Sub_Kriteria: 'Kondisi jalan bagus, tetapi tidak bisa dilewati kendaraan pengangkut sampah atau jalan tidak bagus, tetapi bisa dilewati kendaraan pengangkut sampah', kategori: 'Cukup' },
                { no: 3, nama_Sub_Kriteria: 'Kondisi jalan tidak bagus dan tidak bisa dilewati kendaraan pengangkut sampah', kategori: 'Kurang' },
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
@import "../assets/css/sub_criteria.scss";
</style>