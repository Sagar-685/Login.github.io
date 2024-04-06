import { initializeApp } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-analytics.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-auth.js";
const firebaseConfig = {
    apiKey: "AIzaSyD3N_BHsYWK1V89grUdiAZET7K39Z1mzuo",
    authDomain: "login-with-firebase-5601a.firebaseapp.com",
    databaseURL: "https://login-with-firebase-5601a-default-rtdb.firebaseio.com",
    projectId: "login-with-firebase-5601a",
    storageBucket: "login-with-firebase-5601a.appspot.com",
    messagingSenderId: "364936905590",
    appId: "1:364936905590:web:335f785ead29d2ffc97057",
    measurementId: "G-9JEZCSWMP3"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-auth.js";

const loginForm = document.getElementById('loginForm');

loginForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  
  try {
    const auth = getAuth();
    await signInWithEmailAndPassword(auth, email, password);
    alert('Login successful!');
    window.location.href = 'profile.html'; // Redirect to profile page
  } catch (error) {
    alert(error.message);
  }
});
