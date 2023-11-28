<template>
  <button
    class="w-[10vw] h-[10vw] lg:w-24 lg:h-24 border border-gray-400 cursor-pointer"
    @click="fill !== '' ? fill = '' : fill = 'x'"
    @pointerdown="fill !== '' ? fill = '' : fill = 'o'"
    v-on-long-press="[onLongPressCallbackDirective, {delay: 1000, modifiers: { stop: true }}]"
  >
    <p>{{ fill }}</p>
</button>
</template>

<script>
import { ref } from 'vue'
import { vOnLongPress } from '@vueuse/components'

const longPressedDirective = ref(false)

const onLongPressCallbackDirective = (e) => {
  longPressedDirective.value = true
  fill = ''
  resetDirective()
}
const resetDirective = () => {
  longPressedDirective.value = false
}


export default {
  name: 'Box',
  props: {
    fill: {
      type: String,
      required: false,
      default: '',
    },
  },
}
</script>
