<template>
  <div class="container">
    <button
      class="btn dropdown-toggle"
      type="button"
      id="dropdownMenuButton1"
      data-bs-toggle="dropdown"
      aria-expanded="false"
      @click="handleClick"
    >
      <v-icon
        scale="2"
        :name="active ? 'bi-menu-button-fill' : 'bi-menu-button-wide'"
      ></v-icon>
    </button>
    <ul
      @click="handleClick"
      class="dropdown-menu"
      aria-labelledby="dropdownMenuButton1"
    >
      <li class="dropdown-item" v-for="route in $router.options.routes">
        <router-link :to="route.path">{{
          normalizeName(route.name)
        }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue"
import OhVueIcon from "oh-vue-icons"

export default defineComponent({
  name: "TopMenu",
  components: {
    "v-icon": OhVueIcon,
  },
  setup() {
    const active = ref(false)

    const handleClick = () => (active.value = !active.value)

    const normalizeName = (name: string | undefined): string | void => {
      if (!name) return
      const articleSet = new Set(["to", "a", "an", "from", "the"])
      const splitName = name.split(" ")

      return splitName
        .map((word, index) => {
          if (index === 0 || !articleSet.has(word))
            return `${word[0].toUpperCase()}${word.slice(1)}`
          return word
        })
        .join(" ")
    }

    return { active, handleClick, normalizeName }
  },
})
</script>

<style scoped>
.container {
  display: flex;
  margin: 0;
  padding: 0.5rem;
}

a {
  font-family: "Yatra One", cursive;
  text-decoration: none;
  color: #2c3e50;
}
</style>
