<!--
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
-->
<template>
    <div class="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div class="sm:mx-auto sm:w-full sm:max-w-sm">
            <img class="mx-auto h-10 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                alt="Your Company" />
            <h2 class="mt-10 text-center text-2xl xl:text-3xl font-semibold">Sign up with
            </h2>
        </div>

        <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <!-- <h1 class="text-2xl xl:text-3xl font-meduim">
                Sign up
            </h1> -->
            <div class="flex justify-center">
                <a @click="googleSignIn()"
                    class="cursor-pointer text-gray-500 hover:text-gray-900 dark:hover:text-white dark:text-gray-400">
                    <svg class="h-6 w-6 mr-4" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                        width="800px" height="800px" viewBox="-0.5 0 48 48" version="1.1">
                        <title>Google-color</title>
                        <desc>Created with Sketch.</desc>
                        <defs> </defs>
                        <g id="Icons" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                            <g id="Color-" transform="translate(-401.000000, -860.000000)">
                                <g id="Google" transform="translate(401.000000, 860.000000)">
                                    <path
                                        d="M9.82727273,24 C9.82727273,22.4757333 10.0804318,21.0144 10.5322727,19.6437333 L2.62345455,13.6042667 C1.08206818,16.7338667 0.213636364,20.2602667 0.213636364,24 C0.213636364,27.7365333 1.081,31.2608 2.62025,34.3882667 L10.5247955,28.3370667 C10.0772273,26.9728 9.82727273,25.5168 9.82727273,24"
                                        id="Fill-1" fill="#FBBC05"> </path>
                                    <path
                                        d="M23.7136364,10.1333333 C27.025,10.1333333 30.0159091,11.3066667 32.3659091,13.2266667 L39.2022727,6.4 C35.0363636,2.77333333 29.6954545,0.533333333 23.7136364,0.533333333 C14.4268636,0.533333333 6.44540909,5.84426667 2.62345455,13.6042667 L10.5322727,19.6437333 C12.3545909,14.112 17.5491591,10.1333333 23.7136364,10.1333333"
                                        id="Fill-2" fill="#EB4335"> </path>
                                    <path
                                        d="M23.7136364,37.8666667 C17.5491591,37.8666667 12.3545909,33.888 10.5322727,28.3562667 L2.62345455,34.3946667 C6.44540909,42.1557333 14.4268636,47.4666667 23.7136364,47.4666667 C29.4455,47.4666667 34.9177955,45.4314667 39.0249545,41.6181333 L31.5177727,35.8144 C29.3995682,37.1488 26.7323182,37.8666667 23.7136364,37.8666667"
                                        id="Fill-3" fill="#34A853"> </path>
                                    <path
                                        d="M46.1454545,24 C46.1454545,22.6133333 45.9318182,21.12 45.6113636,19.7333333 L23.7136364,19.7333333 L23.7136364,28.8 L36.3181818,28.8 C35.6879545,31.8912 33.9724545,34.2677333 31.5177727,35.8144 L39.0249545,41.6181333 C43.3393409,37.6138667 46.1454545,31.6490667 46.1454545,24"
                                        id="Fill-4" fill="#4285F4"> </path>
                                </g>
                            </g>
                        </g>
                    </svg>
                </a>
                <a 
                    class="cursor-pointer text-gray-500 hover:text-gray-900 dark:hover:text-white dark:text-gray-400">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="h-6 w-6 mr-4 text-gray-700"
                        viewBox="0 0 16 16">
                        <title>Github</title>
                        <path
                            d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z">
                        </path>
                    </svg>
                </a>
                <a @click="otpSignIn()" class="cursor-pointer text-gray-500 hover:text-gray-900 dark:hover:text-white dark:text-gray-400">
                    <svg class="h-6 w-6 mr-2" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                        <g id="SVGRepo_iconCarrier">
                            <path
                                d="M6 5.5H9M7.5 5.5V10M10.5 10V7.5M10.5 7.5V5.5H11.5C12.0523 5.5 12.5 5.94772 12.5 6.5C12.5 7.05228 12.0523 7.5 11.5 7.5H10.5ZM4.5 6.5V8.5C4.5 9.05228 4.05228 9.5 3.5 9.5C2.94772 9.5 2.5 9.05228 2.5 8.5V6.5C2.5 5.94772 2.94772 5.5 3.5 5.5C4.05228 5.5 4.5 5.94772 4.5 6.5ZM1.5 0.5H13.5C14.0523 0.5 14.5 0.947715 14.5 1.5V13.5C14.5 14.0523 14.0523 14.5 13.5 14.5H1.5C0.947716 14.5 0.5 14.0523 0.5 13.5V1.5C0.5 0.947716 0.947715 0.5 1.5 0.5Z"
                                stroke="#000000"></path>
                        </g>
                    </svg>
                </a>
                <!-- <button type="button" @click="devSignIn()"
                    class="rounded-md px-3 py-1.5 text-sm font-semibold leading-6 bg-sky-600 text-white shadow-sm hover:bg-sky-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600">
                    Dev Login - {{ env }} </button> -->
            </div>

            <div class="my-6 border-b text-center">
                <div
                    class="leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transform translate-y-1/2">
                    Or sign up with e-mail
                </div>
            </div>


            <form class="space-y-6" action="#" method="POST">

                <div>
                    <!-- <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Username (email)</label> -->
                    <div class="mt-2">
                        <input id="email" name="email" type="email" autocomplete="email" required
                            v-model="loginInput.username" placeholder="email"
                            class="w-full px-6 py-2 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white" />
                    </div>
                </div>

                <div>
                    <!-- <div class="flex items-center justify-between">
                        <label for="password" class="block text-sm font-medium leading-6 text-gray-900">Password</label>
                    </div> -->
                    <div class="mt-2">
                        <input id="password" name="password" type="password" autocomplete="current-password" required
                            v-model="loginInput.passcode" placeholder="password"
                            class="w-full px-6 py-2 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white" />
                        <!-- <div class="text-sm">
                            <a href="#" class="font-semibold text-sky-700 hover:text-sky-600">Forgot password?</a>
                        </div> -->
                    </div>
                </div>

                <div>
                    <button type="button" @click="signIn()"
                        class="flex w-full justify-center rounded-md px-3 py-1.5 text-sm font-semibold leading-6 bg-sky-600 text-white shadow-sm hover:bg-sky-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600">Sign
                        in</button>
                </div>
                <div
                    class="flex leading-none px-2 text-sm text-gray-600 tracking-wide font-medium bg-white transform translate-y-1/2 ">
                    Sneak in anonymous (limited access only)
                    <svg @click="devSignIn()" class="cursor-pointer w-6 h-6 ml-2" version="1.1" id="_x32_"
                        xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512"
                        xml:space="preserve" fill="#000000">
                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                        <g id="SVGRepo_iconCarrier">
                            <g>
                                <path class="st0"
                                    d="M103.259,217.032c0-3.8-3.08-6.888-6.88-6.888c-3.8,0-6.889,3.088-6.889,6.888c0,3.8,3.088,6.881,6.889,6.881 C100.179,223.913,103.259,220.832,103.259,217.032z">
                                </path>
                                <path class="st0"
                                    d="M138.696,210.144c-3.809,0-6.889,3.088-6.889,6.888c0,3.8,3.08,6.881,6.889,6.881c3.8,0,6.88-3.08,6.88-6.881 C145.575,213.232,142.495,210.144,138.696,210.144z">
                                </path>
                                <circle class="st0" cx="106.156" cy="259.34" r="5.066"></circle>
                                <path class="st0"
                                    d="M128.554,254.274c-2.797,0-5.066,2.268-5.066,5.066c0,2.797,2.269,5.066,5.066,5.066 c2.798,0,5.075-2.269,5.075-5.066C133.629,256.542,131.352,254.274,128.554,254.274z">
                                </path>
                                <path class="st0"
                                    d="M495.662,417.025c-12.565-7.855-67.685-53.314-67.685-53.314s-4.71-32.977-10.998-78.51 c-5.777-41.888-19.5-63.794-21.66-67.038c6.552-14.743,10.088-30.279,10.078-46.116c0.01-19.09-5.075-38.417-15.199-56.924 c-6.56-12.01-10.214-24.594-10.188-35.665c0.101-11.654,3.536-21.468,12.266-30.325c6.287-6.278,14.406-9.358,22.652-9.377 c8.246,0.019,16.365,3.099,22.652,9.377c4.493,4.501,6.67,10.26,6.688,16.147c-0.008,5.886-2.195,11.645-6.688,16.146 c-5.467,5.468-5.467,14.325,0,19.792c5.468,5.468,14.325,5.468,19.792,0c9.896-9.886,14.908-22.981,14.889-35.938 c0.018-12.958-4.993-26.052-14.889-35.938c-11.691-11.691-27.127-17.595-42.444-17.578c-15.318-0.018-30.754,5.878-42.444,17.578 c-14.233,14.105-20.576,32.367-20.466,50.116c0.027,17.04,5.313,33.797,13.604,49.06c8.11,14.889,11.773,29.386,11.782,43.529 c-0.009,10.187-2.141,20.265-5.977,30.234c-13.742-6.369-33.459-12.147-59.484-11.363c-29.332,0.884-62.208,1.54-90.62,3.837 c-0.319-19.619-16.275-35.438-35.966-35.438c-8.055,0-15.472,2.679-21.468,7.153c-12.21-11.199-28.484-18.042-46.354-18.042 c-17.878,0-34.152,6.843-46.362,18.042c-5.996-4.474-13.413-7.153-21.468-7.153c-19.883,0-36.011,16.119-36.011,36.011 c0,19.892,16.128,36.012,36.011,36.012l0.72-0.038c2.46,11.6,7.846,22.116,15.345,30.736l-0.036,1.494 c0,28.613,23.19,51.803,51.802,51.803c6.816,0,13.313-1.348,19.273-3.746l-1.586,3.673c1.668,0.747,2.643,1.193,2.643,1.193 s-28.257,68.304-32.968,75.367c-6.66,9.987-30.644,38.59-62.81,60.44c-10.716,7.298-26.298,5.504-31.4,7.855 c-20.411,9.422-6.443,18.916-0.164,18.916c6.278,0,36.285,3.072,47.264-0.073c10.998-3.144,78.3-69.79,78.3-69.79l31.784-56.75 l24.165,46.463l-9.422,73.006c0,0,16.484,25.916,28.257,23.555c11.782-2.35-2.351-21.194-2.351-30.607 c0-9.422,14.133-77.726,14.133-77.726l-21.076-57.962c23.582-1.623,62.09-4.155,92.324-5.641l-21.887,33.878 c-2.633,4.082-4.109,8.821-4.256,13.678l-2.916,96.196c0,0-15.7,12.566-21.978,14.133c-6.288,1.567,3.144,17.268,3.144,17.268 l18.834,1.576l23.556-12.556l12.565-97.354l49.998-48.759c9.924,19.126,21.195,45.998,21.195,45.998 c3.618,6.935,9.404,12.484,16.493,15.801l92.87,43.482c0,0-4.702,25.122-14.133,25.122c-9.413,0-10.98,12.566-9.413,17.268 c1.568,4.72,10.989,4.72,20.411,4.72c9.421,0,9.421-1.577,10.989-6.279c1.568-4.72,14.134-25.122,20.411-40.832 C516.074,431.149,508.219,424.871,495.662,417.025z M49.015,213.761c-9.878-0.365-17.778-8.466-17.778-18.434 c0-10.196,8.274-18.47,18.47-18.47c3.754,0,7.235,1.13,10.151,3.052C53.506,189.751,49.598,201.314,49.015,213.761z M117.537,300.399c-12.128,0-22.862-5.886-29.578-14.926h59.147C140.391,294.513,129.666,300.399,117.537,300.399z M150.342,241.953c3.735,6.98,6.962,16.566,4.975,26.763l-2.397,5.558h-34.28h-2.205H81.298 c-4.756-12.228-0.974-24.083,3.436-32.321c-9.377-4.392-15.882-13.886-15.882-24.922c0-15.207,12.328-27.536,27.528-27.536 c8.501,0,16.11,3.863,21.158,9.923c5.048-6.06,12.648-9.923,21.158-9.923c15.199,0,27.528,12.329,27.528,27.536 C166.224,228.067,159.717,237.561,150.342,241.953z M203.711,196.494c-6.516,0.784-12.784,1.64-18.379,2.715l-1.066,2.469 c-1.804-7.836-4.82-15.208-9.048-21.769c2.906-1.922,6.396-3.052,10.142-3.052c10.205,0,18.47,8.274,18.47,18.47 C203.83,195.728,203.738,196.102,203.711,196.494z">
                                </path>
                            </g>
                        </g>
                    </svg>
                </div>

            </form>

            <p class="mt-10 text-center text-sm text-gray-500">
                Not a member?
                {{ ' ' }}
                Avail more access by<a href="#" class="font-semibold leading-6 text-sky-700 hover:text-sky-600"> registering
                    your mail </a>
                or sign in using
                <a href="#" class="font-semibold leading-6 text-sky-700 hover:text-sky-600"> Google</a>
            </p>
        </div>
        <TransitionRoot :show="true" v-if="isOtpOpen" as="template">
            <Dialog as="div" class="relative z-10">
                <TransitionChild as="template" enter="duration-300 ease-out" enter-from="opacity-0" enter-to="opacity-100"
                    leave="duration-200 ease-in" leave-from="opacity-100" leave-to="opacity-0">
                    <div class="fixed inset-0 bg-black/25" />
                </TransitionChild>

                <div class="fixed inset-0 overflow-y-auto">
                    <div class="flex min-h-full items-center justify-center p-4 text-center">
                        <TransitionChild as="template" enter="duration-300 ease-out" enter-from="opacity-0 scale-95"
                            enter-to="opacity-100 scale-100" leave="duration-200 ease-in" leave-from="opacity-100 scale-100"
                            leave-to="opacity-0 scale-95">
                            <DialogPanel
                                class="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                                <!-- <DialogTitle as="h3" class="text-lg font-medium leading-6 text-gray-900">
                                    OTP Verification
                                </DialogTitle> -->
                                <div class="mt-2">
                                    <!-- <p class="text-sm text-gray-500">
                                        Enter Your Mobile Number To verify using OTP
                                    </p> -->
                                    <div id="firebaseui-auth-container"></div>

                                </div>

                                <div class="mt-4">
                                    <button type="button"
                                        class="inline-flex justify-end rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                                        @click="closeOtpModal">
                                        Cancel
                                    </button>
                                </div>
                            </DialogPanel>
                        </TransitionChild>
                    </div>
                </div>
            </Dialog>
        </TransitionRoot>
        <div id="test"></div>
    </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router';
