<template>
  <div>
    <header class="font-bold text-xl">
      {{ title }}
    </header>
    <div>
      <TimeAndLocation v-bind="{ timeInterval, location }" />
      <div v-if="link" class="flex gap-1">
        <img class="h-3 w-3 self-center" src="/link.svg" />
        <a
          class="text-sm text-secondary font-bold underline"
          target="_blank"
          :href="`https://${link}`"
          >{{ link }}</a
        >
      </div>
    </div>
    <p class="mt-1">
      {{ description }}
    </p>
    <div v-if="Boolean(points)">
      <li v-for="(point, i) in points" :key="i">
        {{ point }}
      </li>
    </div>
  </div>
</template>

<script lang="ts">
import TimeAndLocation from './TimeAndLocation.vue'

export default {
  name: 'project-section',
  components: {
    TimeAndLocation
  },
  props: {
    title: String,
    timeInterval: {
      default: {
        from: '',
        to: ''
      }
    },
    location: String,
    link: String,
    description: String,
    points: {
      type: Array,
      required: false
    }
  }
}
</script>
