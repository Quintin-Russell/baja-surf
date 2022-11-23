<template>
  <div>
    <h1></h1>
    <GmapMap>
    </GmapMap>
  </div>
</template>

<script lang="ts">
import { Loader } from '@googlemaps/js-api-loader'
import { onMounted } from 'vue'
const GOOGLE_MAP_API_KEY = 'AIzaSyC9fgIeNyg1EfSqwkuwzL--2lmYhIQE8_Y'
//video: https://www.youtube.com/watch?v=m4ad3eEFhAo

export default {
    setup() {
        const loader = new Loader({ apiKey: GOOGLE_MAP_API_KEY })
        onMounted(async () => {
            loader.load()
        })
    }
}
</script>

<style>

</style>