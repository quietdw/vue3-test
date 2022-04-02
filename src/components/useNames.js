import { ref, computed } from 'vue'

export default function () {
  const names = ref([])
  const nameCount = computed(() => {
    return names.value.length
  })
  const addName = () => {
    return names.value.push('xxx')
  }
  return { names, nameCount, addName }
}
