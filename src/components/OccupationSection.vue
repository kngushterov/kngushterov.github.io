<template>
  <div class="p-4">
    <header class="font-bold text-xl">
      {{ position }}
    </header>
    <header class="font-bold text-secondary">
      {{ company }}
    </header>
    <TimeAndLocation v-bind="{ timeInterval, location }" />
    <p>
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
    description: String,
    points: {
      type: Array,
      required: false
    }
  }
}
</script>
