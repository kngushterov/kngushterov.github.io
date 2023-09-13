<template>
  <div
    class="w-4/5 p-10 bg-white text-black flex flex-col gap-4 md:flex-row md:gap-7 rounded-3xl border-8 border-secondary"
  >
    <div class="flex flex-col gap-4 md:w-7/12">
      <AccordionComponent title="Work Experience">
        <OccupationSection v-bind="digitalLights" />
      </AccordionComponent>
      <AccordionComponent title="Volunteering">
        <OccupationSection v-bind="telerikAcademy" />
      </AccordionComponent>
    </div>
    <div class="flex flex-col gap-4 md:w-5/12">
      <AccordionComponent title="Strengths">
        <div>
          <div>
            ALABALA Work Experience Work Experience Work Experience Work Experience Work Experience
            Work Experience Work Experience
          </div>
          <div>
            Work Experience Work Experience Work Experience Work Experience Work Experience Work
            Experience Work Experience Work Experience
          </div>
          <div>
            Work Experience Work Experience Work Experience Work Experience Work Experience Work
            Experience Work Experience Work Experience
          </div>
          <div>
            Work Experience Work Experience Work Experience Work Experience Work Experience Work
            Experience Work Experience Work Experience
          </div>
          <div>
            Work Experience Work Experience Work Experience Work Experience Work Experience Work
            Experience Work Experience Work Experience
          </div>
          <div>
            Work Experience Work Experience Work Experience Work Experience Work Experience Work
            Experience Work Experience Work Experience
          </div>
        </div>
      </AccordionComponent>
      <AccordionComponent title="Education">
        <div>
          <div>
            Work Experience Work Experience Work Experience Work Experience Work Experience Work
            Experience Work Experience Work Experience
          </div>
          <div>
            Work Experience Work Experience Work Experience Work Experience Work Experience Work
            Experience Work Experience Work Experience
          </div>
          <div>
            Work Experience Work Experience Work Experience Work Experience Work Experience Work
            Experience Work Experience Work Experience
          </div>
          <div>
            Work Experience Work Experience Work Experience Work Experience Work Experience Work
            Experience Work Experience Work Experience
          </div>
          <div>
            Work Experience Work Experience Work Experience Work Experience Work Experience Work
            Experience Work Experience Work Experience
          </div>
        </div>
      </AccordionComponent>
    </div>
  </div>
</template>

<script lang="ts">
import AccordionComponent from '@/components/AccordionComponent.vue'
import OccupationSection from '@/components/OccupationSection.vue'
import { digitalLights, telerikAcademy } from '../occupations'

export default {
  data: () => {
    return { digitalLights, telerikAcademy }
  },
  name: 'home-view',
  components: { OccupationSection, AccordionComponent }
}
</script>
