<template>
  <aside id="default-sidebar" class="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
    <div class="h-full px-3 py-4 overflow-y-auto bg-gray-50">
      <ul class="space-y-2 font-medium">
        <ContactForm
            v-model:form-data="formData"
            :is-edit="isEdit"
            @on-update="onUpdate"
        />
      </ul>
    </div>
  </aside>
  <div class="p-4 sm:ml-64">
    <div class="p-4 border-2 border-gray-200 border-dashed rounded-lg">
      <SearchBar
        @filter="filterData"
      />
      <ContactList
          :table-data="tableData"
          @on-edit="onEdit"
          @on-update="onUpdate"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import {ref,onMounted} from 'vue'
import { getContactsList, UserType } from "@/api";
import ContactList from './components/ContactList.vue';
import ContactForm from "@/components/ContactForm.vue";
import SearchBar from "@/components/SearchBar.vue";

const formData = ref({
  id: null,
  name: '',
  phone: null,
  email: '',
} as UserType )

const isEdit = ref(false)
const tableData = ref([] as UserType[])

const onEdit = (data: UserType) => {
  isEdit.value = true
  formData.value = data
  tableData.value = getContactsList()
}

const filterData = (val:string) => {
  console.log(val)
}

const onUpdate = () => {
  formData.value = {
    id: null,
    name: '',
    phone: null,
    email: '',
  }
  isEdit.value = false
  tableData.value = getContactsList()
}

onMounted(() => {
  tableData.value = getContactsList()
})
</script>
