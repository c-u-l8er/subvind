
<script lang="ts">
  import { onMount } from 'svelte';
  import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";

  export let auth: any

	let email = ''
  let password = ''

  async function login(event: any) {
    event.preventDefault()

    if (email === '') return alert('Email must be defined.')
    if (password === '') return alert('Password must be defined.')

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage)
      });
  }
</script>

<div class="contain">
  <div class="header">
    <a href="/">
      <img src="/anchor.png" alt="" class="anchor">
    </a>
    <h1 class="title">
      Login
    </h1>
  </div>
  <form class="card" on:submit={(e) => login(e)}>
    <div class="card-content">
      <div class="row">
        <div class="input-field col s12">
          <input id="email" type="email" class="validate" bind:value={email}>
          <label for="email">Email</label>
        </div>
        <div class="input-field col s12">
          <input id="password" type="password" class="validate" bind:value={password}>
          <label for="password">Password</label>
        </div>
        <br />
        <button style="margin-left: 1em;" type='submit' class="waves-effect red lighten-2 btn">Submit</button>
      </div>
    </div>
  </form>
  <div>
    <a href="/authentication/register#main-header" class="waves-effect white black-text btn" style="float: right;">Register</a>
    <br />
    <br />
    <br />
    <br />
  </div>
</div>

<style>
  .contain {
    max-width: 400px;
    margin: 0 auto;
  }

  .header {
    text-align: center;
  }

	.title {
		font-weight: 900;
		font-size: 2em;
		margin: 0;
	}

  .anchor {
    height: 150px;
   -webkit-filter: invert(1);
   filter: invert(1);
   text-align: center;
  }
</style>