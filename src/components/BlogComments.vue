<template>
    <!-- {{ post }} -->
    <div class="bg-white dark:bg-gray-900 py-8 lg:py-16 antialiased">
        <div class="max-w-2xl mx-auto px-4">
            <div class="flex justify-between items-center mb-6">
                <h2 class="text-lg lg:text-2xl font-bold text-gray-900 dark:text-white">Comments ({{ post_comments.length }})
                </h2>
            </div>
            <form class="mb-6">
                <div
                    class="py-2 px-4 mb-4 bg-white rounded-lg rounded-t-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
                    <label for="comment" class="sr-only">Your comment</label>
                    <textarea ref="commentArea" id="comment" rows="1" v-model="comment_input"
                        class="px-0 w-full text-sm text-gray-900 border-0 focus:ring-0 focus:outline-none dark:text-white dark:placeholder-gray-400 dark:bg-gray-800"
                        placeholder="Write a comment..." required></textarea>
                </div>
                <button type="button" @click="isReplyComment ? postReply(parentCommentId) : postComment()"
                    class="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-sky-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800">
                    Post comment
                </button>
            </form>
            <div v-for="item of post_comments" :key="item.id">
                <article class="p-6 text-sm bg-white rounded-lg dark:bg-gray-900">
                    <footer class="flex justify-between items-center mb-2">
                        <div class="flex items-center">
                            <p class="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white font-semibold">
                                <img class="mr-2 w-6 h-6 rounded-full"
                                    src="https://flowbite.com/docs/images/people/profile-picture-2.jpg"
                                    alt="Michael Gough">{{ item.user ? item.user.username : 'anonymous' }}
                            </p>
                            <p class="text-sm text-gray-600 dark:text-gray-400"><time pubdate datetime="2022-02-08"
                                    title="February 8th, 2022">{{ item.created_at }}</time></p>
                        </div>
                        <button id="dropdownComment1Button" data-dropdown-toggle="dropdownComment1"
                            class="inline-flex items-center p-2 text-sm font-medium text-center text-gray-500 dark:text-gray-400 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-50 dark:bg-gray-900 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                            type="button">
                            <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                viewBox="0 0 16 3">
                                <path
                                    d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" />
                            </svg>
                            <span class="sr-only">Comment settings</span>
                        </button>
                        <!-- Dropdown menu -->
                        <div id="dropdownComment1"
                            class="hidden z-10 w-36 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600">
                            <ul class="py-1 text-sm text-gray-700 dark:text-gray-200"
                                aria-labelledby="dropdownMenuIconHorizontalButton">
                                <li>
                                    <a href="#"
                                        class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Edit</a>
                                </li>
                                <li>
                                    <a href="#"
                                        class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Remove</a>
                                </li>
                                <li>
                                    <a href="#"
                                        class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Report</a>
                                </li>
                            </ul>
                        </div>
                    </footer>
                    <p class="text-gray-500 dark:text-gray-400">{{ item.comment }}</p>
                    <div class="flex items-center mt-4 space-x-4">
                        <button type="button" @click="focusComment(); isReplyComment = true; parentCommentId = item.id"
                            class="flex items-center text-sm text-gray-500 hover:underline dark:text-gray-400 font-medium">
                            <svg class="mr-1.5 w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                fill="none" viewBox="0 0 20 18">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M5 5h5M5 8h2m6-3h2m-5 3h6m2-7H2a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h3v5l5-5h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1Z" />
                            </svg>
                            Reply
                        </button>
                    </div>
                </article>
                <div v-if="item.replies && item.replies.length > 0">
                    <article v-for="reply of item.replies"
                        class="p-6 mb-3 ml-6 lg:ml-12 text-sm bg-white rounded-lg dark:bg-gray-900">
                        <footer class="flex justify-between items-center mb-2">
                            <div class="flex items-center">
                                <p class="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white font-semibold">
                                    <img class="mr-2 w-6 h-6 rounded-full"
                                        src="https://flowbite.com/docs/images/people/profile-picture-5.jpg" alt="Jese Leos">{{
                                            reply.user.username }}
                                </p>
                                <p class="text-sm text-gray-600 dark:text-gray-400"><time pubdate datetime="2022-02-12"
                                        title="February 12th, 2022">{{ reply.created_at }}</time></p>
                            </div>
                            <button id="dropdownComment2Button" data-dropdown-toggle="dropdownComment2"
                                class="inline-flex items-center p-2 text-sm font-medium text-center text-gray-500 dark:text-gray-40 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-50 dark:bg-gray-900 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                                type="button">
                                <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                    viewBox="0 0 16 3">
                                    <path
                                        d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" />
                                </svg>
                                <span class="sr-only">Comment settings</span>
                            </button>
                            <!-- Dropdown menu -->
                            <div id="dropdownComment2"
                                class="hidden z-10 w-36 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600">
                                <ul class="py-1 text-sm text-gray-700 dark:text-gray-200"
                                    aria-labelledby="dropdownMenuIconHorizontalButton">
                                    <li>
                                        <a href="#"
                                            class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Edit</a>
                                    </li>
                                    <li>
                                        <a href="#"
                                            class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Remove</a>
                                    </li>
                                    <li>
                                        <a href="#"
                                            class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Report</a>
                                    </li>
                                </ul>
                            </div>
                        </footer>
                        <p class="text-gray-500 dark:text-gray-400">{{ reply.comment }}</p>
                        <div class="flex items-center mt-4 space-x-4">
                            <button type="button" @click="focusComment(); isReplyComment = true; parentCommentId = item.id"
                                class="flex items-center text-sm text-gray-500 hover:underline dark:text-gray-400 font-medium">
                                <svg class="mr-1.5 w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                    fill="none" viewBox="0 0 20 18">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M5 5h5M5 8h2m6-3h2m-5 3h6m2-7H2a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h3v5l5-5h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1Z" />
                                </svg>
                                Reply
                            </button>
                        </div>
                    </article>
                </div>
            </div>


        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { addComment, getComments, addReply, getReplies } from '../services/post_comments.db'
