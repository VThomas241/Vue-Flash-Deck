import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useStore = defineStore('store', () => {
  let decks:Array<Object> = [];

  return { decks }
})
