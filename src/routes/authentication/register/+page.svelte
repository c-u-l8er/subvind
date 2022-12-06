<script lang="ts">
  import { onMount } from 'svelte';

  import firebase from '$lib/stores/firebase';
  
  import Register from '$lib/Register.svelte'

  // Import the functions you need from the SDKs you need
  import { initializeApp } from "firebase/app";
  import { getAnalytics } from "firebase/analytics";
  import { getAuth, onAuthStateChanged, sendEmailVerification } from "firebase/auth";

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
  let auth: any

  async function promptEmailVerification(user: any) {
    var response = confirm("We'd like to send you an email verification; for confirmation purposes. Many features of our app are locked down to annonymous users in order to limit spam. Proceed?");
    if (response == true) {
      await sendEmailVerification(user)
      alert(`Great! We sent you (${user.email}) an email; be sure to check spam.`);
    } else {
      // do nothing
    }
  }

  onMount(() => {
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);
    auth = getAuth(app);
  
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const uid = user.uid;
        console.log('uid', uid)
        firebase.set(JSON.stringify(user))

        const idTokenResult = await user.getIdTokenResult()
        console.log('firebase idTokenResult', idTokenResult)
        // ...
        // let response = await axios.post('https://clients.trabur.workers.dev/istrav/login', idTokenResult)
        localStorage.setItem('token', idTokenResult.token)

        // send email verification
        await promptEmailVerification(user)

        window.location.href = `/authentication/members#main-header`
      } else {
        // User is signed out
        // ...
      }
    });
  })
</script>

<svelte:head>
	<title>Register - Information - isTrav</title>
	<meta name="description" content="Register a new client with isTrav." />
</svelte:head>

<br />
<br />
<br />
<br />
<br />
<Register auth={auth}/>
