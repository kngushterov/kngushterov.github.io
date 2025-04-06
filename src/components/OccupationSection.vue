<template>
  <div class="text-justify">
    <header class="font-bold text-xl text-start">
      {{ position }}
    </header>
    <header class="font-bold text-secondary text-start">
      {{ company }}
    </header>
    <div>
      <p v-for="(text, i) in description" :key="i" class="italic">
        {{ text }}
      </p>
    </div>
    <TimeAndLocation v-bind="{ timeInterval, location }" />
    <div class="pt-2" v-if="Boolean(points)">
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
    description: Array,
    points: {
      type: Array,
      required: false
    }
  }
}
</script>
