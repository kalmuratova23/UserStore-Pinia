<script setup>
import { useRoute } from 'vue-router'

const route = useRoute()
const username = route.params.username
</script>

<template>
  <div>
    <h1>Profile Page</h1>
    <p>Name: {{ username }}</p>
  </div>
</template>
