<template>
  <div>
    <header class="font-bold text-xl">
      {{ position }}
    </header>
    <header class="font-bold text-secondary">
      {{ company }}
    </header>
    <TimeAndLocation v-bind="{ timeInterval, location }" />
    <div class="mt-1">
      <p v-for="(text, i) in description" :key="i" class="text-justify">
        {{ text }}
      </p>
    </div>
    <div v-if="Boolean(points)">
      <li v-for="(point, i) in points" :key="i" class="text-justify">
        {{ point }}
      </li>
    </div>
  </div>
</template>

<script lang="ts">
import TimeAndLocation from './TimeAndLocation.vue'

export default {
  name: 'work-experience',
  components: {
    TimeAndLocation
  },
  props: {
    position: String,
    company: String,
    timeInterval: {
      default: {
        from: '',
        to: ''
      }
    },
    location: String,
    description: Array,
    points: {
      type: Array,
      required: false
    }
  }
}
</script>
