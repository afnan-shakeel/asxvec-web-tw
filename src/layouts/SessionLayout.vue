<template>
  <!--
  This example requires updating your template:

  ```
  <html class="h-full bg-gray-100">
  <body class="h-full">
  ```
-->
  <div class="min-h-full">
    <nav class="bg-white dark:bg-black drop-shadow-md">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="flex h-16 items-center justify-between">
          <div class="flex items-center">
            <div class="flex-shrink-0">
              <img class="h-8 w-8" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                alt="Your Company">
            </div>
            <div class="hidden md:block">
              <div class="ml-10 flex items-baseline space-x-4">
                <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
                <Menu v-for="(item, index) of menusList" :key="item.id">
                  <div>
                    <MenuButton>
                      <button @click="!item.subMenu && routeTo(index, item.to, item)"
                        :class="[item.isActive ? 'bg-gray-800 text-white dark:bg-green-950' : 'bg-white text-gray-400 dark:bg-black',
                          'hover:bg-gray-900 hover:text-white inline-flex w-full justify-center rounded-md px-3 py-2 text-sm font-medium']">
                        {{ item.title }}
                        <ChevronDownIcon v-if="item.subMenu"
                          class="ml-2 -mr-1 h-5 w-5 text-violet-200 hover:text-violet-100" aria-hidden="true" />
                      </button>
                    </MenuButton>
                    <transition v-if="item.subMenu" enter-active-class="transition duration-100 ease-out"
                      enter-from-class="transform scale-95 opacity-0" enter-to-class="transform scale-100 opacity-100"
                      leave-active-class="transition duration-75 ease-in"
                      leave-from-class="transform scale-100 opacity-100" leave-to-class="transform scale-95 opacity-0">
                      <MenuItems
                        class="absolute mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none ">
                        <div class="px-1 py-1">
                          <MenuItem v-for="subItem of item.subMenu" :key="subItem.id" v-slot="{ active }">
                          <button @click="routeTo(index, subItem.to, subItem)" :class="[active ? 'bg-violet-500 text-white' : 'text-gray-900',
                            'group flex w-full items-center rounded-md px-2 py-2 text-sm',]" tabindex="-1"><svg
                              viewBox="0 0 20 20" class="mr-2 h-5 w-5 text-violet-400" fill="none"
                              xmlns="http://www.w3.org/2000/svg" style="">
                              <path d="M4 13V16H7L16 7L13 4L4 13Z" fill="#EDE9FE" stroke="#A78BFA" stroke-width="2">
                              </path>
                            </svg> {{ subItem.title }} </button>
                          </MenuItem>
                        </div>
                      </MenuItems>
                    </transition>
                  </div>
                </Menu>
              </div>
            </div>
          </div>
          <div class="hidden md:block">
            <div class="ml-4 flex items-center md:ml-6">
              <button type="button"
                class="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                <span class="absolute -inset-1.5"></span>
                <span class="sr-only">View notifications</span>
                <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                  aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round"
                    d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
                </svg>
              </button>
              <button type="button" @click="toggleDarkMode()"
                class="relative rounded-full bg-white p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                <!-- <svg v-if="!darkMode" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
                </svg>
                <svg v-if="darkMode" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                </svg> -->
                <img v-if="!darkMode" width="30" height="30" src="/dark_ship.svg" alt="dark-ship"/>
                <img v-if="darkMode" width="30" height="30" src="/light_ship.svg" alt="light-ship"/>

              </button>

              <!-- Profile dropdown -->
              <div class="relative ml-3">
                <div>
                  <button type="button" @click="settingsMenu = !settingsMenu"
                    class="relative flex max-w-xs items-center rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                    id="user-menu-button" aria-expanded="false" aria-haspopup="true">
                    <span class="absolute -inset-1.5"></span>
                    <span class="sr-only">Open user menu</span>
                    <img class="h-8 w-8 rounded-full" src="https://i.pravatar.cc/300" alt="">
                  </button>
                </div>

                <!--
                Dropdown menu, show/hide based on menu state.

                Entering: "transition ease-out duration-100"
                  From: "transform opacity-0 scale-95"
                  To: "transform opacity-100 scale-100"
                Leaving: "transition ease-in duration-75"
                  From: "transform opacity-100 scale-100"
                  To: "transform opacity-0 scale-95"
              -->
                <div v-if="settingsMenu"
                  class="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                  role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabindex="-1">
                  <!-- Active: "bg-gray-100", Not Active: "" -->
                  <a href="#" class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1"
                    id="user-menu-item-0">Your Profile</a>
                  <a href="#" class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1"
                    id="user-menu-item-1">Settings</a>
                  <a href="#" @click="signOut()" class="block px-4 py-2 text-sm text-gray-700" role="menuitem"
                    tabindex="-1" id="user-menu-item-2">Sign out</a>
                </div>
              </div>
            </div>
          </div>
          <div class="-mr-2 flex md:hidden">
            <!-- Mobile menu button -->
            <button type="button" @click="mobileMenu = !mobileMenu"
              class="relative inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
              aria-controls="mobile-menu" aria-expanded="false">
              <span class="absolute -inset-0.5"></span>
              <span class="sr-only">Open main menu</span>
              <!-- Menu open: "hidden", Menu closed: "block" -->
              <svg class="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
              <!-- Menu open: "block", Menu closed: "hidden" -->
              <svg class="hidden h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <!-- Mobile menu, show/hide based on menu state. -->
      <div class="md:hidden" id="mobile-menu">
        <div v-if="mobileMenu" class="space-y-1 px-2 pb-3 pt-2 sm:px-3">
          <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
          <a v-for="(item, index) of menusList" :key="item.id" @click="routeTo(index, item.to, item)" href="#" :class="[item.isActive ? 'bg-gray-900 text-white ' : 'bg-white text-gray-300',
            'hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium']"
            aria-current="page">{{ item.title }}</a>
          <a href="#"
            class="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Reports</a>
        </div>
        <div class="border-t border-gray-700 pb-3 pt-4">
          <div class="flex items-center px-5">
            <div class="flex-shrink-0" @click="settingsMenu = !settingsMenu">
              <img class="h-10 w-10 rounded-full" src="https://asxvec4storage.blob.core.windows.net/blog/profile_pic.jpg"
                alt="">
            </div>
            <div class="ml-3">
              <div class="text-base leading-none text-gray-400">{{ 'afnan-shakeel' }}</div>
              <div class="text-xs font-medium leading-none text-gray-400">{{ 'afnanshakeel@gmail.com' }}</div>
            </div>
            <button type="button"
              class="relative ml-auto flex-shrink-0 rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
              <span class="absolute -inset-1.5"></span>
              <span class="sr-only">View notifications</span>
              <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
              </svg>
            </button>
          </div>
          <div v-if="settingsMenu" class="mt-3 space-y-1 px-2">
            <a href="#"
              class="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white">Your
              Profile</a>
            <a href="#"
              class="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white">Settings</a>
            <a href="#" @click="signOut()"
              class="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white">Sign
              out</a>
          </div>
        </div>
      </div>
    </nav>

    <header class="bg-[#f0f9ff] bg-opacity-50 dark:bg-black ">
      <div class="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <!-- <h1 class="text-3xl font-bold tracking-tight text-green-900">{{ pageHeader }}</h1> -->
      </div>
    </header>
    <main class="bg-[#f0f9ff] bg-opacity-50 dark:bg-gradient-to-br dark:from-black dark:to-green-950">
      <div class="min-h-screen mx-auto max-w-7xl py-4 sm:px-6 lg:px-6">
        <!-- Your content -->
        <router-view></router-view>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/vue'