import dayjs from 'dayjs';
import { getUserById } from '../services/user.db';

const props = defineProps(['postX'])
onMounted(() => {
    fetchComments(props.postX.id)
})
const comment_input = ref()
const post_comments = ref()
const isReplyComment = ref(false)
const parentCommentId = ref()
const commentArea = ref();

async function postComment() {
    let obj = { "comment": comment_input.value }
    console.log(obj)
    const res = await addComment(obj, 'slaPRvboJ00cdpElWTlC', props.postX.id)
    console.log(res)
    fetchComments(props.postX.id)
}

async function fetchComments(post: any) {
    const res = await getComments(post)
    // post_comments.value = res
    await res.forEach(async (x: any) => {
        let date = dayjs(x.created_at)
        let formatDate = date.format('MMMM D[o], YYYY')
        x.created_at = formatDate
        if (x.user && x.user.id) {
            let userObj = await getUserById(x.user.id)
            x.user = userObj
            x.replies = []
            let replyComment = await getReplies(x.id)
            console.log("replyComment", replyComment)
            var replies = replyComment
            if (replies.length > 0) {
                replies.forEach(async (y) => {
                    if (y.user && y.user.id && y.post_comment.id == x.id) {
                        let date = dayjs(y.created_at)
                        let formatDate = date.format('MMMM D[o], YYYY')
                        y.created_at = formatDate
                        let userObj2 = await getUserById(y.user.id)
                        y.user = userObj2
                        x.replies.push(y)
                        console.log("userObj2 y ", userObj2, y.user.id,)
                        
                    }
                })
            }
        }
    })
    post_comments.value = res
    console.log(post_comments.value)
}

async function postReply(comment_id: any) {
    console.log('reply func ')
    let obj = { "comment": comment_input.value }
    const res = await addReply(obj, 'slaPRvboJ00cdpElWTlC', comment_id)
    console.log(res)
}

function focusComment() {
    commentArea.value.focus();
    console.log(commentArea.value)

}
const comments = ref([
    {
        id: 1,
        username: 'Michael Gough',
        date: 'Feb. 8, 2022',
        comment: 'Very straight-to-point article. Really worth time reading. Thank you! But tools are just the instruments for the UX designers. The knowledge of the design tools are as important as the creation of the design strategy.',
        replies: [
            {
                id: 1,
                parent: 1,
                date: 'Feb. 12, 2022',
                comment: 'Much appreciated! Glad you liked it ☺️',
                username: 'Jese Leos'
            }
        ]
    },
    {
        id: 2,
        username: 'Kumar Gopal',
        date: 'Oct. 22, 2022',
        comment: 'Very straight-to-point article. Really worth time reading. Thank you! But tools are just the instruments for the UX designers. The knowledge of the design tools are as important as the creation of the design strategy.',
        replies: []
    },
])


</script>

<style></style>