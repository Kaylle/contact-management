<template>
  <tr class="bg-white border-b hover:bg-gray-50">
    <td class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
      {{ userData.id }}
      {{ userData.name }}
    </td>
    <td class="px-6 py-4">
      +7 {{ userData.phone }}
    </td>
    <td class="px-6 py-4">
      {{ userData.email }}
    </td>
    <td class="px-6 py-4">
      <a @click="editItem" class="cursor-pointer font-medium text-blue-600 hover:underline">
        Редактировать
      </a>
    </td>
    <td class="px-6 py-4">
      <a @click="deleteItem" class="cursor-pointer font-medium text-red-600 hover:underline">
        Удалить
      </a>
    </td>
  </tr>
</template>

<script lang="ts" setup>
import {defineEmits, defineProps, PropType} from 'vue'
import {deleteContact,UserType} from "@/api";

const props = defineProps({
  userData: {
    type: Object as PropType<UserType>,
    required: true
  }
})

const emit = defineEmits([
  'on-update',
  'on-edit'
])

const editItem = () => {
  emit('on-edit', props.userData)
}

const deleteItem = () => {
  deleteContact(props.userData.id)
  emit('on-update')
}
</script>
