<template>
  <div class="home">
    <Map></Map>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Map from "@/components/Map.vue";

export default defineComponent({
  name: "home",
  components: {
    Map,
  },
});
</script>
