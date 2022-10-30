const { initializeApp } = require('firebase/app')

const config = {
    apiKey: "AIzaSyAPWNy917cyCzb1rnd-I0HyCX7VPxsu4t0",
    authDomain: "api-node-5b08b.firebaseapp.com",
    projectId: "api-node-5b08b",
    storageBucket: "api-node-5b08b.appspot.com",
    messagingSenderId: "775687220502",
    appId: "1:775687220502:web:a7c75168807a89f71bf437"
}

const firebase = initializeApp(config)

module.exports = firebase