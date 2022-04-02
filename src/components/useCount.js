import { ref } from 'vue'

export default function useCount() {
  const count = ref(0)
  const addCount = () => {
    count.value++
  }
  return { count, addCount }
}
