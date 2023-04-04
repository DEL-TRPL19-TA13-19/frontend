<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="info">
      <b-navbar-brand to="/">Penentuan Lokasi TPS
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="mx-auto">
          <b-nav-item href="/login">Login</b-nav-item>
            <b-nav-item href="/">Dashboard</b-nav-item>
            <b-nav-item href="/collections">Collections</b-nav-item>
            <b-nav-item href="#">Alternatives</b-nav-item>
            <b-nav-item href="#">Penilaian</b-nav-item>
            <b-nav-item href="#">Perhitungan</b-nav-item>
            <b-nav-item href="#">Hasil Akhir</b-nav-item>
            <b-nav-item href="#">User</b-nav-item>
            <b-nav-item href="#">Profile</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>
<script setup>
</script>