<template>
  <div class="home">
    <div class="banner">
      <v-icon name="ri-cactus-fill" scale="3"></v-icon>
      <h1>The Surfer's Guide to <span>Baja</span></h1>
      <v-icon name="ri-cactus-fill" scale="3"></v-icon>
    </div>
    <a
      href="https://www.amazon.com/Surfers-Guide-Baja-Mike-Parise/dp/0967910056/ref=asc_df_0967910056/?tag=hyprod-20&linkCode=df0&hvadid=312029833857&hvpos=&hvnetw=g&hvrand=1726143724812257511&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=1027760&hvtargid=pla-567339155707&psc=1&tag=&ref=&adgrpid=58874700701&hvpone=&hvptwo=&hvadid=312029833857&hvpos=&hvnetw=g&hvrand=1726143724812257511&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=1027760&hvtargid=pla-567339155707"
    >
      <h5>Based on the legendary book by Mike Parise</h5>
    </a>
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
h1,
h5 {
  font-family: "Yatra One", cursive;
}

a {
  text-decoration: none;
  color: inherit;
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
