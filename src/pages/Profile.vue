<template>
    <div class="bg-white">
        <!-- <header class="absolute inset-x-0 top-0 z-50">
      <nav class="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div class="flex lg:flex-1">
          <a href="#" class="-m-1.5 p-1.5">
            <span class="sr-only">Your Company</span>
            <img class="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="" />
          </a>
        </div>
        <div class="flex lg:hidden">
          <button type="button" class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700" @click="mobileMenuOpen = true">
            <span class="sr-only">Open main menu</span>
            <Bars3Icon class="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div class="hidden lg:flex lg:gap-x-12">
          <a v-for="item in navigation" :key="item.name" :href="item.href" class="text-sm font-semibold leading-6 text-gray-900">{{ item.name }}</a>
        </div>
        <div class="hidden lg:flex lg:flex-1 lg:justify-end">
          <a href="#" class="text-sm font-semibold leading-6 text-gray-900">Log in <span aria-hidden="true">&rarr;</span></a>
        </div>
      </nav>
      <Dialog as="div" class="lg:hidden" @close="mobileMenuOpen = false" :open="mobileMenuOpen">
        <div class="fixed inset-0 z-50" />
        <DialogPanel class="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div class="flex items-center justify-between">
            <a href="#" class="-m-1.5 p-1.5">
              <span class="sr-only">Your Company</span>
              <img class="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="" />
            </a>
            <button type="button" class="-m-2.5 rounded-md p-2.5 text-gray-700" @click="mobileMenuOpen = false">
              <span class="sr-only">Close menu</span>
              <XMarkIcon class="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div class="mt-6 flow-root">
            <div class="-my-6 divide-y divide-gray-500/10">
              <div class="space-y-2 py-6">
                <a v-for="item in navigation" :key="item.name" :href="item.href" class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">{{ item.name }}</a>
              </div>
              <div class="py-6">
                <a href="#" class="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Log in</a>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header> -->

        <div class="relative isolate px-6 py-24 sm:pt-14 sm:py-10 md:py-10 lg:px-8 lg:py-20">
            <div class="absolute inset-x-0 -top-40 -z-50 transform-gpu overflow-hidden blur-3xl sm:-top-80"
                aria-hidden="true">
                <div v-if="false"
                    class="relative  left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#b5d4b5] to-[#054e03] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                    style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" />
            </div>
            <div class="mx-auto max-w-2xl py-10 sm:py-48 lg:py-30">
                <div class="hidden sm:mb-8 sm:flex sm:justify-center">
                    <div
                        class="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                        Announcing myself, <span class="font-medium">AFNAN SHAKEEL</span>. <a
                            @click="scrollToServiceContent()" class="font-semibold cursor-pointer text-indigo-600"><span
                                class="absolute inset-0" aria-hidden="true" />My Services! <span
                                aria-hidden="true">&rarr;</span></a>
                    </div>
                </div>
                <div class="text-center">
                    <h1 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Here to enrich your business
                        ideas</h1>
                    <p class="mt-6 text-lg leading-8 text-gray-600"> Empower your journey with
                        tech to break down barriers and ignite possibilities. </p>
                    <div class="mt-10 flex items-center justify-center gap-x-6">
                        <a href="/contact"
                            class="rounded-md cursor-pointer bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                            Hire Me</a>
                        <a @click="scrollToworkContent()"
                            class="text-sm cursor-pointer font-semibold leading-6 text-gray-900">
                            My Works! <span aria-hidden="true">→</span></a>
                    </div>
                </div>
            </div>
            <!-- <div class="flex justify-center lg:col-start-2 lg:row-span-2 lg:row-start-1 ">
                <img class="w-[48rem] max-w-full rounded-xl bg-gray-900 shadow-xl ring-8 ring-gray-400/10  "
                    src="https://tailwindui.com/img/component-images/dark-project-app-screenshot.png" alt="" />
            </div> -->


            <!-- about me -->
            <div ref="aboutMeRef">
                <div class=" mx-auto px-6 mt-2 py-10 sm:py-10 md:py-10 md:px-8 lg:py-20">
                    <div class="mx-auto max-w-4xl grid grid-cols-1 sm:gap-x-8 lg:grid-cols-3 ">
                        <div class="flex justify-center mb-6">
                            <img class="w-[24rem] rounded-xl bg-gray-900 shadow-xl ring-8 ring-gray-400/10  "
                                src="https://asxvec4storage.blob.core.windows.net/blog/profile_pic.jpg" alt="" />
                        </div>
                        <div class=" col-span-2">
                            <blockquote
                                class="text-center text-sm font-semibold leading-8 text-gray-900 sm:text-xl sm:leading-9">
                                <p>“I wear two hats - a software developer's logic and a tech enthusiast's spark. Armed with
                                    a
                                    post-graduate degree and 1.5 years of experience, I dive into the depth of cloud and
                                    master a spectrum of technologies into ,
                                    developing and building bridges between ideas and meaningful business products and
                                    solutions. Journey to a brighter future!”</p>
                            </blockquote>
                            <figcaption class="mt-5">
                                <div class="flex justify-center">
                                    <social-media-handlers></social-media-handlers>
                                </div>
                                <!-- <img class="mx-auto h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""> -->
                                <div class="mt-4 flex items-center justify-center space-x-3 text-base">
                                    <div class="font-semibold text-gray-900">Afnan Shakeel</div>
                                    <svg viewBox="0 0 2 2" width="3" height="3" aria-hidden="true" class="fill-gray-900">
                                        <circle cx="1" cy="1" r="1" />
                                    </svg>
                                    <div class="text-gray-600">Developer</div>
                                </div>
                            </figcaption>
                        </div>
                    </div>
                </div>
            </div>
            <!-- about me -->

            <!-- services -->
            <div class="" ref="serviceContentRef">
                <div
                    class="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
                    <div>
                        <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Technical Specifications
                        </h2>
                        <p class="mt-4 text-gray-500">Acquiring diverse range of technical skills and tools empowers your
                            reach for requirements
                            and unlock you to new challenges and dreams tackling complex projects across various domains
                        </p>

                        <dl class="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
                            <div v-for="feature in serviceList" :key="feature.name" class="border-t border-gray-200 pt-4">
                                <dt class="font-medium text-gray-900">{{ feature.name }}</dt>
                                <dd class="mt-2 text-sm text-gray-500">{{ feature.description }}</dd>
                            </div>
                        </dl>
                    </div>
                    <div class="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
                        <!-- <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/480px-JavaScript-logo.png"
                            alt="Walnut card tray filled with cards and card angled in dedicated groove."
                            class="rounded-lg bg-gray-100" /> -->
                        <img src="/images/7.png"
                            alt="Walnut card tray filled with cards and card angled in dedicated groove."
                            class="rounded-lg  " />
                        <img src="/images/12.png"
                            alt="Top down view of walnut card tray with embedded magnets and card groove."
                            class="rounded-lg " />
                        <img src="/images/10.png" alt="Side of walnut card tray with card groove and recessed card area."
                            class="rounded-lg " />
                        <img src="/images/15.png"
                            alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
                            class="rounded-lg  " />
                    </div>
                </div>
            </div>
            <!-- services -->

            <!-- work/projects -->
            <div class="" ref="workContentRef">
                <div class="mx-auto max-w-2xl  py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8">
                    <div>
                        <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Work Projects
                        </h2>
                        <p class="mt-4 text-gray-500">IN DEVELOPMENT. COMING SOON!
                        </p>
                        <div
                            class="max-w-4xl lg:max-w-7xl md:max-w-6xl grid  grid-cols-1 gap-x-6 gap-y-6 md:grid-cols-2 lg:grid-cols-3 ">
                            <div class=" border rounded-md p-2 col-span-1 sm:w-96 md:w-72 lg:w-72 xl:96"
                                v-for="item in repos">
                                <div class="grid grid-cols-1 min-h-full">
                                    <div class="">
                                        <div class="font-medium text-gray-900 py-1">{{ item.name }}</div>
                                        <div class="text-sm text-gray-500">{{ item.description }}</div>
                                        <div  v-if="item.homepage"
                                            class=" flex  py-2"><svg aria-hidden="true" height="14"
                                                viewBox="0 0 16 16" version="1.1" width="14" data-view-component="true"
                                                class="octicon octicon-link">
                                                <path
                                                    d="m7.775 3.275 1.25-1.25a3.5 3.5 0 1 1 4.95 4.95l-2.5 2.5a3.5 3.5 0 0 1-4.95 0 .751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018 1.998 1.998 0 0 0 2.83 0l2.5-2.5a2.002 2.002 0 0 0-2.83-2.83l-1.25 1.25a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042Zm-4.69 9.64a1.998 1.998 0 0 0 2.83 0l1.25-1.25a.751.751 0 0 1 1.042.018.751.751 0 0 1 .018 1.042l-1.25 1.25a3.5 3.5 0 1 1-4.95-4.95l2.5-2.5a3.5 3.5 0 0 1 4.95 0 .751.751 0 0 1-.018 1.042.751.751 0 0 1-1.042.018 1.998 1.998 0 0 0-2.83 0l-2.5 2.5a1.998 1.998 0 0 0 0 2.83Z">
                                                </path>
                                            </svg>
                                            <a target="_blank" class="-mt-1 mx-1 text-sm text-gray-500 hover:text-indigo-500"
                                                :href="item.homepage">{{item.homepage}}</a>
                                        </div>
                                    </div>

                                    <div class="self-end">
                                        <div
                                            class="flex justify-between border-t py-2 max-h-fit border-gray-300 mb-2 bottom-3">
                                            <a
                                                class="flex  ring-1 px-2 py-0.5 ring-black rounded-sm mx-2 min-w-fit hover:bg-gray-800 hover:text-white">

                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                                                    class=" text-red-500" viewBox="0 0 30 30">
                                                    <path
                                                        d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z">
                                                    </path>
                                                </svg>
                                                <span class=" text-nowrap">Clone Repo</span>
                                            </a>
                                            <a :href="item.html_url" target="_blank"
                                                class="flex ring-1  px-2 py-0.5 ring-black rounded-sm mx-2  min-w-fit text-nowrap hover:bg-gray-800 hover:text-white">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                                                    viewBox="0 0 30 30">
                                                    <path
                                                        d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z">
                                                    </path>
                                                </svg>
                                                <span class=" text-nowrap">View Repo</span>
                                            </a>
                                        </div>
                                    </div>

                                </div>

                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <!-- work/projects -->

            <footer ref="socialContactRef" class="relative z-10   pt-20 pb-10 lg:pt-[120px] lg:pb-5">
                <div class="container mx-auto">
                    <div class="flex flex-wrap -mx-4">
                        <div class="w-full px-4 sm:w-2/3 lg:w-3/12">
                            <div class="mb-10">
                                <a href="javascript:void(0)" class="mb-6 inline-block max-w-[160px]">

                                </a>
                                <p class="text-base text-body-color dark:text-dark-6 mb-7">
                                    Get connected with me on my networks!
                                </p>
                                <p class="flex items-center text-sm font-medium text-dark dark:text-white mb-2">
                                    <span class="mr-3 text-primary">
                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <g clip-path="url(#clip0_941_15626)">
                                                <path
                                                    d="M15.1875 19.4688C14.3438 19.4688 13.375 19.25 12.3125 18.8438C10.1875 18 7.84377 16.375 5.75002 14.2813C3.65627 12.1875 2.03127 9.84377 1.18752 7.68752C0.250019 5.37502 0.343769 3.46877 1.43752 2.40627C1.46877 2.37502 1.53127 2.34377 1.56252 2.31252L4.18752 0.750025C4.84377 0.375025 5.68752 0.562525 6.12502 1.18752L7.96877 3.93753C8.40627 4.59378 8.21877 5.46877 7.59377 5.90627L6.46877 6.68752C7.28127 8.00002 9.59377 11.2188 13.2813 13.5313L13.9688 12.5313C14.5 11.7813 15.3438 11.5625 16.0313 12.0313L18.7813 13.875C19.4063 14.3125 19.5938 15.1563 19.2188 15.8125L17.6563 18.4375C17.625 18.5 17.5938 18.5313 17.5625 18.5625C17 19.1563 16.1875 19.4688 15.1875 19.4688ZM2.37502 3.46878C1.78127 4.12503 1.81252 5.46877 2.50002 7.18752C3.28127 9.15627 4.78127 11.3125 6.75002 13.2813C8.68752 15.2188 10.875 16.7188 12.8125 17.5C14.5 18.1875 15.8438 18.2188 16.5313 17.625L18.0313 15.0625C18.0313 15.0313 18.0313 15.0313 18.0313 15L15.2813 13.1563C15.2813 13.1563 15.2188 13.1875 15.1563 13.2813L14.4688 14.2813C14.0313 14.9063 13.1875 15.0938 12.5625 14.6875C8.62502 12.25 6.18752 8.84377 5.31252 7.46877C4.90627 6.81252 5.06252 5.96878 5.68752 5.53128L6.81252 4.75002V4.71878L4.96877 1.96877C4.96877 1.93752 4.93752 1.93752 4.90627 1.96877L2.37502 3.46878Z"
                                                    fill="currentColor" />
                                                <path
                                                    d="M18.3125 8.90633C17.9375 8.90633 17.6563 8.62508 17.625 8.25008C17.375 5.09383 14.7813 2.56258 11.5938 2.34383C11.2188 2.31258 10.9063 2.00008 10.9375 1.59383C10.9688 1.21883 11.2813 0.906333 11.6875 0.937583C15.5625 1.18758 18.7188 4.25008 19.0313 8.12508C19.0625 8.50008 18.7813 8.84383 18.375 8.87508C18.375 8.90633 18.3438 8.90633 18.3125 8.90633Z"
                                                    fill="currentColor" />
                                                <path
                                                    d="M15.2187 9.18755C14.875 9.18755 14.5625 8.93755 14.5312 8.56255C14.3437 6.87505 13.0312 5.56255 11.3437 5.3438C10.9687 5.31255 10.6875 4.93755 10.7187 4.56255C10.75 4.18755 11.125 3.9063 11.5 3.93755C13.8437 4.2188 15.6562 6.0313 15.9375 8.37505C15.9687 8.75005 15.7187 9.0938 15.3125 9.1563C15.25 9.18755 15.2187 9.18755 15.2187 9.18755Z"
                                                    fill="currentColor" />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_941_15626">
                                                    <rect width="20" height="20" fill="white" />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                    </span>
                                    <span>+91 7025171170</span>
                                </p>
                                <p class="flex items-center text-sm font-medium text-dark dark:text-white">
                                    <span class="mr-3 text-primary">
                                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20"
                                            viewBox="0 0 48 48">
                                            <path fill="#4caf50"
                                                d="M45,16.2l-5,2.75l-5,4.75L35,40h7c1.657,0,3-1.343,3-3V16.2z"></path>
                                            <path fill="#1e88e5"
                                                d="M3,16.2l3.614,1.71L13,23.7V40H6c-1.657,0-3-1.343-3-3V16.2z"></path>
                                            <polygon fill="#e53935"
                                                points="35,11.2 24,19.45 13,11.2 12,17 13,23.7 24,31.95 35,23.7 36,17">
                                            </polygon>
                                            <path fill="#c62828"
                                                d="M3,12.298V16.2l10,7.5V11.2L9.876,8.859C9.132,8.301,8.228,8,7.298,8h0C4.924,8,3,9.924,3,12.298z">
                                            </path>
                                            <path fill="#fbc02d"
                                                d="M45,12.298V16.2l-10,7.5V11.2l3.124-2.341C38.868,8.301,39.772,8,40.702,8h0 C43.076,8,45,9.924,45,12.298z">
                                            </path>
                                        </svg>
                                    </span>
                                    <span>afnanshakeel@gmail.com</span>
                                </p>
                            </div>
                            <div class="w-full px-4 sm:w-1/2 lg:w-3/12">
                                <div class="w-full mb-10">
                                    <social-media-handlers></social-media-handlers>
                                </div>
                            </div>
                        </div>



                    </div>
                </div>

            </footer>

            <div class="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
                aria-hidden="true">
                <div class="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#b5d4b5] to-[#054e03] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
                    style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" />
            </div>
        </div>
    </div>
    <!-- ====== Footer Section Start -->

    <!-- ====== Footer Section End -->
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import SocialMediaHandlers from '../components/SocialMediaHandlers.vue';
import { getWorkServices } from '../services/workServices.db.ts'
import { getRepos } from '../services/github.repos.ts';
onMounted(() => {
    fetchWorkServices();
    fetchRepos();
})

