<template>
  <TopMenu></TopMenu>
  <router-view />
</template>

<script lang="ts">
import { defineComponent } from "vue"
import TopMenu from "./components/TopMenu.vue"
export default defineComponent({
  components: {
    TopMenu,
  },
})
</script>

<style>
body {
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background: rgb(210, 167, 124);
  background: linear-gradient(
    90deg,
    rgba(210, 167, 124, 0.7) 20%,
    rgba(202, 152, 102, 0.5) 30%
  );
}
</style>
