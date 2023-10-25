<template>
    <div
        class="bg-sky-100 bg-opacity-20  dark:bg-white dark:bg-opacity-0 dark:sm:bg-opacity-5 py-16 sm:py-16 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm">
        <div class="mx-auto max-w-7xl px-6 lg:px-8">
            <div class="mx-auto max-w-2xl lg:mx-0">
                <h2 class="text-3xl font-bold tracking-tight text-sky-800 dark:text-gray-300 sm:text-4xl">Timeline from the
                    of Palestine Israel conflict</h2>
                <p class="mt-2 text-lg leading-8 text-gray-600">Detailing the timeline of events that occured from the beginining of 1900</p>
            </div>
            <div class="flex justify-between my-10">
                <!-- <div class="">
                    <button type="button"
                        class="px-4 py-1.5 text-sm font-medium rounded-md ring-sky-900 dark:ring-black hover:ring-sky-600 dark:hover:ring-black ring-2 bg-sky-200  hover:bg-sky-600 bg-opacity-30 text-sky-900 dark:bg-opacity-10 dark:text-gray-300 dark:hover:bg-black hover:text-white dark:hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
                        Filter Timeline</button>
                </div> -->
                <Menu>
                    <div>
                        <MenuButton>
                            <button
                                class="inline-flex w-full justify-center rounded-md px-3 py-2 text-sm font-medium z-10 ring-sky-900 dark:ring-black hover:ring-sky-600 dark:hover:ring-black ring-2 bg-sky-200  hover:bg-sky-600 bg-opacity-30 text-sky-900 dark:bg-opacity-10 dark:text-gray-300 dark:hover:bg-black hover:text-white dark:hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
                                {{ 'Filter Timeline' }}
                                <ChevronDownIcon class="ml-2 -mr-1 h-5 w-5 text-violet-200 hover:text-violet-100"
                                    aria-hidden="true" />
                            </button>
                        </MenuButton>
                        <transition enter-active-class="transition duration-100 ease-out"
                            enter-from-class="transform scale-95 opacity-0" enter-to-class="transform scale-100 opacity-100"
                            leave-active-class="transition duration-75 ease-in"
                            leave-from-class="transform scale-100 opacity-100"
                            leave-to-class="transform scale-95 opacity-0">
                            <MenuItems
                                class="absolute mt-2 w-32 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-10">
                                <div class="px-1 py-1">
                                    <MenuItem v-for="item of topic_tags" :key="item.value">
                                    <button @click="filterTimeline(item)" :class="['bg-sky-100 text-gray-900 bg-opacity-10 hover:bg-opacity-40  hover:text-sky-800', 'dark:bg-green-100 dark:bg-opacity-10 dark:hover:bg-opacity-40 dark:text-green-950',
                                        'group flex w-full items-center rounded-md px-2 py-2 text-sm',]" tabindex="-1">
                                        {{ item.name }} </button>
                                    </MenuItem>
                                </div>
                            </MenuItems>
                        </transition>
                    </div>
                </Menu>
                <div class="">
                    <button @click="toggleAddModal(true)" type="button"
                        class="px-4 py-1.5 text-sm font-medium rounded-md ring-sky-900 dark:ring-black hover:ring-sky-600 dark:hover:ring-black ring-2 bg-sky-200  hover:bg-sky-600 bg-opacity-30 text-sky-900 dark:bg-opacity-10 dark:text-gray-300 dark:hover:bg-black hover:text-white dark:hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
                        Add a New Time</button>
                </div>
            </div>

            <ol class="relative border-l border-gray-200 dark:border-gray-700">
                <li class="mb-10 ml-6">
                    <span
                        class="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                        <svg class="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path
                                d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                        </svg>
                    </span>
                    <h3 class="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">Sample
                        <span
                            class="bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300 ml-3">Latest</span>
                    </h3>
                    <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Released on
                        January 13th, 2022</time>
                    <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">loreme ipsume poreme nonume
                        ipusme.</p>
                    <a href="#"
                        class="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700"><svg
                            class="w-3.5 h-3.5 mr-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor" viewBox="0 0 20 20">
                            <path
                                d="M14.707 7.793a1 1 0 0 0-1.414 0L11 10.086V1.5a1 1 0 0 0-2 0v8.586L6.707 7.793a1 1 0 1 0-1.414 1.414l4 4a1 1 0 0 0 1.416 0l4-4a1 1 0 0 0-.002-1.414Z" />
                            <path
                                d="M18 12h-2.55l-2.975 2.975a3.5 3.5 0 0 1-4.95 0L4.55 12H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2Zm-3 5a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z" />
                        </svg> Download ZIP</a>
                </li>
                <li class="mb-10 ml-6" v-for="item of filteredTimeline" :key="item.id">
                    <span
                        class="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                        <svg class="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path
                                d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                        </svg>
                    </span>
                    <h3 class="mb-1 text-lg font-semibold text-gray-900 dark:text-white">{{ item.title }}
                        <a
                            class="relative ml-1 rounded-full text-xs px-2 py-1 bg-sky-700 text-white hover:bg-sky-200 hover:text-black dark:bg-black dark:text-gray-300 ">{{
                                item.topic_tags }}</a>
                    </h3>
                    <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Released on
                        {{ item.date }}</time>
                    <p class="text-base font-normal text-gray-500 dark:text-gray-400 mb-2">{{ item.context }}</p>
                    <!-- https://picsum.photos/200/300 -->
                    <!-- https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg -->
                    <div v-if="item.files && item.files.length == 1">
                        <img :src="item.files[0]" class="max-h-[340px] max-w-[100%]" alt="...">
                    </div>
                    <div v-if="item.files && item.files.length > 1" id="indicators-carousel" class="relative w-full" data-carousel="static">
                        <!-- Carousel wrapper -->
                        <div class="relative h-56 overflow-hidden rounded-lg md:h-96">
                            <!-- Item 1 -->
                           <div v-for="image of item.files" :key="image" 
                           class="hidden duration-700 ease-in-out" data-carousel-item>
                               <img :src="image" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="...">
                           </div>
                        </div>
                        <!-- Slider indicators -->
                        <div class="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
                            <button v-for="(image, index) of item.files" :key="index" 
                             type="button" class="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 1" :data-carousel-slide-to="index"></button>
                        </div>
                        <!-- Slider controls -->
                        <button type="button" class="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
                            <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                                <svg class="w-4 h-4 text-white dark:text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4"/>
                                </svg>
                                <span class="sr-only">Previous</span>
                            </span>
                        </button>
                        <button type="button" class="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
                            <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                                <svg class="w-4 h-4 text-white dark:text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
                                </svg>
                                <span class="sr-only">Next</span>
                            </span>
                        </button>
                    </div>
                    
                    
                </li>

            </ol>
            <div v-if="openAddModal">
                <TimelineAdd @close-modal="toggleAddModal(false)" :editData="editData"> </TimelineAdd>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/vue'
