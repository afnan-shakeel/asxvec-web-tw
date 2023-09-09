<template>
    <div class="bg-white py-24 sm:py-32">
        <div class="mx-auto max-w-7xl px-6 lg:px-8">
            <div class="mx-auto max-w-2xl lg:mx-0">
                <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">From the blog of afnan-shakeel</h2>
                <p class="mt-2 text-lg leading-8 text-gray-600">This guy writes about his business and life with his
                    expert advice.</p>
            </div>
            <div class="flex justify-end mt-8">
                <button @click="toggleAddModal(true)" type="button" class="rounded-md ring-black ring-1  bg-white bg-opacity-20 px-4 py-1.5 text-sm font-medium text-black hover:bg-black hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
                    Write a New Post</button>
            </div>
            <div
                class="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                <article v-for="post in blogs" :key="post.id" class="flex max-w-xl flex-col items-start justify-between">
                    <div class="rounded-xl mb-2">
                        <img
                        src="https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=3270&amp;q=80"
                        alt="asd" class="rounded-xl">
                    </div>
                    <div class="flex items-center gap-x-4 text-xs">

                        <time :datetime="post.datetime" class="text-gray-500">{{ post.created_at == '' && 'Mar 16, 2020'
                        }}</time>
                        <a :href="'#'"
                            class="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">{{
                                post.topic_tags }}</a>
                    </div>
                    <div class="group relative" @click="toggleBlog(post, true)">
                        <h3 class="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                            <a :href="'#'">
                                <span class="absolute inset-0" />
                                {{ post.title }}
                            </a>
                        </h3>
                        <p class="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{{ post.context }}</p>
                    </div>
                    <div class="relative mt-8 flex items-center gap-x-4">
                        <img :src="'https://asxvec4storage.blob.core.windows.net/blog/profile_pic.jpg'"
                            alt="" class="h-10 w-10 rounded-full bg-gray-50" />
                        <div class="text-sm leading-6">
                            <p class="font-semibold text-gray-900">
                                <a :href="'#'">
                                    <span class="absolute inset-0" />
                                    {{ 'afnan shakeel' }}
                                </a>
                            </p>
                            <p class="text-gray-600">{{ 'being-human' }}</p>
                        </div>
                    </div>

                </article>
                <div v-if="openBlog">
                    <BlogDetail @close-blog="openBlog = false" @edit-post="handleEdit($event)" :post="postDetail"></BlogDetail>
                </div>
            </div>
            <div v-if="openAddModal">
                <BlogWrite @close-modal="toggleAddModal(false)" :editData="editData"></BlogWrite>
            </div>
        </div>
    </div>
</template>
  
<script setup lang="ts">
import BlogDetail from '../components/BlogDetail.vue'
import BlogWrite from '../components/BlogWrite.vue'
import { ref, onMounted } from 'vue'

import { fetchPosts, submitPosts } from '../services/blog.posts'

const openBlog = ref(false)

const blogs = ref()
onMounted(() => {
    getPosts()
})

const getPosts = async () => {
    const postsRes = await fetchPosts()
    if (postsRes.message == 'success') {
        console.log(postsRes.data)
        blogs.value = postsRes.data
    }

}
const postDetail =  ref()
const toggleBlog = (post: any, value: boolean)=>{
    postDetail.value = post
    openBlog.value = value
}

const openAddModal = ref(false)
const toggleAddModal = ( value : boolean)=>{
    openAddModal.value = value
}
const editData = ref()
const handleEdit = (data: any)=>{
    console.log('handle edit', data)
    editData.value = data
    toggleAddModal(true)
}

const posts = ref([
    {
        id: 1,
        title: 'Boost your conversion rate',
        href: '#',
        description:
            'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
        date: 'Mar 16, 2020',
        datetime: '2020-03-16',
        category: { title: 'Marketing', href: '#' },
        author: {
            name: 'Michael Foster',
            role: 'Co-Founder / CTO',
            href: '#',
            imageUrl:
                'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
    },
    // More posts...
])

</script>