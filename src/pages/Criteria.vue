<template>
  <v-container fluid>
    <div id="title">
    <h3><span><font-awesome-icon id="icon" icon="fa-solid fa-box" />&nbsp;</span>C r i t e r i a</h3>
    </div>
    <hr>
    <div id="criteria-card">
        <div id="criteria-card-title">
            <h5><v-icon id="icon" icon="fas fa-table"></v-icon></h5>
            <h5>Pembobotan Kriteria</h5>
        </div>
        <div id="criteria-card-table">
            <div>
                <v-table>
                    <thead>
                    <tr>
                        <th id="th" class="text-left">
                            Criteria
                        </th>
                        <th id="th" class="text-left">
                            Timbulan <br> Sampah
                        </th>
                        <th id="th" class="text-left">
                            Jarak Alternatif <br> Menuju TPA
                        </th>
                        <th id="th" class="text-left">
                            Kondisi <br> Tanah
                        </th>
                        <th id="th" class="text-left">
                            Jarak ke <br> Pemukiman
                        </th>
                        <th id="th" class="text-left">
                            Jarak ke <br> Sungai
                        </th>
                        <th id="th" class="text-left">
                            Partisipasi <br> Masyarakat
                        </th>
                        <th id="th" class="text-left">
                            Cakupan <br> Rumah
                        </th>
                        <th id="th" class="text-left">
                            Aksesibilitas
                        </th>
                    </tr>
                    </thead>
                    <tbody class="text-center">
                    <tr>
                        <td id="th">
                            Timbulan Sampah
                        </td>
                        <td>
                            <v-chip id="pairwise" class="ma-2" label>
                                {{ c1c1 }}
                            </v-chip>
                        </td>
                        <td>
                            <v-select
                                clearable
                                label="Select"
                                :items= items
                                variant="underlined"
                                v-model=c1c2
                            ></v-select>
                        </td>
                        <td>
                            <v-select
                                    clearable
                                    label="Select"
                                    :items= items
                                    variant="underlined"
                                    v-model=c1c3
                            ></v-select>
                        </td>
                        <td>
                            <v-select
                                    clearable
                                    label="Select"
                                    :items= items
                                    variant="underlined"
                                    v-model=c1c4
                            ></v-select>
                        </td>
                        <td>
                            <v-select
                                    clearable
                                    label="Select"
                                    :items= items
                                    variant="underlined"
                                    v-model=c1c5
                            ></v-select>
                        </td>
                        <td>
                            <v-select
                                    clearable
                                    label="Select"
                                    :items= items
                                    variant="underlined"
                                    v-model=c1c6
                            ></v-select>
                        </td>
                        <td>
                            <v-select
                                    clearable
                                    label="Select"
                                    :items= items
                                    variant="underlined"
                                    v-model=c1c7
                            ></v-select>
                        </td>

                        <td>
                            <v-select
                                clearable
                                label="Select"
                                :items= items
                                variant="underlined"
                                v-model=c1c8
                            ></v-select>
                        </td>
                    </tr>
                    <tr>
                        <td id="th">
                            Jarak Alternatif Menuju TPA
                        </td>
                        <td>
                            <v-chip id="pairwise" class="ma-2" label>
                                {{ (1/c1c2).toFixed(3) }}
                            </v-chip>
                        </td>
                        <td>
                            <v-chip id="pairwise" class="ma-2" label>
                                {{ c2c2 }}
                            </v-chip>
                        </td>
                        <td>
                            <v-select
                                clearable
                                label="Select"
                                :items= items
                                variant="underlined"
                                v-model=c2c3
                            ></v-select>
                        </td>
                        <td>
                            <v-select
                                clearable
                                label="Select"
                                :items= items
                                variant="underlined"
                                v-model=c2c4
                            ></v-select>
                        </td>
                        <td>
                            <v-select
                                clearable
                                label="Select"
                                :items= items
                                variant="underlined"
                                v-model=c2c5
                            ></v-select>
                        </td>
                        <td>
                            <v-select
                                clearable
                                label="Select"
                                :items= items
                                variant="underlined"
                                v-model=c2c6
                            ></v-select>
                        </td>
                        <td>
                            <v-select
                                clearable
                                label="Select"
                                :items= items
                                variant="underlined"
                                v-model=c2c7
                            ></v-select>
                        </td>
                        <td>
                            <v-select
                                clearable
                                label="Select"
                                :items= items
                                variant="underlined"
                                v-model=c2c8
                            ></v-select>
                        </td>
                    </tr>
                    <tr>
                        <td id="th">
                            Kondisi Tanah
                        </td>
                        <td>
                            <v-chip id="pairwise" class="ma-2" label>
                                {{ (1/c1c3).toFixed(3) }}
                            </v-chip>
                        </td>
                        <td>
                            <v-chip id="pairwise" class="ma-2" label>
                                {{ (1/c2c3).toFixed(3) }}
                            </v-chip>
                        </td>
                        <td>
                            <v-chip id="pairwise" class="ma-2" label>
                                {{ c3c3 }}
                            </v-chip>
                        </td>
                        <td>
                            <v-select
                                clearable
                                label="Select"
                                :items= items
                                variant="underlined"
                                v-model=c3c4
                            ></v-select>
                        </td>
                        <td>
                            <v-select
                                clearable
                                label="Select"
                                :items= items
                                variant="underlined"
                                v-model=c3c5
                            ></v-select>
                        </td>
                        <td>
                            <v-select
                                clearable
                                label="Select"
                                :items= items
                                variant="underlined"
                                v-model=c3c6
                            ></v-select>
                        </td>
                        <td>
                            <v-select
                                clearable
                                label="Select"
                                :items= items
                                variant="underlined"
                                v-model=c3c7
                            ></v-select>
                        </td>
                        <td>
                            <v-select
                                clearable
                                label="Select"
                                :items= items
                                variant="underlined"
                                v-model=c3c8
                            ></v-select>
                        </td>
                    </tr>
                    <tr>
                        <td id="th">
                            Jarak ke Pemukiman
                        </td>
                        <td>
                            <v-chip id="pairwise" class="ma-2" label>
                                {{ (1/c1c4).toFixed(3) }}
                            </v-chip>
                        </td>
                        <td>
                            <v-chip id="pairwise" class="ma-2" label>
                                {{ (1/c2c4).toFixed(3) }}
                            </v-chip>
                        </td>
                        <td>
                            <v-chip id="pairwise" class="ma-2" label>
                                {{ (1/c3c4).toFixed(3) }}
                            </v-chip>
                        </td>
                        <td>
                            <v-chip id="pairwise" class="ma-2" label>
                                {{ c4c4 }}
                            </v-chip>
                        </td>
                        <td>
                            <v-select
                                clearable
                                label="Select"
                                :items= items
                                variant="underlined"
                                v-model=c4c5
                            ></v-select>
                        </td>
                        <td>
                            <v-select
                                clearable
                                label="Select"
                                :items= items
                                variant="underlined"
                                v-model=c4c6
                            ></v-select>
                        </td>
                        <td>
                            <v-select
                                clearable
                                label="Select"
                                :items= items
                                variant="underlined"
                                v-model=c4c7
                            ></v-select>
                        </td>
                        <td>
                            <v-select
                                clearable
                                label="Select"
                                :items= items
                                variant="underlined"
                                v-model=c4c8
                            ></v-select>
                        </td>
                    </tr>
                    <tr>
                        <td id="th">
                            Jarak ke Sungai
                        </td>
                        <td>
                            <v-chip id="pairwise" class="ma-2" label>
                                {{ (1/c1c5).toFixed(3) }}
                            </v-chip>
                        </td>
                        <td>
                            <v-chip id="pairwise" class="ma-2" label>
                                {{ (1/c2c5).toFixed(3) }}
                            </v-chip>
                        </td>
                        <td>
                            <v-chip id="pairwise" class="ma-2" label>
                                {{ (1/c3c5).toFixed(3) }}
                            </v-chip>
                        </td>
                        <td>
                            <v-chip id="pairwise" class="ma-2" label>
                                {{ (1/c4c5).toFixed(3) }}
                            </v-chip>
                        </td>
                        <td>
                            <v-chip id="pairwise" class="ma-2" label>
                                {{ c5c5 }}
                            </v-chip>
                        </td>
                        <td>
                            <v-select
                                clearable
                                label="Select"
                                :items= items
                                variant="underlined"
                                v-model=c5c6
                            ></v-select>
                        </td>
                        <td>
                            <v-select
                                clearable
                                label="Select"
                                :items= items
                                variant="underlined"
                                v-model=c5c7
                            ></v-select>
                        </td>
                        <td>
                            <v-select
                                clearable
                                label="Select"
                                :items= items
                                variant="underlined"
                                v-model=c5c8
                            ></v-select>
                        </td>
                    </tr>
                    <tr>
                        <td id="th">
                            Partisipasi Masyarakat
                        </td>
                        <td>
                            <v-chip id="pairwise" class="ma-2" label>
                                {{ (1/c1c6).toFixed(3) }}
                            </v-chip>
                        </td>
                        <td>
                            <v-chip id="pairwise" class="ma-2" label>
                                {{ (1/c2c6).toFixed(3) }}
                            </v-chip>
                        </td>
                        <td>
                            <v-chip id="pairwise" class="ma-2" label>
                                {{ (1/c3c6).toFixed(3) }}
                            </v-chip>
                        </td>
                        <td>
                            <v-chip id="pairwise" class="ma-2" label>
                                {{ (1/c4c6).toFixed(3) }}
                            </v-chip>
                        </td>
                        <td>
                            <v-chip id="pairwise" class="ma-2" label>
                                {{ (1/c5c6).toFixed(3) }}
                            </v-chip>
                        </td>
                        <td>
                            <v-chip id="pairwise" class="ma-2" label>
                                {{ c6c6 }}
                            </v-chip>
                        </td>
                        <td>
                            <v-select
                                clearable
                                label="Select"
                                :items= items
                                variant="underlined"
                                v-model=c6c7
                            ></v-select>
                        </td>
                        <td>
                            <v-select
                                clearable
                                label="Select"
                                :items= items
                                variant="underlined"
                                v-model=c6c8
                            ></v-select>
                        </td>
                    </tr>
                    <tr>
                        <td id="th">
                            Cakupan Rumah
                        </td>
                        <td>
                            <v-chip id="pairwise" class="ma-2" label>
                                {{ (1/c1c7).toFixed(3) }}
                            </v-chip>
                        </td>
                        <td>
                            <v-chip id="pairwise" class="ma-2" label>
                                {{ (1/c2c7).toFixed(3) }}
                            </v-chip>
                        </td>
                        <td>
                            <v-chip id="pairwise" class="ma-2" label>
                                {{ (1/c3c7).toFixed(3) }}
                            </v-chip>
                        </td>
                        <td>
                            <v-chip id="pairwise" class="ma-2" label>
                                {{ (1/c4c7).toFixed(3) }}
                            </v-chip>
                        </td>
                        <td>
                            <v-chip id="pairwise" class="ma-2" label>
                                {{ (1/c5c7).toFixed(3) }}
                            </v-chip>
                        </td>
                        <td>
                            <v-chip id="pairwise" class="ma-2" label>
                                {{ (1/c6c7).toFixed(3) }}
                            </v-chip>
                        </td>
                        <td>
                            <v-chip id="pairwise" class="ma-2" label>
                                {{ c7c7 }}
                            </v-chip>
                        </td>
                        <td>
                            <v-select
                                clearable
                                label="Select"
                                :items= items
                                variant="underlined"
                                v-model=c7c8
                            ></v-select>
                        </td>
                    </tr>
                    <tr>
                        <td id="th">
                            Aksesibilitas
                        </td>
                        <td>
                            <v-chip id="pairwise" class="ma-2" label>
                                {{ (1/c1c8).toFixed(3) }}
                            </v-chip>
                        </td>
                        <td>
                            <v-chip id="pairwise" class="ma-2" label>
                                {{ (1/c2c8).toFixed(3) }}
                            </v-chip>
                        </td>
                        <td>
                            <v-chip id="pairwise" class="ma-2" label>
                                {{ (1/c3c8).toFixed(3) }}
                            </v-chip>
                        </td>
                        <td>
                            <v-chip id="pairwise" class="ma-2" label>
                                {{ (1/c4c8).toFixed(3) }}
                            </v-chip>
                        </td>
                        <td>
                            <v-chip id="pairwise" class="ma-2" label>
                                {{ (1/c5c8).toFixed(3) }}
                            </v-chip>
                        </td>
                        <td>
                            <v-chip id="pairwise" class="ma-2" label>
                                {{ (1/c6c8).toFixed(3) }}
                            </v-chip>
                        </td>
                        <td>
                            <v-chip id="pairwise" class="ma-2" label>
                                {{ (1/c7c8).toFixed(3) }}
                            </v-chip>
                        </td>
                        <td>
                            <v-chip id="pairwise" class="ma-2" label>
                                {{ c8c8 }}
                            </v-chip>
                        </td>
                    </tr>
                    </tbody>
                </v-table>
            </div>
            <div class="table-utils" style="display: flex; justify-content: end; margin-top: 20px">
                <div>
                    <a href="/alternatives/add">
                        <b-button class="add-button" variant="primary">
                            <span><font-awesome-icon icon="fa-solid fa-floppy-disk" />&nbsp;</span> Tambah Data
                        </b-button>
                    </a>
                </div>
            </div>
        </div>
    </div>
  </v-container>
