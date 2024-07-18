<template>
  <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table class="w-full text-sm text-left rtl:text-right text-gray-500">
      <thead class="text-xs text-gray-700 uppercase bg-gray-50">
      <tr>
        <th class="px-6 py-3">Имя</th>
        <th class="px-6 py-3">Телефон</th>
        <th class="px-6 py-3">Эл. почта</th>
        <th class="px-6 py-3"/>
        <th class="px-6 py-3"/>
      </tr>
      </thead>
      <tbody>
      <Transition
          v-for="item in tableData"
          :key="item"
      >
        <ContactItem
            @on-update="onUpdate"
            @on-edit="onEdit"
            :user-data="item"
        />
      </Transition>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts" setup>
import ContactItem from "@/components/ContactItem.vue";
import {defineEmits, defineProps, PropType} from 'vue'
import {UserType} from "@/api";

defineProps({
  tableData: Array as PropType<UserType[]>
})

const emit = defineEmits([
    'on-update',
    'on-edit'
])

const onUpdate = () => {
  emit('on-update')
}

const onEdit = (data:UserType) => {
  emit('on-edit', data)
}
</script>