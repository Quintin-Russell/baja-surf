<template>
  <div class="home">
    <h1>The Surfer's Guide to <span>Baja</span></h1>
    <Map></Map>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"
import Map from "@/components/Map.vue"

export default defineComponent({
  name: "home",
  components: {
    Map,
  },
})
</script>

<style scoped>
h1 {
  font-family: "Yatra One", cursive;
}

h1 > span {
  display: block;
  font-family: "Ultra", serif;
}
</style>
