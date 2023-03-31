<template>
  <h1>Halaman home</h1>
</template>

<script>
import TPSServices from "@/services/TPSServices";

export default {
  name: "app",
  data() {
    return {
      data: [],
    };
  },
  methods: {
    retrieveTPS() {
      TPSServices.getAll()
        .then((res) => {
          // this.data = res.data;
          console.log(res.data);
        })
        .catch((e) => {
          console.log(e);
        });
    },
    findTPSByID() {
      let id = "8c45e89a-37a4-4c03-80df-a8ce60d14c3a";
      TPSServices.getByID(id)
        .then((res) => {
          // this.data = res.d
          console.log(res.data);
        })
        .catch((e) => {
          console.log(e.data);
        });
    },
    createTPS() {
      TPSServices.createTPS({
        jarak_tpa: "woiiiiiiiii",
        kabupaten: "woi",
        kecamatan: "woi",
        kelurahan: "woi",
        lattitude: "woi",
        location: "woi",
        longtitude: "woi",
        name: "woi",
      })
        .then((res) => {
          console.log(res.data);
        })
        .catch((e) => {
          console.log(e.data);
        });
    },
  },
  mounted() {
    // this.retrieveTPS();
    // this.findTPSByID();
    // this.createTPS();
  },
};
</script>
