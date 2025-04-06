<template>
  <div
    class="w-11/12 sm:w-4/5 p-5 sm:p-10 bg-white text-black flex flex-col gap-4 lg:flex-row lg:gap-7 rounded-3xl border-8 border-secondary"
  >
    <div class="flex flex-col gap-4 lg:w-7/12">
      <AccordionComponent title="Work Experience">
        <OccupationSection v-for="(job, i) of work" :key="i" v-bind="job" />
      </AccordionComponent>
      <AccordionComponent title="Volunteering">
        <OccupationSection v-for="(job, i) of volunteering" :key="i" v-bind="job" />
      </AccordionComponent>
      <AccordionComponent title="Strengths">
        <StrengthSection v-for="(strength, i) in strengths" :key="i" v-bind="strength" />
      </AccordionComponent>
    </div>
    <div class="flex flex-col gap-4 lg:w-5/12">
      <AccordionComponent title="Technologies">
        <TechStack />
      </AccordionComponent>
      <AccordionComponent title="Projects">
        <ProjectSection v-for="(project, i) in projects" :key="i" v-bind="project" />
      </AccordionComponent>
      <AccordionComponent title="Education">
        <EducationSection v-for="(education, i) in educations" :key="i" v-bind="education" />
      </AccordionComponent>
      <AccordionComponent title="Reference Letter">
        <img src="/reference-letter.png" />
      </AccordionComponent>
    </div>
  </div>
</template>

<script lang="ts">
import AccordionComponent from '@/components/AccordionComponent.vue'
import EducationSection from '@/components/EducationSection.vue'
import OccupationSection from '@/components/OccupationSection.vue'
import ProjectSection from '@/components/ProjectSection.vue'
import StrengthSection from '@/components/StrengthSection.vue'
import TechStack from '@/components/TechStack.vue'
import { educations } from '@/educations'
import { volunteering, work } from '@/occupations'
import { projects } from '@/projects'
import { strengths } from '@/strengths'

export default {
  data: () => {
    return { work, volunteering, strengths, educations, projects }
  },
  name: 'home-view',
  components: {
    OccupationSection,
    AccordionComponent,
    StrengthSection,
    EducationSection,
    ProjectSection,
    TechStack
  }
}
</script>