import {
    TransitionRoot,
    TransitionChild,
    Dialog,
    DialogPanel,
} from '@headlessui/vue'
import { getAuth, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from '@firebase/auth';
import * as firebaseui from 'firebaseui'
import firebase from 'firebase/compat/app'


const router = useRouter()
const loginInput = ref({
    username: null,
    passcode: null
})

const signIn = async () => {
    if (!loginInput.value.username || !loginInput.value.passcode) { window.alert('Username and Password Required'); return }

    await signInWithEmailAndPassword(getAuth(), loginInput.value.username, loginInput.value.passcode)
        .then((data: any) => {
            console.log(data)
            let auth = { "authProvider": (data.user.providerData.length > 0) && JSON.stringify(data.user.providerData[0]), "isAnonymous": data.user.isAnonymous, "token": data.user.accessToken }
            sessionStore(auth)
            router.push("/dashboard")
        })
        .catch((err: any) => {
            console.error(err)
            return
        })
}

const googleSignIn = () => {
    // if (!loginInput.value.username || !loginInput.value.passcode) return
    var provider = new GoogleAuthProvider();
    const auth = getAuth();
    signInWithPopup(auth, provider)
        .then((data: any) => {
            // This gives you a Google Access Token. You can use it to access the Google API.
            const credential: any = GoogleAuthProvider.credentialFromResult(data);
            const token = credential.accessToken;
            const user = data.user;
            let auth = { "authProvider": (data.user.providerData.length > 0) && JSON.stringify(data.user.providerData[0]), "isAnonymous": data.user.isAnonymous, "token": data.user.accessToken }
            sessionStore(auth)
            console.log(token, user)
            router.push("/dashboard")

        }).catch((error: any) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            const email = error.customData.email;
            const credential = GoogleAuthProvider.credentialFromError(error);
            console.log(errorCode, errorMessage, email, credential)
        });
}

