<template>
  <div v-if="loading">loading</div>
  <div v-else-if="error">ops!!!{{ error }}</div>
  <div class="hello" v-else>
    <h1>{{ msg }}</h1>
    <count />
    <hr />
    <name-count />
    <hr />
    <j-search :result="result" @search="handleSearch" />
  </div>
</template>

<script setup>
import Count from './Count'
import NameCount from './NameCount'
import JSearch from './Search'
import useLoading from './useLoading'
import { defineProps } from 'vue'

const api = async () => {
  return await fetch('http://192.168.158.142:9529/api/s?wd=1')
}
defineProps({
  msg: { type: String }
})
const { loading, error, result, createLoading } = useLoading(api)
const handleSearch = async () => {
  console.log('search')
  await createLoading()
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
