<template>
  <div>
    <div
      @click="toggleAccordion(title)"
      class="flex justify-between font-bold text-2xl text-white border-2 bg-primary px-4 py-2 rounded-lg cursor-pointer"
    >
      <header class="italic uppercase">
        {{ title }}
      </header>
      <img
        class="w-6 h-6 self-center transform duration-500"
        src="/accordion-arrow.svg"
        :class="{ 'rotate-180': isOpen }"
      />
    </div>
    <div
      class="max-h-0 overflow-hidden flex flex-col gap-4 px-4 pt-4 transition-[max-height] duration-500"
      :class="{ 'max-h-[400vh]': isOpen }"
    >
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { accordionsOpenState, toggleAccordion } from '../accordionService'
import { computed } from 'vue'

export default defineComponent({
  name: 'AccordionComponent',
  props: {
    title: {
      type: String,
      required: true
    }
  },
  data() {
    const isOpen = computed(() => {
      return accordionsOpenState.value[this.title]
    })

    return {
      isOpen,
      toggleAccordion
    }
  }
})
</script>
