<script lang="ts">
  import { onMount } from "svelte";

  import live from 'secret-optimizer'
  import { v4 as uuidv4 } from 'uuid';

  let username: string;
  let password: string;

  onMount(() => {
    M.updateTextFields();
  })

  async function submit (event: any) {
    event.preventDefault()

    if (username === '') return alert('Username must be defined.')
    if (password === '') return alert('Password must be defined.')

    let secretOptimizer = live.SecretOptimizer.getInstance()
    let db = await secretOptimizer.db()

    let record = await db.members.insert({
      id: uuidv4(),
      username,
      password
    })

    window.location.href = `/authentication/members#main-header`
  }
</script>

<div class="container">
  <h4>New Member</h4>
  <form class="card" on:submit={(e) => submit(e)}>
    <div class="card-content">
      <span class="card-title">Details</span>
      <div class="row" >
        <div class="col m6">
          <div class="input-field">
            <input placeholder="" id="username" type="text" class="validate" bind:value={username}>
            <label for="username">Username</label>
          </div>
        </div>
        <div class="col m6">
          <p>Only lowercase letters, dashes, and numbers are aloud; as seen in domain name.</p>
        </div>
      </div>
      <div class="row">
        <div class="col m6">
          <div class="input-field">
            <input placeholder="" id="password" type="text" class="validate" bind:value={password}>
            <label for="password">Password</label>
          </div>
        </div>
        <div class="col m6">
          <p>Use a simple name that is descriptive.</p>
        </div>
      </div>
    </div>
    <div class="card-action">
      <button class="btn btn-large red lighten-2" type='submit'>Submt</button>
      <a href="/authentication/members#main-header" class="btn btn-large white black-text">Cancel</a>
    </div>
  </form>
</div>