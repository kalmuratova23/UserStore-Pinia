<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import ProfileInfo from '@/components/ProfileInfo.vue'
import ProfileSettings from '@/components/ProfileSettings.vue'

const route = useRoute()
const username = route.params.username

const selectedTab = ref('ProfileInfo')

const tabs = {
    ProfileInfo,
    ProfileSettings
}

</script>

<template>
  <div class="container">
    <h1>Profile Page</h1>
    <p>Name: <strong>{{ username }}</strong>!</p>
    <router-link to="/">🔙 Go Home</router-link>

    <div class="tab-buttons">
    <button @click="selectedTab = 'ProfileInfo'"> Information </button>
    <button @click="selectedTab = 'ProfileSettings'"> Parameters </button>
    </div>

    <Transition name="fade" mode="out-in">
    <component :is="tabs[selectedTab]"/>
    </Transition>
  </div>
</template>

<style scoped>
.container {
  max-width: 400px;
  margin: 60px auto;
  font-family: sans-serif;
  text-align: center;
}
.tab-buttons{
  margin: 20px 0;
}
button{
  margin: 0 10px;
  padding: 8px 16px;
  background-color: teal;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
}
button:hover{
  background-color: #006666;
}
.fade-enter-active, .fade-leave-active{
  transition: opacity .4s;
}
.fade-enter-from, .fade-leave-to{
  opacity: 0;
}
.fade-enter-to, .fade-leave-from{
  opacity: 1;
}

</style>