import { ChevronDownIcon } from '@heroicons/vue/20/solid'
const router = useRouter()
const route = useRoute()
const settingsMenu = ref(false)
const mobileMenu = ref(false)
const menusList = ref([
  {
    id: 1,
    title: "Profile",
    isActive: false,
    to: "/profile"
  },
  {
    id: 3,
    title: "Blog",
    isActive: false,
    to: "/blog",
  },
  {
    id: 4,
    title: "Calender",
    isActive: false,
    to: "/calender",
  },
  {
    id: 5,
    title: "Reports",
    isActive: false,
    to: "/reports",
  },
  {
    id: 2,
    title: "Pages",
    isActive: false,
    subMenu: [
      // { id:1, title: "Form", to:"/form" },
      { id: 2, title: "User Management", to: "/user" },

    ]
  },
])

const pageHeader = ref(route.name)

const routeTo = (index: number, to: any, item: any) => {
  menusList.value.forEach((x: any) => x.isActive = false)
  menusList.value[index].isActive = true
  router.push(to)
  console.log(item)
  mobileMenu.value = false
  // pageHeader.value = route.name
}
const signOut = () => {
  window.sessionStorage.clear()
  router.push('/')
}

const darkMode = ref(false)
const toggleDarkMode = () => {
  const element = document.getElementById('html-root')
  darkMode.value = !darkMode.value
  if (darkMode.value) {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }
  
}
</script>

<style></style>