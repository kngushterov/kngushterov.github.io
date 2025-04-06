import { computed, ref } from 'vue'

export const accordionsOpenState = ref<{ [key: string]: boolean }>({
  'Work Experience': true,
  Volunteering: true,
  Strengths: true,
  Technologies: true,
  Projects: true,
  Education: true,
  'Reference Letter': false
})

export const areMostAccordionsOpen = computed(() => {
  const openCount = Object.values(accordionsOpenState.value).filter((open) => open).length
  return openCount >= Object.keys(accordionsOpenState.value).length / 2
})

export const toggleAccordion = (accordion: string) => {
  accordionsOpenState.value[accordion] = !accordionsOpenState.value[accordion]
}

const foldAll = () => {
  for (const key in accordionsOpenState.value) {
    accordionsOpenState.value[key] = false
  }
}

const unfoldAll = () => {
  for (const key in accordionsOpenState.value) {
    accordionsOpenState.value[key] = true
  }
}

export const toggleAllAccordions = () => {
  if (areMostAccordionsOpen.value) {
    foldAll()
  } else {
    unfoldAll()
  }
}
