import type XtxGuess from '@/components/XtxGuess.vue'
import { ref } from 'vue'

export const useGuess = () => {
  const guessRef = ref<InstanceType<typeof XtxGuess>>()
  const onScrollToLower = () => {
    guessRef.value?.getGuessLikeList()
  }

  return {
    guessRef,
    onScrollToLower,
  }
}
