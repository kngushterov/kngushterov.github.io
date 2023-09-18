<template>
  <div>
    <div>
      <img class="h-7 w-7 float-left mr-2" :src="`/${icon}.svg`" />
      <header class="font-bold text-xl">
        {{ title }}
      </header>
    </div>
    <p class="text-justify">
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
