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
    <TransitionRoot appear :show="true" as="template">
      <Dialog as="div" class="relative z-10">
        <TransitionChild
          as="template"
          enter="duration-300 ease-out"
          enter-from="opacity-0"
          enter-to="opacity-100"
          leave="duration-200 ease-in"
          leave-from="opacity-100"
          leave-to="opacity-0"
        >
          <div class="fixed inset-0 bg-black bg-opacity-25" />
        </TransitionChild>
  
        <div class="fixed inset-0 overflow-y-auto">
          <div
            class="flex min-h-full items-center justify-center p-4 text-center"
          >
            <TransitionChild
              as="template"
              enter="duration-300 ease-out"
              enter-from="opacity-0 scale-95"
              enter-to="opacity-100 scale-100"
              leave="duration-200 ease-in"
              leave-from="opacity-100 scale-100"
              leave-to="opacity-0 scale-95"
            >
              <DialogPanel
                class="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all"
              >
                <DialogTitle
                  as="h3"
                  class="text-lg font-medium leading-6 text-gray-900"
                >
                  {{post.title}}
                </DialogTitle>
                <div class="mt-2">
                    <article class="flex max-w-xl flex-col items-start justify-between">
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
                        <div class="group relative">
                            <h3 class="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                                <span class="absolute inset-0" />
                                {{ post.title }}
                            </h3>
                            <p class="mt-5 text-sm leading-6 text-gray-600">{{ post.context }}</p>
                        </div>
                        <div class="relative mt-8 flex items-center gap-x-4">
                            <img :src="'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'"
                                alt="" class="h-10 w-10 rounded-full bg-gray-50" />
                            <div class="text-sm leading-6">
                                <p class="font-semibold text-gray-900">
                                    <a :href="'#'">
                                        <span class="absolute inset-0" />
                                        {{ 'afnan-shakeel' }}
                                    </a>
                                </p>
                                <p class="text-gray-600">{{ 'exceptionalist' }}</p>
                            </div>
                        </div>
                    </article>
                </div>
  
                <div class="mt-10 flex justify-between">
                  <button
                    type="button"
                    class="rounded-md border border-transparent bg-blue-100 px-4 py-0 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                    @click="closeModal()"
                    >
                    thanks!
                  </button>
                  <button
                    type="button" @click="editPost(post)"
                    class="rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                  >
                    Edit, me!
                  </button>
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </TransitionRoot>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue'
  import {
    TransitionRoot,
    TransitionChild,
    Dialog,
    DialogPanel,
    DialogTitle,
  } from '@headlessui/vue'
  
  const props = defineProps(['post'])
  const emits = defineEmits(['close-blog', 'edit-post'])
  function closeModal() {
    emits('close-blog')
  }

  const editPost = (data: any)=>{
    console.log('edit data', data)
    emits('edit-post', data)
  }
  </script>
  