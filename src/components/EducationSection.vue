<template>
  <div class="flex justify-between">
    <div>
      <header class="font-bold text-xl">
        {{ degree }}
      </header>
      <header class="font-bold text-secondary">
        {{ school }}
      </header>
      <TimeAndLocation v-bind="{ timeInterval, location }" />
    </div>
    <div class="self-center border-l-2 pl-5 border-neutral flex flex-col items-center w-20">
      <p class="text-sm text-neutral">Grade</p>
      <div class="flex gap-1">
        <p class="text-secondary font-bold">{{ grade }}</p>
        <p>/</p>
        <p>{{ maxGrade }}</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import TimeAndLocation from './TimeAndLocation.vue'

export default {
  name: 'education-section',
  components: {
    TimeAndLocation
  },
  props: {
    degree: String,
    school: String,
    timeInterval: {
      default: {
        from: '',
        to: ''
      }
    },
    location: String,
    grade: Number,
    maxGrade: Number
  }
}
</script>
