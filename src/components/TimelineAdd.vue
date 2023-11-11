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
                            class="w-full max-w-xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                            <DialogTitle as="h3" class="text-lg font-medium leading-6 text-gray-900">
                                {{ 'Write Your Timeline' }}
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
                                                        class="block text-sm font-medium leading-6 text-gray-900">Date</label>
                                                    <div class="mt-2">
                                                        <input type="date" v-model="postForm.date"
                                                            class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                                    </div>
                                                </div>
                                                <div class="sm:col-span-3">
                                                    <label for="country"
                                                        class="block text-sm font-medium leading-6 text-gray-900">Topic</label>
                                                    <div class="mt-2">
                                                        <select v-model="postForm.topic_tags"
                                                            class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6">
                                                            <option v-for="item of topic_tags" :key="item.value"
                                                                :value="item.value">{{ item.name }}</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div class="sm:col-span-full">
                                                    <div class="mt-2">
                                                        <div class="">
                                                            <label for="first-name"
                                                                class="block text-sm font-medium leading-6 text-gray-900">Title</label>
                                                            <div class="mt-2">
                                                                <input type="text" v-model="postForm.title" v-bind="title"
                                                                    class="block w-full rounded-md border-0 py-2.5 text-gray-900 font-bold shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div class="col-span-full">
                                                    <label for="about"
                                                        class="block text-sm font-medium leading-6 text-gray-900">Context</label>
                                                    <div class="mt-2">
                                                        <textarea rows="5" v-model="postForm.context"
                                                            class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                                    </div>
                                                    <p class="mt-3 text-sm leading-6 text-gray-600">Write a your context
                                                        here.
                                                    </p>
                                                </div>
                                                <div class="col-span-full">

                                                    <div class="flex items-center justify-center w-full">
                                                        <label for="dropzone-file"
                                                            class="flex flex-col items-center justify-center w-full h-42 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                                                            <div
                                                                class="flex flex-col items-center justify-center pt-5 pb-6">
                                                                <svg class="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                                                                    aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                                                    fill="none" viewBox="0 0 20 16">
                                                                    <path stroke="currentColor" stroke-linecap="round"
                                                                        stroke-linejoin="round" stroke-width="2"
                                                                        d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
                                                                </svg>
                                                                <p class="mb-2 text-sm text-gray-500 dark:text-gray-400">
                                                                    <span class="font-semibold">Click to upload</span> or
                                                                    drag and drop
                                                                </p>
                                                                <p class="text-xs text-gray-500 dark:text-gray-400">SVG,
                                                                    PNG, JPG or GIF (MAX. 800x400px)</p>
                                                            </div>
                                                            <input id="dropzone-file" type="file" class="hidden"
                                                                v-on:change="handleFileChange" multiple />
                                                        </label>
                                                    </div>
                                                </div>
                                                <div class="sm:col-span-3">
                                                    <label for="country"
                                                        class="block text-sm font-medium leading-6 text-gray-900">visibility<span
                                                            class="text-red-700">*</span></label>
                                                    <div class="mt-2">
                                                        <select required v-model="postForm.visibility"
                                                            class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6">
                                                            <option v-for="item of visibilityOptions" :key="item.value"
                                                                :value="item.value">{{ item.name }}</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div class="sm:col-span-4" v-if="postForm.visibility === '2'">
                                                    <div class="mt-2">
                                                        <div class="sm:col-span-3">
                                                            <label for="first-name"
                                                                class="block text-sm font-medium leading-6 text-gray-900">More
                                                                Visibles</label>
                                                            <div class="mt-2">
                                                                <input type="text" v-model="postForm.allowed_visibles"
                                                                    required
                                                                    class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                                            </div>
                                                            <p class="mt-1 text-xs leading-6 text-gray-600">Add commas for
                                                                multiple mails
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
                                        <button type="button" @click="submit()"
                                            class="flex rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                                            Save
                                            <div v-if="submitLoader" role="status">
                                                <svg aria-hidden="true"
                                                    class="w-4 h-5 mx-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                                                    viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                                                        fill="currentColor" />
                                                    <path
                                                        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                                                        fill="currentFill" />
                                                </svg>
                                                <span class="sr-only">Loading...</span>
                                            </div>
                                        </button>
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
// import { PhotoIcon } from '@heroicons/vue/24/solid'
import {
    TransitionRoot,
    TransitionChild,
    Dialog,
    DialogPanel,
    DialogTitle,
} from '@headlessui/vue'
import { useForm } from 'vee-validate';
import { ref, onMounted } from 'vue'
import { submitTimeline, updateFiles } from '../services/timeline.posts';
import { useRoute } from 'vue-router';
import { timelineImageUpload } from '../services/storage.files';
import * as yup from 'yup';

