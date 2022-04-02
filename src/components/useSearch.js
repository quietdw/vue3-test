import { ref, watch } from 'vue'

export default function () {
  const searchValue = ref('')
  const resultlist = ref([])
  watch(
    searchValue,
    () => {
      setTimeout(() => {
        resultlist.value.push(Math.random(1, 5))
      }, 100)
    },
    { immediate: true }
  )
  return { searchValue, resultlist }
}
