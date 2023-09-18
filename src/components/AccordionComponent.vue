<template>
  <div class="">
    <div
      v-on:click="isOpen = !isOpen"
      class="flex justify-between font-bold text-2xl text-white border-2 bg-primary px-4 py-2 rounded-lg cursor-pointer"
    >
      <header class="italic uppercase">
        {{ title }}
      </header>
      <img
        class="w-6 h-6 self-center transform duration-500"
        src="/accordion-arrow.svg"
        :class="isOpen && 'rotate-180'"
      />
    </div>
    <div
      class="max-h-0 overflow-hidden flex flex-col gap-4 px-4 pt-4 transition-[max-height] duration-500"
      :class="isOpen && 'max-h-[200vh]'"
    >
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
