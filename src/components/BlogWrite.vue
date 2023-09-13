<!--
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
-->
<template>
    <TransitionRoot appear :show="true" as="template">
        <Dialog as="div" class="relative z-10">
            <TransitionChild as="template" enter="duration-300 ease-out" enter-from="opacity-0" enter-to="opacity-100"
                leave="duration-200 ease-in" leave-from="opacity-100" leave-to="opacity-0">
                <div class="fixed inset-0 bg-black bg-opacity-25" />
            </TransitionChild>

            <div class="fixed inset-0 overflow-y-auto">
                <div class="flex min-h-full items-center justify-center p-4 text-center">
                    <TransitionChild as="template" enter="duration-300 ease-out" enter-from="opacity-0 scale-95"
                        enter-to="opacity-100 scale-100" leave="duration-200 ease-in" leave-from="opacity-100 scale-100"
                        leave-to="opacity-0 scale-95">
                        <DialogPanel
                            class="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                            <DialogTitle as="h3" class="text-lg font-medium leading-6 text-gray-900">
                                {{ 'Write Your Post' }}
                            </DialogTitle>
                            <div class="mt-2">
                                <form>
                                    <div class="space-y-12">
                                        <div class="border-b border-gray-900/10 pb-12">
                                            <h2 class="text-base font-semibold leading-7 text-gray-900">Greetings {{
                                                'afnan-shakeel' }}</h2>
                                            <p class="mt-1 text-sm leading-6 text-gray-600">Happy to see you again !</p>

                                            <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">

                                                <div class="sm:col-span-3">
                                                    <label for="country"
                                                        class="block text-sm font-medium leading-6 text-gray-900">Topic</label>
                                                    <div class="mt-2">
                                                        <select 
                                                            v-model="postForm.topic_tags"
                                                            class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6">
                                                            <option v-for="item of topic_tags" :key="item.value" :value="item.value">{{item.name}}</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div class="sm:col-span-4">
                                                    <div class="mt-2">
                                                        <div class="sm:col-span-3">
                                                            <label for="first-name"
                                                                class="block text-sm font-medium leading-6 text-gray-900">Title</label>
                                                            <div class="mt-2">
                                                                <input type="text" v-model="postForm.title"
                                                                    class="block w-full rounded-md border-0 py-2.5 text-gray-900 font-bold shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div class="col-span-full">
                                                    <label for="about"
                                                        class="block text-sm font-medium leading-6 text-gray-900">Context</label>
                                                    <div class="mt-2">
                                                        <textarea rows="5"
                                                            v-model="postForm.context"
                                                            class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                                    </div>
                                                    <p class="mt-3 text-sm leading-6 text-gray-600">Write a your post here.
                                                    </p>
                                                </div>
                                                <div class="col-span-full">
                                                    <label for="cover-photo"
                                                        class="block text-sm font-medium leading-6 text-gray-900">Cover
                                                        photo</label>
                                                    <div
                                                        class="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-6">
                                                        <div class="text-center">
                                                            <PhotoIcon class="mx-auto h-12 w-12 text-gray-300"
                                                                aria-hidden="true" />
                                                            <div class="mt-4 flex text-sm leading-6 text-gray-600">
                                                                <label for="file-upload"
                                                                    class="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500">
                                                                    <span>Upload a file</span>
                                                                    <input
                                                                        class="sr-only" />
                                                                </label>
                                                                <p class="pl-1">or drag and drop</p>
                                                            </div>
                                                            <p class="text-xs leading-5 text-gray-600">PNG, JPG, GIF up to
                                                                10MB</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="sm:col-span-3">
                                                    <label for="country"
                                                        class="block text-sm font-medium leading-6 text-gray-900">visibility<span class="text-red-700">*</span></label>
                                                    <div class="mt-2">
                                                        <select required 
                                                            v-model="postForm.visibility"
                                                            class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6">
                                                            <option v-for="item of visibilityOptions" :key="item.value" :value="item.value">{{item.name}}</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div class="sm:col-span-4" v-if="postForm.visibility === '2'">
                                                    <div class="mt-2">
                                                        <div class="sm:col-span-3">
                                                            <label for="first-name"
                                                                class="block text-sm font-medium leading-6 text-gray-900">More Visibles</label>
                                                            <div class="mt-2">
                                                                <input type="text" v-model="postForm.allowed_visibles" required
                                                                    class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                                            </div>
                                                            <p class="mt-1 text-xs leading-6 text-gray-600">Add commas for multiple mails
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="mt-6 flex items-center justify-end gap-x-6">
                                        <button type="button" @click="closeModal()"
                                            class="text-sm font-semibold leading-6 text-gray-900">Cancel</button>
                                        <button type="submit" @click="submit()"
                                            class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Save</button>
                                    </div>
                                </form>
                            </div>
                        </DialogPanel>
                    </TransitionChild>
                </div>
            </div>
        </Dialog>
    </TransitionRoot>
</template>
  
<script setup lang="ts">
import { PhotoIcon } from '@heroicons/vue/24/solid'
import {
    TransitionRoot,
    TransitionChild,
    Dialog,
    DialogPanel,
    DialogTitle,
} from '@headlessui/vue'
import { ref, onMounted } from 'vue'
import { submitPosts } from '../services/blog.posts';

const emits = defineEmits(['close-modal'])
const props = defineProps(['editData'])
const topic_tags = ref([
    {name:'Life', value:'life'},
    {name:'Career', value:'career'},
    {name:'Relegion', value:'relegion'},
])
const visibilityOptions = ref([{name:'Anonymous', value:'3'},{name:'afnan-shakeel and more', value:'2'},{name:'afnan-shakeel', value:'1'}])

const postForm = ref()


onMounted(() => {
    // postForm
    initData()
})

const initData = () => {
    console.log('looking for edit data', props.editData)
    postForm.value = {
        id: (props.editData && props.editData.id) || null,
        topic_tags: (props.editData && props.editData.topic_tags) || null,
        title: (props.editData && props.editData.title) || null,
        context: (props.editData && props.editData.context) || '',
        created_at: (props.editData && props.editData.created_at) || new Date(),
        visibility: (props.editData && props.editData.visibility) || null,
        allowed_visibles: (props.editData && props.editData.allowed_visibles) || null,
    }
}

const closeModal = () => {
    postForm.value = {}
    emits('close-modal')
}

const submit = async () => {
    console.log(postForm.value)
    if(!postForm.value.visibility || postForm.value.visibility=="") return
    const addRes = await submitPosts(postForm.value)
    if (addRes.message == 'success') {
        console.log(addRes.data)
    }
    closeModal()
}
</script>