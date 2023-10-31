<template>
    <!-- <button @click="test()">x-x-x</button> -->
    <div
        class="bg-sky-100 bg-opacity-20  dark:bg-white dark:bg-opacity-5 py-24 sm:py-32 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm">
        <div class="mx-auto max-w-7xl px-6 lg:px-8">
            <div class="mx-auto max-w-2xl lg:mx-0">
                <h2 class="text-3xl font-bold tracking-tight text-sky-800 dark:text-gray-300 sm:text-4xl">From the blog of
                    {{accountMeta.id}}</h2>
                <p class="mt-2 text-lg leading-8 text-gray-600">This guy writes about his business and life with his expert
                    advice.</p>
            </div>
            <div class="flex justify-end mt-8">
                <button @click="setOpenForm(true)" type="button"
                    class="px-4 py-1.5 text-sm font-medium rounded-md ring-sky-900 dark:ring-black hover:ring-sky-600 dark:hover:ring-black ring-2 bg-sky-200  hover:bg-sky-600 bg-opacity-30 text-sky-900 dark:bg-opacity-10 dark:text-gray-300 dark:hover:bg-black hover:text-white dark:hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
                    Write a New Post</button>
            </div>
            <div
                class="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 dark:border-gray-500 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                <article v-for="post in blogs" :key="post.id"
                    class="flex max-w-xl flex-col items-start justify-between  border-b dark:border-gray-500 ">
                    <div class="rounded-xl mb-2">
                        <img src="https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=3270&amp;q=80"
                            alt="asd" class="rounded-xl">
                    </div>
                    <div class="flex items-center gap-x-4 text-xs">

                        <time :datetime="post.datetime" class="text-gray-500 dark:text-gray-400">{{ post.created_at
                        }}</time>
                        <a :href="'#'"
                            class="relative z-10 rounded-full font-medium px-3 py-1.5 bg-sky-700 text-white hover:bg-sky-200 hover:text-black dark:bg-black dark:text-gray-300 ">{{
                                post.topic_tags }}</a>
                    </div>
                    <div class="group relative" @click="setOpenBlog(post, true)">
                        <h3
                            class="mt-3 text-lg font-semibold leading-6 text-gray-700 group-hover:text-gray-600 dark:text-gray-200 dark:group-hover:text-gray-300">
                            <a :href="'#'">
                                <span class="absolute inset-0" />
                                {{ post.title }}
                            </a>
                        </h3>
                        <p class="mt-5 line-clamp-3 text-sm leading-6 text-gray-600 dark:text-gray-500">{{ post.context }}
                        </p>
                    </div>
                    <div class="relative mt-8 flex items-center gap-x-4 mb-2">
                        <img :src="accountMeta.profile_url" alt="" class="h-10 w-10 rounded-full bg-gray-50" />
                        <div class="text-sm leading-6">
                            <p class="font-semibold text-gray-700 dark:text-gray-300">
                                <a :href="'#'">
                                    <span class="absolute inset-0" />
                                    {{ post.user.username }}
                                </a>
                            </p>
                            <p class="text-gray-600 dark:text-gray-400">{{ accountMeta.designation }}</p>
                        </div>
                    </div>
                </article>
                <div>
                    <TransitionRoot appear :show="isOpenBlog" as="template">
                        <Dialog as="div" @close="" class="relative z-10">
                            <TransitionChild as="template" enter="duration-300 ease-out" enter-from="opacity-0"
                                enter-to="opacity-100" leave="duration-200 ease-in" leave-from="opacity-100"
                                leave-to="opacity-0">
                                <div class="fixed inset-0 bg-black bg-opacity-25" />
                            </TransitionChild>

                            <div class="fixed inset-0 overflow-y-auto">
                                <div class="flex min-h-full items-center justify-center p-4 text-center">
                                    <TransitionChild as="template" enter="duration-300 ease-out"
                                        enter-from="opacity-0 scale-95" enter-to="opacity-100 scale-100"
                                        leave="duration-200 ease-in" leave-from="opacity-100 scale-100"
                                        leave-to="opacity-0 scale-95">
                                        <DialogPanel
                                            class="w-full max-w-xl transform overflow-hidden rounded-2xl ring-4 bg-white p-6 text-left align-middle shadow-xl transition-all dark:bg-green-50 dark:ring-green-950">
                                            <DialogTitle as="h3" class="text-lg font-medium leading-6 text-gray-900">
                                                <!-- {{post.title}} -->
                                            </DialogTitle>
                                            <BlogDetail @close-blog="isOpenBlog = false" @edit-post="handleEdit($event)"
                                                :post="postDetail">
                                            </BlogDetail>
                                        </DialogPanel>
                                    </TransitionChild>
                                </div>
                            </div>
                        </Dialog>
                    </TransitionRoot>

                </div>
            </div>
            <div v-if="isOpenForm">

                <BlogWrite @close-modalx="setOpenForm(false)" :editData="editData"></BlogWrite>

            </div>
        </div>
    </div>
</template>
  
<script setup lang="ts">
import BlogDetail from '../components/BlogDetail.vue'
import BlogWrite from '../components/BlogWrite.vue'
import { ref, onMounted } from 'vue'
import dayjs from 'dayjs';
import {
    TransitionRoot,
    TransitionChild,
    Dialog,
    DialogPanel,
    DialogTitle,
} from '@headlessui/vue'
// import { useRouter } from 'vue-router'
// import { fetchPosts } from '../services/blog.posts'
// const router = useRouter()
import { getPosts } from '../services/post.db';
import { getUserById } from '../services/user.db'

const props = defineProps(["accountMeta"])
const isOpenBlog = ref(false)
const auth = ref()
const visibility = ref("3")
const blogs = ref()
// const profileImage = ref('https://asxvec4storage.blob.core.windows.net/blog/profile_pic.jpg')
onMounted(() => {
    console.log(props.accountMeta)
    auth.value = window.sessionStorage.getItem('auth')
    setVisibility()
    fetchPosts()
})
const setVisibility = () => {
    const auth = window.sessionStorage.getItem('auth') || ''
    const isAnonymous = window.sessionStorage.getItem('isAnonymous')
    // const accessToken = window.sessionStorage.getItem('token')
    // if(!accessToken || !auth) {window.alert('restricted access'); router.push('/'); return;}
    let _auth = auth && JSON.parse(auth)

    if (!_auth || _auth.length == 0 || isAnonymous) { visibility.value = "3"; return; }
    if (_auth.email === props.accountMeta.email) { visibility.value = "1"; return; }
    if (_auth.email !== props.accountMeta.email && ['password', 'google.com'].includes(_auth.providerId)) { visibility.value = "2"; return; }
}

const fetchPosts = async () => {
    const postsRes = await getPosts()
    console.log(postsRes)
    if (postsRes && postsRes.length !== 0) {
        blogs.value = postsRes.filter((x: any) => String(x.visibility) === visibility.value)
        blogs.value.forEach(async (x: any) => {
            let date = dayjs(x.created_at)
            let formatDate = date.format('MMMM D[o], YYYY')
            x.created_at = formatDate
            let user = await getUserById(x.user.id)
            x.user = user 
        })
    }
}

const postDetail = ref()
const setOpenBlog = (post: any = null, value: boolean) => {
    postDetail.value = post
    isOpenBlog.value = value
}

const isOpenForm = ref(false)
const setOpenForm = async (value: boolean) => {
    isOpenForm.value = value
    if (value == false) await fetchPosts()
}
const editData = ref()
const handleEdit = (data: any) => {
    console.log('handle edit', data)
    editData.value = data
    setOpenForm(true)
}


</script>