<script lang="ts">
  import { onMount } from 'svelte';
  
  import firebase from '$lib/stores/firebase';
  
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "firebase/app";
  import { getAuth, onIdTokenChanged, signOut } from "firebase/auth";

  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyBFnkIpee766wZ5eV1npZwJpr6AVRpR_KA",
    authDomain: "istrav.firebaseapp.com",
    projectId: "istrav",
    storageBucket: "istrav.appspot.com",
    messagingSenderId: "479255246086",
    appId: "1:479255246086:web:7253f6886c8b7a55075a87",
    measurementId: "G-438HF3486Z"
  };

  onMount(() => {
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);
  
    // sign out of firebase
    signOut(auth)
      .then(() => {
        // sign out of istrav-global
        firebase.set('')
        window.localStorage.removeItem('token')
        window.location.href = '/'
      });
  })
</script>

<svelte:head>
	<title>Logout - Information - isTrav</title>
	<meta name="description" content="Travis Burandt" />
</svelte:head>