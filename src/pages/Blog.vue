<template>
    <div class="bg-sky-100 bg-opacity-20  dark:bg-white dark:bg-opacity-5 py-24 sm:py-32 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm">
        <div class="mx-auto max-w-7xl px-6 lg:px-8">
            <div class="mx-auto max-w-2xl lg:mx-0">
                <h2 class="text-3xl font-bold tracking-tight text-sky-800 dark:text-gray-300 sm:text-4xl">From the blog of afnan-shakeel</h2>
                <p class="mt-2 text-lg leading-8 text-gray-600">This guy writes about his business and life with his expert advice.</p>
            </div>
            <div class="flex justify-end mt-8">
                <button @click="toggleAddModal(true)" type="button"
                    class="px-4 py-1.5 text-sm font-medium rounded-md ring-sky-900 dark:ring-black hover:ring-sky-600 dark:hover:ring-black ring-2 bg-sky-200  hover:bg-sky-600 bg-opacity-30 text-sky-900 dark:bg-opacity-10 dark:text-gray-300 dark:hover:bg-black hover:text-white dark:hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
                    Write a New Post</button>
            </div>
            <div
                class="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 dark:border-gray-500 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                <article v-for="post in blogs" :key="post.id" class="flex max-w-xl flex-col items-start justify-between  border-b dark:border-gray-500 ">
                    <div class="rounded-xl mb-2">
                        <img src="https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=3270&amp;q=80"
                            alt="asd" class="rounded-xl">
                    </div>
                    <div class="flex items-center gap-x-4 text-xs">

                        <time :datetime="post.datetime" class="text-gray-500 dark:text-gray-400">{{ post.created_at}}</time>
                        <a :href="'#'"
                            class="relative z-10 rounded-full font-medium px-3 py-1.5 bg-sky-700 text-white hover:bg-sky-200 hover:text-black dark:bg-black dark:text-gray-300 ">{{
                                post.topic_tags }}</a>
                    </div>
                    <div class="group relative" @click="toggleBlog(post, true)">
                        <h3 class="mt-3 text-lg font-semibold leading-6 text-gray-700 group-hover:text-gray-600 dark:text-gray-200 dark:group-hover:text-gray-300">
                            <a :href="'#'">
                                <span class="absolute inset-0" />
                                {{ post.title }}
                            </a>
                        </h3>
                        <p class="mt-5 line-clamp-3 text-sm leading-6 text-gray-600 dark:text-gray-500">{{ post.context }}</p>
                    </div>
                    <div class="relative mt-8 flex items-center gap-x-4 mb-2">
                        <img :src="profileImage" alt=""
                            class="h-10 w-10 rounded-full bg-gray-50" />
                        <div class="text-sm leading-6">
                            <p class="font-semibold text-gray-700 dark:text-gray-300">
                                <a :href="'#'">
                                    <span class="absolute inset-0" />
                                    {{ 'afnan shakeel' }}
                                </a>
                            </p>
                            <p class="text-gray-600 dark:text-gray-400">{{ 'being-human' }}</p>
                        </div>
                    </div>

                </article>
                <div v-if="openBlog">
                    <BlogDetail @close-blog="openBlog = false" @edit-post="handleEdit($event)" :post="postDetail">
                    </BlogDetail>
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
import dayjs from 'dayjs';

// import { useRouter } from 'vue-router'
import { fetchPosts } from '../services/blog.posts'
// const router = useRouter()
const openBlog = ref(false)
const auth = ref()
const visibility = ref("3")
const blogs = ref()
const profileImage = ref('https://asxvec4storage.blob.core.windows.net/blog/profile_pic.jpg')
onMounted(() => {
    auth.value = window.sessionStorage.getItem('auth')
    setVisibility()
    getPosts()
})
const setVisibility = () => {
    const auth = window.sessionStorage.getItem('auth') || ''
    const isAnonymous = window.sessionStorage.getItem('isAnonymous')
    // const accessToken = window.sessionStorage.getItem('token')
    // if(!accessToken || !auth) {window.alert('restricted access'); router.push('/'); return;}
    let _auth = auth && JSON.parse(auth)

    if (!_auth || _auth.length == 0 || isAnonymous) {visibility.value = "3"; return;}
    if (_auth.email === "afnanshakeel@gmail.com") { visibility.value = "1"; return; }
    if (_auth.email !== "afnanshakeel@gmail.com" && ['password','google.com'].includes(_auth.providerId)) 
        {visibility.value = "2";return;}
}
const getPosts = async () => {
    const postsRes = await fetchPosts()
    if (postsRes.message == 'success' && postsRes.data) {
        blogs.value = postsRes.data.filter((x: any) => String(x.visibility) === visibility.value)
        blogs.value.forEach((x: any)=>{
            let date = dayjs(x.created_at)
            let formatDate = date.format('MMMM D[o], YYYY')
            x.created_at = formatDate
        })
        console.log(blogs.value)
    }
}
const postDetail = ref()
const toggleBlog = (post: any, value: boolean) => {
    postDetail.value = post
    openBlog.value = value
}

const openAddModal = ref(false)
const toggleAddModal = (value: boolean) => {
    openAddModal.value = value
}
const editData = ref()
const handleEdit = (data: any) => {
    console.log('handle edit', data)
    editData.value = data
    toggleAddModal(true)
}

// const posts = ref([
//     {
//         id: 1,
//         title: 'Boost your conversion rate',
//         href: '#',
//         description:
//             'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
//         date: 'Mar 16, 2020',
//         datetime: '2020-03-16',
//         category: { title: 'Marketing', href: '#' },
//         author: {
//             name: 'Michael Foster',
//             role: 'Co-Founder / CTO',
//             href: '#',
//             imageUrl:
//                 'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
//         },
//     },
//     // More posts...
// ])

</script>