</template>

<style>
@import "../assets/css/_criteria.scss";
v-select{
    max-width: 80px;

}
</style>

<script>
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";

export default {
    components: {FontAwesomeIcon},
    data() {
        return {
            items: [1,2,3,4,5,6,7,8,9],
            c1c1: 1, c1c2: 2, c1c3: 3, c1c4: 3, c1c5: 3, c1c6: 3, c1c7: 3,c1c8: 3,
            c2c1: 1, c2c2: 1, c2c3: 2, c2c4: 2, c2c5: 2, c2c6: 2, c2c7: 2,c2c8: 2,
            c3c1: 1, c3c2: 1, c3c3: 1, c3c4: 1, c3c5: 1, c3c6: 1, c3c7: 1,c3c8: 1,
            c4c1: 1, c4c2: 1, c4c3: 1, c4c4: 1, c4c5: 1, c4c6: 1, c4c7: 1,c4c8: 1,
            c5c1: 1, c5c2: 1, c5c3: 1, c5c4: 1, c5c5: 1, c5c6: 1, c5c7: 1,c5c8: 1,
            c6c1: 1, c6c2: 1, c6c3: 1, c6c4: 1, c6c5: 1, c6c6: 1, c6c7: 1,c6c8: 1,
            c7c1: 1, c7c2: 1, c7c3: 1, c7c4: 1, c7c5: 1, c7c6: 1, c7c7: 1,c7c8: 1,
            c8c1: 1, c8c2: 1, c8c3: 1, c8c4: 1, c8c5: 1, c8c6: 1, c8c7: 1,c8c8: 1,
        }
    }
}
</script>