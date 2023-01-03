<template>
  <nav><router-link to="/">Home</router-link> |</nav>
  <router-view />
</template>

<script lang="ts"></script>

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

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