// const anonSignIn = () => {
//     // if (!loginInput.value.username || !loginInput.value.passcode) return
//     const auth = getAuth();
//     signInAnonymously(auth)
//         .then((data: any) => {
//             console.log(data)
//             let auth = { "authProvider": (data.user.providerData.length > 0) && JSON.stringify(data.user.providerData[0]), "isAnonymous": data.user.isAnonymous, "token": data.user.accessToken }
//             sessionStore(auth)
//             router.push("/dashboard")
//         })
//         .catch((error: any) => {
//             const errorCode = error.code;
//             const errorMessage = error.message;
//             console.log(errorCode, errorMessage)
//         });
// }
const isOtpOpen = ref(false)

const firebaseAuthUi = ref()
async function openOtpModal() {
    isOtpOpen.value = true
}
function closeOtpModal() {
    isOtpOpen.value = false
    firebaseAuthUi.value?.delete()
}

const otpSignIn = async () => {
    await openOtpModal()
    const firebaseConfig = {
        apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
        authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
        projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
        storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
        messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGE_SENDER_ID,
        appId: import.meta.env.VITE_FIREBASE_APP_ID,
        measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID
    }
    firebase.initializeApp(firebaseConfig);
    // firebaseAuthUi.value = new firebaseui.auth.AuthUI(firebase.auth());
    firebaseAuthUi.value = firebaseui.auth.AuthUI.getInstance() || new firebaseui.auth.AuthUI(firebase.auth());
    firebaseAuthUi.value.start('#firebaseui-auth-container', {
        signInFlow: 'popup',
        signInOptions: [
            {
                provider: firebase.auth.PhoneAuthProvider.PROVIDER_ID,
                recaptchaParameters: {
                    type: 'image', // 'audio'
                    size: 'invisible', // 'invisible' or 'compact'
                    badge: 'bottomright' //' bottomright' or 'inline' applies to invisible.
                },
                defaultCountry: 'IN',
                defaultNationalNumber: '1234567890',
                loginHint: '+11234567890'
            }
        ],
        signInSuccessUrl: window.location.origin + '/profile',
        callbacks: {
            signInSuccessWithAuthResult: function (authResult: any, redirectUrl: any) {
                console.log('otp signed', authResult, redirectUrl)
                firebaseAuthUi.value?.delete()
                return true
            },
        },
    });
}



const devSignIn = () => {
    console.log(import.meta.env)
    window.sessionStorage.setItem('auth', '')
    window.sessionStorage.setItem('token', 'xypofd97f98d6v8768vs8xc-8767a9jc98xvv76xc5v76zd8s67d87vd')
    window.sessionStorage.setItem('isAnonymous', 'true')
    router.push("/blog")
}

const sessionStore = (data: any) => {
    window.sessionStorage.clear()
    if (data.authProvider) window.sessionStorage.setItem('auth', data.authProvider)
    if (data.token) window.sessionStorage.setItem('token', data.token)
    if (data.isAnonymous) window.sessionStorage.setItem('isAnonymous', data.isAnonymous)
}


</script>
<style></style>