const route = useRoute()
const emits = defineEmits(['close-modal'])
const props = defineProps(['editData'])
const topic_tags = ref([
    { name: 'Life', value: 'life' },
    { name: 'Career', value: 'career' },
    { name: 'Relegion', value: 'relegion' },
])
const visibilityOptions = ref([{ name: 'Anonymous', value: '3' }, { name: 'afnan-shakeel and more', value: '2' }, { name: 'afnan-shakeel', value: '1' }])
const { defineInputBinds, setFieldValue, setValues, resetForm } = useForm({
    initialValues: {
        id: yup.number().nullable(),
        topic_tags: yup.string().nullable(),
        title: yup.string().nullable(),
        context: yup.string().nullable(),
        created_at: yup.string().nullable(),
        visibility: yup.string().nullable(),
        allowed_visibles: yup.string().nullable(),
        files: yup.array().of(yup.object().shape({ file: yup.object(), file_url: yup.string().nullable() })).nullable()
    },
});

const postForm = ref({
    id: null,
    topic_tags: null,
    title: null,
    context: null,
    created_at: null,
    visibility: null,
    allowed_visibles: null,
    files: []
})
const submitLoader = ref(false)

onMounted(() => {
    // postForm
    initData()
})

const title = defineInputBinds('title');
const initData = () => {
    console.log('looking for edit data', props.editData)
    if(props.editData && props.editData.id){
        setValues(
            {
                id: (props.editData && props.editData.id) || null,
                topic_tags: (props.editData && props.editData.topic_tags) || null,
                title: (props.editData && props.editData.title) || null,
                context: (props.editData && props.editData.context) || '',
                created_at: (props.editData && props.editData.created_at) || new Date(),
                visibility: (props.editData && props.editData.visibility) || null,
                allowed_visibles: (props.editData && props.editData.allowed_visibles) || null,
                files: (props.editData && props.editData.files) || []
            }
        )
    }
    if (route.path == '/palestine-israel-timeline') {
        topic_tags.value = [
            { name: 'Palestine Israel Conflict', value: 'palestine-israel' },
            { name: 'Ottoman Empire', value: 'ottoman-empire' },
            { name: 'Mughal Empire', value: 'mughal-empire' },
        ]
        setFieldValue('visibility', '3')
        setFieldValue('topic_tags', 'palestine-israel')
    }
}

const closeModal = () => {
    resetForm()
    emits('close-modal')
}
// gs://asxvec.appspot.com/images/timeline/Screenshot 2023-09-04 115724.png
const submit = async () => {
    submitLoader.value = true
    console.log(postForm.value)
    if (!postForm.value.visibility) return
    const resId = await submitTimeline(postForm.value).catch((err: any) => {
        console.error(err)
    })
    console.log("doc id", resId)

    for (var [index, file] of postForm.value.files.entries()) {

        var blob = new Blob([file.file], { type: file.type });
        let filename = resId + "_" + postForm.value.date + "_" + String(index + 1) + ".jpg"
        var newFile = new File([blob], filename);

        var upload = await timelineImageUpload(newFile, { topic_tags: postForm.value.topic_tags, timeline_date: postForm.value.date })
        console.log('=', upload)
        if (!upload) { console.error("upload failed"); return; }
        postForm.value.files[index] = upload
    }

    await updateFiles(resId, postForm.value.files).catch((error) => console.error(error))
    submitLoader.value = false
    closeModal()
    // closeModal()
}

async function handleFileChange(event: any) {
    let files: File[] = event.target.files;
    for (let item of files) {
        postForm.value.files.push({ file: item, file_url: null })
    }
    console.log(postForm.value.files.length)
}
</script>