<template>
  <!-- <div class="fixed inset-0 flex items-center justify-center">
      <button
        type="button"
        @click="openModal"
        class="rounded-md bg-black bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
      >
        Open dialog
      </button>
    </div> -->

  <div class="mt-2">
    <article class="flex max-w-xl flex-col items-start justify-between">
      <div class="rounded-xl mb-2">
        <img
          src="https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=3270&amp;q=80"
          alt="asd" class="rounded-xl">
      </div>
      <div class="flex items-center gap-x-4 text-xs">

        <time :datetime="post.datetime" class="text-gray-500">{{ post.neat_date || ''
        }}</time>
        <a :href="'#'"
          class="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">{{
            post.topic_tags }}</a>
      </div>
      <div class="group relative">
        <h3 class="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600 dark:text-gray-800">
          <span class="absolute inset-0" />
          {{ post.title }}
        </h3>
        <p class="mt-5 text-sm leading-6 text-gray-600 dark:text-gray-700" style="white-space: pre-line;">{{ post.context
        }}</p>
      </div>
      <div class="relative mt-8 flex items-center gap-x-4">
        <img :src="profileImage" alt="" class="h-10 w-10 rounded-full bg-gray-50" />
        <div class="text-sm leading-6">
          <p class="font-semibold text-gray-900">
            <a>
              <span class="absolute inset-0" />
              {{ 'afnan-shakeel' }}
            </a>
          </p>
          <p class="text-gray-600">{{ 'exceptionalist' }}</p>
        </div>
      </div>
      <div>
        <!-- <BlogComments :post-x="{id: 1}"></BlogComments> -->
      </div>
    </article>
  </div>
  <div class="mt-10 flex justify-between">
    <button type="button" class="rounded-md border border-transparent bg-blue-100 px-4 py-0 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2
                    dark:bg-green-800 dark:bg-opacity-20 dark:text-green-900" @click="closeModal()">
      thanks!
    </button>
    <button type="button" @click="editPost(post)" class="rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2
                    dark:bg-green-800 dark:bg-opacity-20 dark:text-green-900">
      Edit, me!
    </button>
  </div>
</template>
  
<script setup lang="ts">
import BlogComments from './BlogComments.vue'
import { ref, onMounted } from 'vue'
const profileImage = ref('https://asxvec4storage.blob.core.windows.net/blog/profile_pic.jpg')

const props = defineProps(['post'])
onMounted(() => {
  console.log(props.post)
})
const emits = defineEmits(['close-blog', 'edit-post'])

function closeModal() {
  emits('close-blog')
}

const editPost = (data: any) => {
  console.log('edit data', data)
  emits('edit-post', data)
}
</script>
  