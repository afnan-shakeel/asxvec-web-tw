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
            <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Sign in to Black Pearl
            </h2>
        </div>

        <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form class="space-y-6" action="#" method="POST">
                <div>
                    <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Username</label>
                    <div class="mt-2">
                        <input id="email" name="email" type="email" autocomplete="email" required
                            v-model="loginInput.username"
                            class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                    </div>
                </div>

                <div>
                    <div class="flex items-center justify-between">
                        <label for="password" class="block text-sm font-medium leading-6 text-gray-900">Password</label>
                        <div class="text-sm">
                            <a href="#" class="font-semibold text-sky-700 hover:text-sky-600">Forgot password?</a>
                        </div>
                    </div>
                    <div class="mt-2">
                        <input id="password" name="password" type="password" autocomplete="current-password" required
                            v-model="loginInput.passcode"
                            class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                    </div>
                </div>

                <div>
                    <button type="button" @click="signIn()"
                        class="flex w-full justify-center rounded-md px-3 py-1.5 text-sm font-semibold leading-6 bg-sky-600 text-white shadow-sm hover:bg-sky-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600">Sign
                        in</button>
                </div>
                <div>
                    <button type="button" @click="otpSignIn()"
                    class="flex w-full justify-center rounded-md px-3 py-1.5 text-sm font-semibold leading-6 bg-sky-600 text-white shadow-sm hover:bg-sky-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600">
                    Login with OTP</button>
                </div>
                <div>
                    <button type="button" @click="googleSignIn()"
                        class="flex w-full justify-center rounded-md px-3 py-1.5 text-sm font-semibold leading-6 bg-sky-600 text-white shadow-sm hover:bg-sky-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600">
                        Google Sign in</button>
                </div>
                <div v-if="env == 'DEV'">
                    <button type="button" @click="devSignIn()"
                        class="flex w-full justify-center rounded-md px-3 py-1.5 text-sm font-semibold leading-6 bg-sky-600 text-white shadow-sm hover:bg-sky-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600">
                        Dev Login - {{ env }} </button>
                </div>
            </form>

            <p class="mt-10 text-center text-sm text-gray-500">
                Not a member?
                {{ ' ' }}
                <a href="#" class="font-semibold leading-6 text-sky-700 hover:text-sky-600">register your mail </a>
                or
                <a href="#" class="font-semibold leading-6 text-sky-700 hover:text-sky-600">sign in using Google</a>
            </p>
        </div>
        <div id="firebaseui-auth-container"></div>
    </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router';
import { getAuth, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, signInAnonymously, RecaptchaVerifier } from '@firebase/auth';
import * as firebaseui from 'firebaseui'
import firebase from 'firebase/compat/app'

const env = ref(import.meta.env.VITE_ENV)
const router = useRouter()
const loginInput = ref({
    username: null,
    passcode: null
})

const signIn = async () => {
    if (!loginInput.value.username || !loginInput.value.passcode) return

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

const anonSignIn = () => {
    // if (!loginInput.value.username || !loginInput.value.passcode) return
    const auth = getAuth();
    signInAnonymously(auth)
        .then((data: any) => {
            console.log(data)
            let auth = { "authProvider": (data.user.providerData.length > 0) && JSON.stringify(data.user.providerData[0]), "isAnonymous": data.user.isAnonymous, "token": data.user.accessToken }
            sessionStore(auth)
            router.push("/dashboard")
        })
        .catch((error: any) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage)
        });
}

const otpSignIn = () => {
    const firebaseConfig = {
        apiKey: "AIzaSyBNBLxM6aoM1v9GO-4CzziSf4hcDrgDWGs",
        authDomain: "asxvec.firebaseapp.com",
        projectId: "asxvec",
        storageBucket: "asxvec.appspot.com",
        messagingSenderId: "236890820692",
        appId: "1:236890820692:web:42a1858ccb987b2664ddc1",
        measurementId: "G-8F7R6CD0C4"
    }
    firebase.initializeApp(firebaseConfig);
    var ui = new firebaseui.auth.AuthUI(firebase.auth());
    ui.start('#firebaseui-auth-container', {
        signInFlow: 'popup',
        signInOptions: [
            {
                provider: firebase.auth.PhoneAuthProvider.PROVIDER_ID,
                recaptchaParameters: {
                    type: 'image', // 'audio'
                    size: 'invisible', // 'invisible' or 'compact'
                    badge: 'bottomleft' //' bottomright' or 'inline' applies to invisible.
                },
                defaultCountry: 'IN', 
                defaultNationalNumber: '1234567890',
                loginHint: '+11234567890'
            }
        ],
        signInSuccessUrl: window.location.origin + '/profile',
        callbacks: {
                signInSuccessWithAuthResult: function(authResult: any, redirectUrl: any) {
                    console.log('otp signed', authResult, redirectUrl)
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
}

const sessionStore = (data: any) => {
    window.sessionStorage.clear()
    if (data.authProvider) window.sessionStorage.setItem('auth', data.authProvider)
    if (data.token) window.sessionStorage.setItem('token', data.token)
    if (data.isAnonymous) window.sessionStorage.setItem('isAnonymous', data.isAnonymous)
}
</script>
<style></style>  