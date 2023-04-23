<template>
    <b-container fluid>
        <div class="title">
            <h3><font-awesome-icon id="icon" icon="fa-solid fa-calculator"/> Perhitungan</h3>
        </div>
        <hr>
        <div class="content">
            <!-- Data Alternatif -->
            <div class="custom-card">
                <div class="card-title">
                    <h5><span><font-awesome-icon id="icon" icon="fa-solid fa-table"/></span>Data Penilaian Alternatif</h5>
                </div>
                <div class="card-body">
                    <b-table striped hover :items="alternatives" />
                </div>
            </div>

            <!-- Matriks Keputusan -->
            <div class="custom-card">
                <div class="card-title">
                    <h5><span><font-awesome-icon id="icon" icon="fa-solid fa-table"/></span>Matriks Keputusan (X)</h5>
                </div>
                <div class="card-body">
                    <b-table striped hover :items="matrix" />
                </div>
            </div>

            <!-- Data Perhitungan Nilai  Atribut -->
            <div class="custom-card">
                <div class="card-title">
                    <h5><span><font-awesome-icon id="icon" icon="fa-solid fa-table"/></span>Data Perhitungan Nilai  Atribut</h5>
                </div>
                <div class="card-body">
                    <b-table striped hover :items="atribute" />
                </div>
            </div>
        </div>
    </b-container>

</template>

<script>
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";

export default {
    name: "Calculation",
    components: {FontAwesomeIcon},
    data() {
        return {
            perPage: 3,
            currentPage: 1,
            matrix: [
                { no: 1,
                    nama: 'Sitoluama', timbulan_sampah: '0,436',
                    jarak_tpa: '0,669', jarak_pemukiman: '0,134',
                    jarak_sungai: '0,669', partisipasi: '0,035',
                    cakupan_rumah: '0,134', aksesibilitas: '0,669'
                },
                { no: 2,
                    nama: 'Siantar Narumonda', timbulan_sampah: '0,436',
                    jarak_tpa: '0,267', jarak_pemukiman: '0,503',
                    jarak_sungai: '0,669', partisipasi: '0,068',
                    cakupan_rumah: '0,260', aksesibilitas: '0,669'
                },
                { no: 3,
                    nama: 'Pintu Bosi', timbulan_sampah: '0,221',
                    jarak_tpa: '0,669', jarak_pemukiman: '0,035',
                    jarak_sungai: '0,064', partisipasi: '0,260',
                    cakupan_rumah: '0,035', aksesibilitas: '0,267'
                },
            ],
            atribute: [
                { no: 1,
                    nama: 'Sitoluama', timbulan_sampah: '0,436',
                    jarak_tpa: '0,669', jarak_pemukiman: '0,134',
                    jarak_sungai: '0,669', partisipasi: '0,035',
                    cakupan_rumah: '0,134', aksesibilitas: '0,669',
                    total: '0,041'
                },
                { no: 2,
                    nama: 'Siantar Narumonda', timbulan_sampah: '0,436',
                    jarak_tpa: '0,267', jarak_pemukiman: '0,503',
                    jarak_sungai: '0,669', partisipasi: '0,068',
                    cakupan_rumah: '0,260', aksesibilitas: '0,669',
                    total: '0,389'
                },
                { no: 3,
                    nama: 'Pintu Bosi', timbulan_sampah: '0,221',
                    jarak_tpa: '0,669', jarak_pemukiman: '0,035',
                    jarak_sungai: '0,064', partisipasi: '0,260',
                    cakupan_rumah: '0,035', aksesibilitas: '0,267',
                    total: '0,479'
                },
            ],
            alternatives: [
                { no: 1,
                    nama: 'Sitoluama', timbulan_sampah: 'Perumahan',
                    jarak_tpa: 'Alternatif berada di jangkauan layanan TPA',
                    jarak_pemukiman: '300',
                    jarak_sungai: 'Lokasi memenuhi peil banjir',
                    partisipasi: '85%',
                    cakupan_rumah: '114',
                    aksesibilitas: 'Kondisi jalan bagus dan bisa dilewati kendaraan pengangkut sampah'
                },
                { no: 2,
                    nama: 'Siantar Narumonda', timbulan_sampah: 'Perumahan',
                    jarak_tpa: 'Alternatif berada di batas terjauh jangkauan layanan TPA',
                    jarak_pemukiman: '120',
                    jarak_sungai: 'Lokasi memenuhi peil banjir',
                    partisipasi: '76%',
                    cakupan_rumah: '80',
                    aksesibilitas: 'Kondisi jalan bagus dan bisa dilewati kendaraan pengangkut sampah'
                },
                { no: 3,
                    nama: 'Pintu Bosi', timbulan_sampah: 'Fasilitas Komersial',
                    jarak_tpa: 'Alternatif berada di jangkauan layanan TPA',
                    jarak_pemukiman: '80',
                    jarak_sungai: 'Lokasi memenuhi peil banjir',
                    partisipasi: '93',
                    cakupan_rumah: '57',
                    aksesibilitas: 'Kondisi jalan bagus dan bisa dilewati kendaraan pengangkut sampah'
                },
            ],
        }
    }
}
</script>

<style>
@import "../assets/css/calculation.scss";
</style>