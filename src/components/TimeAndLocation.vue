<template>
  <div class="flex gap-8">
    <div :class="divStyles">
      <img :class="imgStyles" src="../../public/calendar.svg" />
      <p :class="pStyles">{{ timeInterval.from }} - {{ timeInterval.to }}</p>
    </div>
    <div :class="divStyles">
      <img :class="imgStyles" src="../../public/location.svg" />
      <p :class="pStyles">{{ location }}</p>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  data: () => {
    return {
      divStyles: 'flex gap-1',
      imgStyles: 'h-3 w-3 self-center',
      pStyles: 'text-sm text-neutral'
    }
  },
  name: 'time-and-location',
  props: {
    timeInterval: {
      default: {
        from: '',
        to: ''
      }
    },
    location: String
  }
}
</script>
