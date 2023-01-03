<template>
  <div class="home">
    <div class="banner">
      <v-icon name="ri-cactus-fill" scale="3"></v-icon>
      <h1>The Surfer's Guide to <span>Baja</span></h1>
      <v-icon name="ri-cactus-fill" scale="3"></v-icon>
    </div>
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

.banner {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
}
</style>
