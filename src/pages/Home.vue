<template>
  <h1>Halaman home</h1>
</template>

<script>
export default {
  name: "app",
  created() {
    console.log(import.meta.env.VITE_API_ENDPOINT);
  }
};
</script>