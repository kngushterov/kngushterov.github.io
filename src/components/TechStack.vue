<template>
  <div class="columns-2 space-y-3 xl:columns-3">
    <p
      v-for="(tech, i) in techStack"
      :key="i"
      class="border-2 border-secondary font-bold text-primary h-fit rounded text-center hover:cursor-default hover:bg-primary hover:text-white"
    >
      {{ tech }}
    </p>
  </div>
</template>

<script lang="ts">
import { techStack } from '@/projects'

export default {
  name: 'tech-stack',
  data: () => {
    return { techStack }
  }
}
</script>
