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
                    <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Email address</label>
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
                            <a href="#" class="font-semibold text-indigo-600 hover:text-indigo-500">Forgot password?</a>
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
                        class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign
                        in</button>
                </div>
                <div>
                    <button type="button" @click="googleSignIn()"
                        class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                        Google Sign in</button>
                </div>
                <div>
                    <button type="button" @click="anonSignIn()"
                        class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                        Sneak in anonymous...</button>
                </div>
                <!-- <div>
                    <button type="button" @click="authenticate()"
                        class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                        Authing</button>
                </div> -->
            </form>

            <p class="mt-10 text-center text-sm text-gray-500">
                Not a member?
                {{ ' ' }}
                <a href="#" class="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">Start a 14 day free
                    trial</a>
            </p>
        </div>
    </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router';
import { getAuth, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, signInAnonymously } from '@firebase/auth';

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
            let auth = { "authProvider": (data.user.providerData.length > 0) &&  JSON.stringify(data.user.providerData[0]), "isAnonymous": data.user.isAnonymous, "token": data.user.accessToken }
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
            let auth = { "authProvider": (data.user.providerData.length > 0) &&  JSON.stringify(data.user.providerData[0]), "isAnonymous": data.user.isAnonymous, "token": data.user.accessToken }
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
            let auth = { "authProvider": (data.user.providerData.length > 0) &&  JSON.stringify(data.user.providerData[0]), "isAnonymous": data.user.isAnonymous, "token": data.user.accessToken }
            sessionStore(auth)
            router.push("/dashboard")
        })
        .catch((error: any) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ...
            console.log(errorCode, errorMessage)
        });
}

// const authenticate = () => {
//     console.log('authenticate')
//     const auth: any = getAuth();
//     getIdToken(auth.currentUser)
//         .then((idToken: any) => {
//             // idToken can be passed back to server.
//             console.log('idToken', idToken)
//         })
//         .catch((error: any) => {
//             console.log('err', error)
//         });
// }

const sessionStore = (data: any) => {
    window.sessionStorage.clear()
    if (data.authProvider) window.sessionStorage.setItem('auth', data.authProvider)
    if (data.token) window.sessionStorage.setItem('token', data.token)
    if (data.isAnonymous) window.sessionStorage.setItem('isAnonymous', data.isAnonymous)
}
</script>
<style></style>  