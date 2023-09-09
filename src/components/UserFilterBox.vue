<template>
    <div class="min-w-screen bg-white rounded shadow-sm p-7">
        <div class="grid grid-cols-4 gap-4">
            <div class="sm:col-span-3 md:col-span-2 lg:col-span-2 xl:col-span-1">
                <label for="first-name" class="block text-sm font-medium leading-6 text-gray-900">ID</label>
                <div class="mt-1">
                    <input type="text" name="first-name" id="first-name" autocomplete="given-name" v-model="filterForm.id"
                        class="block w-full rounded-md border-0 py-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                </div>
            </div>
            <div class="sm:col-span-3 md:col-span-2 lg:col-span-2 xl:col-span-1">
                <label for="first-name" class="block text-sm font-medium leading-6 text-gray-900">User Name</label>
                <div class="mt-1">
                    <input type="text" name="first-name" id="first-name" autocomplete="given-name" v-model="filterForm.username"
                        class="block w-full rounded-md border-0 py-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                </div>
            </div>
            <div class="sm:col-span-3 md:col-span-2 lg:col-span-2 xl:col-span-1">
                <label for="first-name" class="block text-sm font-medium leading-6 text-gray-900">Email</label>
                <div class="mt-1">
                    <input type="text" name="first-name" id="first-name" autocomplete="given-name"
                        class="block w-full rounded-md border-0 py-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                </div>
            </div>
            <div class="sm:col-span-3 md:col-span-2 lg:col-span-2 xl:col-span-1">
                <label for="first-name" class="block text-sm font-medium leading-6 text-gray-900">Mobile</label>
                <div class="mt-1">
                    <input type="number" name="first-name" id="first-name" autocomplete="given-name"
                        class="block w-full rounded-md border-0 py-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                </div>
            </div>
            <div class="sm:col-span-3 md:col-span-2 lg:col-span-2 xl:col-span-1">
                <label for="first-name" class="block text-sm font-medium leading-6 text-gray-900">Date of Birth</label>
                <div class="mt-1">
                    <input type="text" name="first-name" id="first-name" autocomplete="given-name"
                        class="block w-full rounded-md border-0 py-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                </div>
            </div>
            <div class="sm:col-span-3 md:col-span-2 lg:col-span-2 xl:col-span-1">
                <label for="country" class="block text-sm font-medium leading-6 text-gray-900">Country</label>
                <div class="mt-1">
                    <select id="country" name="country" autocomplete="country-name"
                        class="block w-full rounded-md border-0 py-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6">
                        <option>United States</option>
                        <option>Canada</option>
                        <option>Mexico</option>
                    </select>
                </div>
            </div>
            <div class="sm:col-span-3 md:col-span-2 lg:col-span-2 xl:col-span-1">
                <label for="country" class="block text-sm font-medium leading-6 text-gray-900">Status</label>
                <div class="mt-1">
                    <select id="country" name="country" autocomplete="country-name" v-model="filterForm.status"
                        class="block w-full rounded-md border-0 py-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6">
                        <option></option>
                        <option value="ACTIVE">Active</option>
                        <option value="INACTIVE">INACTIVE</option>
                    </select>
                </div>
            
            </div>
            <div class="mt-6 flex items-center justify-end gap-x-6">
                <button type="button" class="text-sm font-semibold leading-6 text-gray-900">Reset</button>
                <button type="submit" @click="submit()"
                    class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Search</button>
            </div>
        </div>
        
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const filterForm = ref({
    id: null,
    username: '',
    status: ''
})

const submit = ()=>{
    console.log(filterForm.value)
}

</script>

<style></style>