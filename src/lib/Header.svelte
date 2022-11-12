<script lang="ts">
  import { onMount } from 'svelte';

  import firebase from '$lib/stores/firebase';

  let user: any

  onMount(() => {
    firebase.subscribe((value) => {
      user = value
    })
  })
</script>

<nav id="main-header">
  <div class="nav-wrapper">
    <ul class="left">
      <li><a href="https://istrav.com" class="btn"><i class="material-icons left">keyboard_backspace</i>Website</a></li>
      {#if user}
        <li><a href="/authentication/members#main-header">Members</a></li>
        <li><a href="/authentication/logout#main-header">Logout</a></li>
      {:else}
        <li><a href="/authentication#main-header">Authentication</a></li>
      {/if}
    </ul>
    <a href="/#main-header" class="brand-logo center">isTrav Live</a>
    <ul class="right">
      <li><a href="/machines/entropy#main-header">Entropy Machines</a></li>
      <li><a href="/machines/scramble#main-header">Scramble Machines</a></li>
      <li><a href="/machines/decoy#main-header">Decoy Machines</a></li>
    </ul>
  </div>
</nav>