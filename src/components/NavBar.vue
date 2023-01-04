<template>
  <ul>
    <li v-for="route in $router.options.routes">
      <router-link :to="route.path">{{
        normalizeName(route.name)
      }}</router-link>
    </li>
  </ul>
</template>

<script lang="ts"></script>

<style></style>
