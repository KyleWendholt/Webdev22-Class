<template>
  <div class="buttons" v-if="session.user == null">
    <RouterLink class="button is-light" to="login">
      Log in
    </RouterLink>
  </div>
  <div v-else>Welcome{{}}</div>
</template>

<script setup lang="ts">
import { RouterLink } from "vue-router";
import session, { login } from "../stores/session";
</script>

<style scoped></style>
