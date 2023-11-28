<template>
  <div class="">
    <!-- generate unlimited 100px by 100px clickable div -->
    <div class="flex flex-wrap w-[300vw]">
      <Box
        v-for="i in 1800"
        :key="i"
        fill=""
        @click="console.log(i)"
      />
    </div>
  </div>
</template>

<script>
import Box from './Box.vue';

export default {
    name: 'Home',
    components: { Box }
}
</script>

<style scoped>
/* Your component's styles go here */
</style>
