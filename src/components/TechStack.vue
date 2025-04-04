<template>
  <div class="flex justify-between flex-col gap-3 xl:flex-row">
    <div class="flex flex-col gap-1">
      <h3 class="font-bold text-lg">Used in Production:</h3>
      <div class="columns-2 space-y-2 w-full">
        <p v-for="(tech, i) in prodTechStack" :key="i" :class="techStyles">
          {{ tech }}
        </p>
      </div>
    </div>
    <div class="bg-secondary rounded-3xl w-auto h-0.5 xl:h-auto xl:w-0.5"></div>
    <div class="flex flex-col gap-1">
      <h3 class="font-bold text-lg">Learned in Free Time:</h3>
      <div class="columns-2 space-y-2 w-full">
        <p
          v-for="(tech, i) in upskillTechStack"
          :key="i"
          class="font-bold text-primary h-fit rounded border-b-2"
        >
          {{ tech }}
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { prodTechStack, upskillTechStack } from '@/projects'

export default {
  name: 'tech-stack',
  data: () => {
    const techStyles = 'font-bold text-primary h-fit rounded border-b-2'

    return { prodTechStack, upskillTechStack, techStyles }
  }
}
</script>
