<template>
  <div>
    <form class="box" @submit.prevent="login(name,email,password)">
      <div class="field">
        <label class="label">Name</label>
        <div class="control">
          <input class="input" type="email" placeholder="Firstname Lastname" v-model="name" />
        </div>
      </div>
      <div class="field">
        <label class="label">Email</label>
        <div class="control">
          <input class="input" type="email" placeholder="email@example.com" v-model ="email" />
        </div>
      </div>
      <div class="field">
        <label class="label">Password</label>
        <div class="control">
          <input class="input" type="password" placeholder="********" v-model="password" />
        </div>
      </div>

      <button class="button is-primary">Sign in</button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { login } from "@/stores/session";
import { ref } from "vue";

const name = ref("");
const password = ref("");
const email = ref("");
</script>
<style scoped></style>
