<script setup>
import { ref } from "vue";

let message = ref("hello world");
</script>

<template>
  <main>

    <p>{{ message }}</p>
    <p>
      <input type="text" v-model="message" />
    </p>
  </main>
</template>
