<template>
  <div class="bg-sky-800 text-white h-screen flex flex-col items-center">
    <HeaderComponent />
    <NavBar />
    <HomeView />
  </div>
</template>

<script lang="ts">
import HeaderComponent from './components/HeaderComponent.vue'
import NavBar from './components/NavBar.vue'
import HomeView from './views/HomeView.vue'

export default {
  name: 'app',
  components: {
    HeaderComponent,
    NavBar,
    HomeView
  }
}
</script>
