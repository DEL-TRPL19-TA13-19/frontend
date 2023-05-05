<template>
  <b-button variant="primary">
    <span><font-awesome-icon icon="fa-solid fa-calculator" />&nbsp;</span>
    {{ text }}
  </b-button>
</template>

<script setup>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

defineProps({
  text: String,
});
</script>
