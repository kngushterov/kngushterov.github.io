<template>
  <div class="bg-primary text-white flex flex-col items-center min-h-screen">
    <HeaderComponent />
    <HomeView />
    <FooterComponent />
  </div>
</template>

<script lang="ts">
import FooterComponent from './components/FooterComponent.vue'
import HeaderComponent from './components/HeaderComponent.vue'
import HomeView from './views/HomeView.vue'

export default {
  name: 'app',
  components: {
    HeaderComponent,
    HomeView,
    FooterComponent
  }
}
</script>
