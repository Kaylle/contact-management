<template>
  <div class="flex items-center mb-5 gap-3">
    <input
        type="text"
        id="name"
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        required
        placeholder="Поиск"
        v-model="search"
    />
    <button @click="submitForm" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">
      Поиск
    </button>
  </div>
</template>

<script lang="ts" setup>
import {ref,defineEmits} from 'vue'

const search = ref('')

const emit = defineEmits([
    'filter'
])

const submitForm = () => {
  emit('filter', search.value)
}
</script>
