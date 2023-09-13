<template>
  <div>
    <div
      v-on:click="isOpen = !isOpen"
      class="flex justify-between font-bold text-2xl text-white border-2 bg-primary px-4 py-2 rounded-lg cursor-pointer"
    >
      <header class="italic uppercase">
        {{ title }}
      </header>
      <img class="w-6 h-6 self-center" src="../../public/accordion-arrow.svg" />
    </div>
    <div :class="!isOpen && 'hidden'">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  data: () => {
    return {
      isOpen: true
    }
  },
  name: 'accordion-component',
  props: {
    title: String
  }
}
</script>
