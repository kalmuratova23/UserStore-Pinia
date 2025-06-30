<script>
export default {}
</script>

<template>
  <div>
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
    </nav>

    <Transition name="route" mode="out-in">
      <router-view />
    </Transition>
  </div>
</template>

<style scoped>
.route-enter-active, .route-leave-active {
  transition: opacity 0.3s ease;
}
.route-enter-from, .route-leave-to {
  opacity: 0;
}
.route-enter-to, .route-leave-from {
  opacity: 1;
}

nav {
  margin: 20px 0;
  text-align: center;
}
router-link {
  margin: 0 10px;
  text-decoration: none;
}
</style>
