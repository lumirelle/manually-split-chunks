<!-- src > App.vue -->
<template>
	<div class="container">
    <p>Vue3 Project</p>
    <p class="text">count: {{ count }}</p>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const count = ref(1)
console.log('This is index.vue')
</script>

<style>
  .text {
    color: blue;
  }
</style>
