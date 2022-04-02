<template>
  <h5>nameCount:{{ nameCount }}</h5>
  <button @click="addName">add name</button>
</template>

<script setup>
import useNames from './useNames'
const { addName, nameCount } = useNames()
</script>

<style></style>
