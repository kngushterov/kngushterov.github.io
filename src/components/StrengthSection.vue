<template>
  <div>
    <div class="flex gap-2 items-center">
      <img class="h-8 w-8" :src="`/${icon}.svg`" />
      <header class="font-bold text-xl">
        {{ title }}
      </header>
    </div>
    <p>
      {{ description }}
    </p>
  </div>
</template>

<script lang="ts">
export default {
  name: 'strength-section',
  props: {
    icon: String,
    title: String,
    description: String
  }
}
</script>
