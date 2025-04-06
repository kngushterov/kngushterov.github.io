<template>
  <div class="flex flex-col lg:flex-row w-4/5 items-center justify-between">
    <div class="flex xl:px-12 xl:pt-3 items-center">
      <img
        src="/cv-photo.png"
        alt="Profile Picture"
        class="w-24 h-24 xl:w-40 xl:h-40 rounded-3xl border-4 border-white xl:-mb-9 xl:relative z-20"
      />
      <div class="bg-primary-800 text-white p-3 sm:p-6">
        <p class="text-xl sm:text-3xl font-bold">Konstantin Gushterov</p>
        <p class="text-lg sm:text-2xl font-bold text-secondary">
          Full Stack Web Developer - Mid/Senior Level
        </p>
      </div>
    </div>
    <button
      @click="toggleAllAccordions"
      :class="[
        'bg-primary text-white border-2 border-white rounded-xl h-min w-full lg:w-44 px-4 py-2 font-bold text-xl my-3 xl:mr-12 shadow-md',
        'transition-all duration-500 ease-in-out transform',
        'lg:hover:bg-secondary lg:hover:shadow-xl lg:hover:-translate-y-1 lg:hover:scale-105',
        'active:scale-95 active:bg-secondary active:shadow-sm',
        'flex items-center justify-center gap-4 lg:justify-between lg:gap-0'
      ]"
    >
      <span>{{ buttonText }}</span>
      <img
        class="w-6 h-6 transform duration-500"
        src="/accordion-arrow.svg"
        :class="{ 'rotate-180': buttonText === 'Fold All' }"
        alt="arrow"
      />
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { areMostAccordionsOpen, toggleAllAccordions } from '../accordionService'
import { computed } from 'vue'

export default defineComponent({
  name: 'HeaderComponent',

  data() {
    const buttonText = computed(() => {
      return areMostAccordionsOpen.value ? 'Fold All' : 'Unfold All'
    })

    return { buttonText, toggleAllAccordions }
  }
})
</script>
