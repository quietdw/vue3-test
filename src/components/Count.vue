<template>
  <h5>count:{{ count }}</h5>
  <button @click="addCount">+1</button>
</template>

<script setup>
import useCount from './useCount'
const { addCount, count } = useCount()
</script>

<style></style>
