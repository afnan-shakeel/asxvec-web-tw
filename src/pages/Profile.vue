<template>
  <div class="relative isolate overflow-hidden dark:bg-black bg-white  px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0 bg-opacity-40 ring-1 dark:ring-4 ring-blue-400 ring-opacity-25 dark:ring-green-950 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm">
    <div class="absolute inset-0 -z-10 overflow-hidden">
      <svg class="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]" aria-hidden="true">
        <defs>
          <!-- <pattern id="e813992c-7d03-4cc4-a2bd-151760b470a0" width="200" height="200" x="50%" y="-1" patternUnits="userSpaceOnUse">
            <path d="M100 200V.5M.5 .5H200" fill="none" />
          </pattern> -->
        </defs>
        <svg x="50%" y="-1" class="overflow-visible fill-black">
          <path d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z" stroke-width="0" />
        </svg>
        <rect width="100%" height="100%" stroke-width="0" fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)" />
      </svg>
    </div>
    <div class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
      <div class="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
        <div class="lg:pr-4">
          <div class="lg:max-w-lg">
            <p class="text-base font-semibold leading-7 text-indigo-600">Hoy there !</p>
            <h1 class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Let Me Introduce Me..</h1>
            <p class="mt-6 text-xl leading-8 text-gray-300">Capitan of this ship. Also called ser commander general but i prefer Afnan Shakeel. You read it wrong! There's a captain in there. Captain Afnan Shakeel. </p>
          </div>
        </div>
      </div>
      <div class="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
        <img class="w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]" :src="contentImage" alt="" />
      </div>
      <div class="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
        <div class="lg:pr-4">
          <div class="max-w-xl text-base leading-7 text-gray-500 lg:max-w-lg">
            <p class="opacity-90">Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris semper sed amet vitae sed turpis id. Id dolor praesent donec est. Odio penatibus risus viverra tellus varius sit neque erat velit. Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris semper sed amet vitae sed turpis id.</p>
            <ul role="list" class="mt-8 space-y-8 text-gray-500">
              <li class="flex gap-x-3 opacity-80">
                <!-- <CloudArrowUpIcon class="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" /> -->
                <span><strong class="font-semibold text-green-800">Black Pearl.</strong> The Pearl is not an ordinary.. Sorry My pearl is not any ordinary ship. Neither the magics nor The Whites have ever been able to outplay her. Niegh uncatchable! And she can sit in a bottle too!</span>
              </li>
              <li class="flex gap-x-3 opacity-70">
                <!-- <LockClosedIcon class="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" /> -->
                <span><strong class="font-semibold text-green-800">Barbossa.</strong> Poor friend has been hurting me even in death. Voyaging to bring him back</span>
              </li>
              <li class="flex gap-x-3 opacity-50">
                <!-- <ServerIcon class="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" /> -->
                <span><strong class="font-semibold text-green-800">Jar of Dirt.</strong> Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.</span>
              </li>
            </ul>
            <p class="mt-8 text-gray-500 opacity-30">That's who me the captain is.. I see you wanna know more details of me the man boarding the ship but me seems very busy in the misty witchy piraty world. Closer details and whereabouts of me the capitan need the Shevri spell to get mine attention. Find out the magic spell and items. Item include a variety of sea flowers found beneath the pacific ocean around the Colombian sunken ship wreck cove. Cast the spell and perform the ritaul of Shevri with a Hammer shark incarnated with the plucked variety flowers. Remember the varietiness of the flowers affect the spell. Lastly cast the spell on to the screen and be ready to meet me ..!  </p>
            <h2 class="mt-16 text-2xl font-bold tracking-tight text-black opacity-50">Did Shevriv Whisper? </h2>
            <p class="mt-6 text-gray-500 opacity-20">I know she did coz you are reading this, if not you cannot see whats going on here. </p>
            <span class="mt-6 text-gray-500 opacity-10"> Only the chosen once by the lady Shevriv itself gets this spell casted.. </span>
            <span class="mt-6 text-gray-500 opacity-5"> I had in my bell you are a chosen one. Now let me </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
  
  <script setup lang="ts">
  import {ref} from 'vue'
  const contentImage =  ref('https://asxvec4storage.blob.core.windows.net/blog/profile_pic.jpg')

  </script>