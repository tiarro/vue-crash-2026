<!-- Vue components can be authored in two different API styles is Compositions API -->
<script setup>
import Navbar from "@/components/Navbar.vue";
import { RouterView } from "vue-router";
</script>

<template>
  <Navbar />
  <RouterView />
</template>
