<template>
  <div class="buttons" v-if="session.user == null">
    <a class="button is-light" @click="login('Kyle', 'Wendholt')">
    Log in
  </a>
  </div>
  <div v-else>
    Welcome{{}}
  </div>
</template>

<script setup lang="ts">
  import session,{ login } from '../stores/session';
</script>

<style scoped>

</style>