import { ref, onMounted } from 'vue'
import { fetchTimelines } from '../services/timeline.posts'
import { ChevronDownIcon } from '@heroicons/vue/20/solid'
import TimelineAdd from '../components/TimelineAdd.vue'
import dayjs from 'dayjs';
import { authenticate } from '../services/manage.auth'

onMounted(async () => {
    auth_visibility.value = await authenticate()
    if(!auth_visibility.value) {window.alert('auto logged out'); return;}
    fetchData()
})
const auth_visibility = ref()
const filteredTimeline = ref()
const timeLine = ref()
const topic_tags = ref([
    { name: 'Palestine Israel Conflict', value: 'palestine-israel' },
])
const fetchData = async () => {
    const res = await fetchTimelines()
    timeLine.value = res
    filteredTimeline.value = timeLine.value
}
const openAddModal = ref(false)
const toggleAddModal = (value: boolean) => {
    // if(!auth_visibility.value || auth_visibility.value!=="1") {window.alert('insufficient access'); return}
    openAddModal.value = value
}
const editData = ref()
// const handleEdit = (data: any) => {
//     editData.value = data
// }
const filterTimeline = (value: any) => {
    if (value.value == 'all') { filteredTimeline.value = timeLine.value; return }

    filteredTimeline.value = timeLine.value.filter((x: any) => x.topic_tags == value.value)
    console.log(filteredTimeline.value, value.topic_tags)
}
</script>

<style></style>