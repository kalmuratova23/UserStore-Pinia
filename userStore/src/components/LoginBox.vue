<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useUserStore } from '@/stores/user'

const user = useUserStore()
user.loadFromStorage()
const inputName = ref('')
const router = useRouter()

const handleLogin = () => {
  if (inputName.value.trim()) {
    user.login(inputName.value)
    router.push(`/profile/${inputName.value}`)
  }
}

const handleLogout = () => {
  user.logout()
  router.push('/')
}
</script>

<template>
  <div class="container">
    <h1>👋 Welcome!</h1>

    <div v-if="!user.isLoggedIn" class="login-form">
      <input v-model="inputName" placeholder="Enter your name" />
      <button @click="handleLogin">Sign In</button>
    </div>

    <div v-else class="profile-box">
      <p>Hello, <strong>{{ user.name }}</strong>!</p>
      <p>Status: 🔐 Logged In</p>
      <button @click="handleLogout">Logout</button>
    </div>
  </div>
</template>

<style scoped>
.container {
  max-width: 420px;
  margin: 80px auto;
  padding: 32px;
  border-radius: 16px;
  background: linear-gradient(145deg, #ffffff, #f0f0f0);
  box-shadow: 0 8px 24px rgba(0, 128, 128, 0.15);
  text-align: center;
  font-family: 'Segoe UI', sans-serif;
}

h1 {
  font-size: 28px;
  margin-bottom: 24px;
  color: teal;
}

.login-form input {
  padding: 12px;
  width: 80%;
  font-size: 16px;
  border-radius: 10px;
  border: 1px solid #ccc;
  margin-bottom: 16px;
  outline: none;
  transition: 0.3s;
}

.login-form input:focus {
  border-color: teal;
  box-shadow: 0 0 5px rgba(0, 128, 128, 0.3);
}

button {
  padding: 12px 24px;
  border-radius: 10px;
  background-color: teal;
  color: white;
  border: none;
  cursor: pointer;
  font-size: 15px;
  transition: 0.3s ease;
}

button:hover {
  background-color: #007777;
}

.profile-box {
  font-size: 18px;
  color: #333;
}

.profile-box strong {
  color: teal;
  font-weight: bold;
}
</style>
