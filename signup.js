// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBui-jE_nTizRmOp9aTZ7IxUynI8o6w-FI",
  authDomain: "login-signup-project-a290f.firebaseapp.com",
  databaseURL: "https://login-signup-project-a290f-default-rtdb.firebaseio.com",
  projectId: "login-signup-project-a290f",
  storageBucket: "login-signup-project-a290f.appspot.com",
  messagingSenderId: "267454411559",
  appId: "1:267454411559:web:953efcfadbb1468a73ef02"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

var name = document.getElementById('name');
var email = document.getElementById('email');
var password = document.getElementById('password');

window.signup = function(e){
    e.preventDefault();

    var obj = {
        name : name.value,
        email : email.value,
        password : password.value
    }
    createUserWithEmailAndPassword(auth, obj.email, obj.password)
    .then(function(success) {
        alert("Success!");
    })
    .catch(function(error) {
        alert("Error : "+error);
    })
    console.log(obj)
}