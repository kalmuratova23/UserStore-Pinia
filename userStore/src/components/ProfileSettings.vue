<script setup>

</script>

<template>
  <div class="settings">
    <h2>⚙️ Settings</h2>
    <ul>
      <li>🌐 Change Language</li>
      <li>🔑 Change Password</li>
      <li>📧 Update Email</li>
      <li>🚪 Logout Preferences</li>
    </ul>
  </div>
</template>

<style scoped>
.settings {
  background-color: #fdfdfd;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 4px 16px rgba(0,0,0,0.05);
  margin-top: 20px;
}
h2 {
  color: teal;
  margin-bottom: 16px;
}
ul {
  list-style: none;
  padding: 0;
}
li {
  margin: 8px 0;
  font-size: 16px;
  position: relative;
  padding-left: 12px;
}
li::before {
  content: '•';
  color: teal;
  position: absolute;
  left: 0;
}
</style>