const serviceList = ref()
async function fetchWorkServices() {
    serviceList.value = await getWorkServices()
    console.log(serviceList.value)
}

const repos = ref()
async function fetchRepos() {
    repos.value = await getRepos();
}
// const features = [
//     { name: 'Web Development', description: 'Skilled in both backend and frontend web technologies like Node.js, Django, Angular, Vue.js' },
//     { name: 'UI/UX', description: 'Practice in using UI utilites and frameworks like Bootstrap, Vuetify, Material Design and Tailwind CSS' },
//     { name: 'Data Science', description: 'Manipulalte and analyse datasets using Python. Manintain large datasets. Perform Text Classification and Clustering.' },
//     { name: 'Web crawling and automation', description: 'Perform web scraping tasks and web automation.' },
//     { name: 'Cloud Services', description: 'Use of various cloud services from AWS, Azure and Google. Developing Image to Text Analysis tools and Speech to Text or Text to Speech (TTS and STT) tools.' },
//     { name: 'Host/Deploy', description: 'Firebase deployment and hosting for small applications. Amazon EC2 for heavy applications and for easy project management' },
//     { name: 'Mobile Apps', description: 'PWA (Progressive Web Apps) using frameworks like Angular and Vue.js \n AppSheet development, a low code mobile application tool by Google' },
// ]

// const contentImage =  ref('https://asxvec4storage.blob.core.windows.net/blog/profile_pic.jpg')
const serviceContentRef = ref()
function scrollToServiceContent() {
    serviceContentRef.value.scrollIntoView({ behavior: 'smooth' })
}
const workContentRef = ref()
function scrollToworkContent() {
    workContentRef.value.scrollIntoView({ behavior: 'smooth' })
}
const socialContactRef = ref()
// function scrollToSocialContact() {
//     socialContactRef.value.scrollIntoView({ behavior: 'smooth' })
// }
const aboutMeRef = ref()
// function scrollToaboutMe() {
//     aboutMeRef.value.scrollIntoView({ behavior: 'smooth' })
// }
</script>