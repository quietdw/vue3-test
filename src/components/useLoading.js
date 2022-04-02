import { ref } from 'vue'

export default function (fn) {
  const loading = ref(false)
  const error = ref(false)
  const result = ref(null)

  const createLoading = async (...args) => {
    loading.value = true
    error.value = false
    result.value = null
    try {
      await fn(...args)
      result.value = new Array(5).fill(Math.random())
      loading.value = false
    } catch (e) {
      loading.value = false
      error.value = e
    }
  }

  return {
    loading,
    error,
    result,
    createLoading
  }
}
