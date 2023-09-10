import { createApp } from 'vue'

import App from './App.vue'
// import './style.css'
import './index.css'
import router from './router'

import {initializeApp} from 'firebase/app';
const firebaseConfig = {
    apiKey: "AIzaSyBNBLxM6aoM1v9GO-4CzziSf4hcDrgDWGs",
    authDomain: "asxvec.firebaseapp.com",
    projectId: "asxvec",
    storageBucket: "asxvec.appspot.com",
    messagingSenderId: "236890820692",
    appId: "1:236890820692:web:42a1858ccb987b2664ddc1",
    measurementId: "G-8F7R6CD0C4"
  }
initializeApp(firebaseConfig)

const app = createApp(App)
app.use(router)
app.mount('#app')
