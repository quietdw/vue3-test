<template>
  请输入 <input type="text" v-model="searchValue" />
  <ul>
    <li v-for="(i, index) in resultlist" :key="index">{{ i }}</li>
  </ul>
  <hr />
  <button @click="handleSearch">搜索</button>
  <div v-for="(i, index) in result" :key="index">{{ i }}</div>
</template>

<script setup>
import useSearch from './useSearch'
import { defineProps, defineEmits } from 'vue'
defineProps({
  result: { type: Array, default: () => [] }
})

const { resultlist, searchValue } = useSearch()

const emit = defineEmits(['search'])
const handleSearch = () => {
  emit('search')
}
</script>

<style></style>
