<template>
  <div ref="form">
    <h5 class="mb-5">
       {{ isEdit ? 'Редактирование' : 'Добавление' }} записи
    </h5>
    <form class="max-w-sm mx-auto text-left">
    <div class="mb-5">
      <label
        for="name"
        class="block mb-2 text-sm font-medium text-gray-900"
      >
        Имя
      </label>
      <input
          v-model="data.name"
          type="text"
          id="name"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          required
      />
    </div>
    <div class="mb-5">
      <label
          for="phone"
          class="block mb-2 text-sm font-medium text-gray-900"
      >
        Телефон
      </label>
      <input
          v-model="data.phone"
          type="text"
          id="phone"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          required
      />
    </div>
    <div class="mb-5">
      <label
          for="email"
          class="block mb-2 text-sm font-medium text-gray-900"
      >
        Электронная почта
      </label>
      <input
          v-model="data.email"
          type="email"
          id="email"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          required
      />
    </div>
    <button @click="submitForm" type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">
      {{ isEdit ? 'Обновить' : 'Добавить' }}
    </button>
    <button @click="resetForm" type="reset" class="text-blue-800 hover:bg-blue-100 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">
      Очистить
    </button>
  </form>
  </div>
</template>

<script lang="ts" setup>
import {defineProps, PropType,defineEmits, computed} from 'vue'
import {editContact,createContact,UserType} from "@/api";

const props = defineProps({
  formData: {
    type: Object as PropType<UserType>,
    required: true
  } ,
  isEdit: Boolean
})

const emit = defineEmits([
  'on-update',
  'update:formData'
])

const data = computed<UserType>({
  get() { return props.formData },
  set(value) { emit('update:formData', value) }
})

const submitForm = () => {
  // if (typeof data.value.phone!=='number')
  //   return false
  if (!data.value.email.match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  ))
    return false
  if (props.isEdit) {
    editContact(data.value)
  } else {
    createContact(data.value)
  }
  emit('on-update')
}

const resetForm = () => {
  data.value = {
    id: null,
    name: '',
    phone: null,
    email: ''
  }
  emit('on-update')
}
</script>
