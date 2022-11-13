<script lang="ts">
  import { onMount } from 'svelte';

  import { v4 as uuidv4 } from 'uuid';

  import backend from '$lib/stores/backend';
  import live from 'secret-optimizer'

  import Logo from '$lib/Logo.svelte'
  import Machine from '$lib/Machine.svelte'
  import Library from '../machine/index'
  import Header from "$lib/Header.svelte";
  import Footer from "$lib/Footer.svelte";
  import Subscribe from "$lib/Subscribe.svelte";
  import Spoiler from "$lib/Spoiler.svelte";

  let spoiler: boolean = false
  let machine: any
  let stats: any = []
  let environmentIndex = 0
  let environments: any = [
    {
      t: { color: 'red', count: 25 },
      c: { color: 'green', count: 25 },
      g: { color: 'blue', count: 25 },
      a: { color: 'yellow', count: 25 }
    },
    {
      t: { color: 'red', count: 25 },
      c: { color: 'red', count: 25 },
      g: { color: 'blue', count: 25 },
      a: { color: 'blue', count: 25 }
    },
    {
      t: { color: 'red', count: 25 },
      c: { color: 'blue', count: 25 },
      g: { color: 'red', count: 25 },
      a: { color: 'blue', count: 25 }
    },
    {
      t: { color: 'red', count: 25 },
      c: { color: 'red', count: 25 },
      g: { color: 'blue', count: 0 },
      a: { color: 'blue', count: 50 }
    },
    {
      t: { color: 'red', count: 0 },
      c: { color: 'red', count: 50 },
      g: { color: 'blue', count: 50 },
      a: { color: 'blue', count: 0 }
    },
    {
      t: { color: 'red', count: 50 },
      c: { color: 'red', count: 0 },
      g: { color: 'blue', count: 0 },
      a: { color: 'blue', count: 50 }
    },
    {
      t: { color: 'red', count: 10 },
      c: { color: 'white', count: 40 },
      g: { color: 'white', count: 40 },
      a: { color: 'blue', count: 10 }
    },
    {
      t: { color: 'white', count: 40 },
      c: { color: 'red', count: 10 },
      g: { color: 'blue', count: 10 },
      a: { color: 'white', count: 40 }
    },
  ]

  let loading = true
  onMount(() => {
    var elems = document.querySelectorAll('.dropdown-trigger');
    var instances = M.Dropdown.init(elems, {
      alignment: 'right'
    });

		console.log('layout main')
    backend.set(`https://api.istrav.dev`)

    loading = false

    let database: any
    setTimeout(async () => {
      let secretOptimizer = live.SecretOptimizer.getInstance()
      database = await secretOptimizer.database(live.database.browser)
    }, 0)

    setInterval(() => {
      let report = machine.stats()
      console.log(report) // one continuous flow of information
      if (report.length) {
        process(database, report)
      }
    }, 1000)
  })

  function stop (e: any) {
    e.preventDefault()
    machine.stop()
    let el: any = document.getElementById("entropy")
    el.innerHTML = "";
    let term = uuidv4()
    machine = Library.init('entropy', environments[environmentIndex], term)
    setTimeout(() => {
      machine.stop()
    }, 0)
  }
  function start (e: any) {
    e.preventDefault()
    machine.start()
  }
  function pause (e: any) {
    e.preventDefault()
    machine.pause()
  }
  function change (e: any, index: any) {
    e.preventDefault()
    environmentIndex = index // update
    machine.stop()
    let el: any = document.getElementById("entropy")
    el.innerHTML = "";
    let term = uuidv4()
    machine = Library.init('entropy', environments[environmentIndex], term)
    setTimeout(() => {
      machine.stop()
    }, 0)
  }
  async function process (db: any, report: any) {
    await db.oneTimePads.insert({
      id: uuidv4(),
      term: report.term,
      orbit: report.orbit,
      color: report.color,
      number: report.number,
      spin: report.spin,
      event: report.event,
    })
  }
</script>

<svelte:head>
  <title>isTrav Live: One continuous flow of information.</title>
  <meta name="description" content="This entropy machine runs within a javascript physics engine which is a game loop that bounces balls around outputting randomness. This unpredictability is used in other repos for sending encrypted messages by mixing data before it gets sent over insecure channels and then within another safe space we unmix it to get back the original data." />
</svelte:head>

<div class="motherboard">
  <br />
  <br />

  <Logo />

  <div class="case">
    <div class="control-panel">
      <div class="content">
        <div class="main-settings">
          <a href="#!" class="btn btn-large" on:click={(e) => start(e)}><i class="material-icons">play_arrow</i></a>
          <a href="#!" class="btn btn-large" on:click={(e) => pause(e)}><i class="material-icons">pause</i></a>
          <a href="#!" class="btn btn-large" on:click={(e) => stop(e)}><i class="material-icons">stop</i></a>
          <a href="#!" class="btn btn-large dropdown-trigger" data-target="dropdown1"><i class="material-icons">more_horiz</i></a>
          <ul id='dropdown1' class='dropdown-content' style="min-width: 250px;">
            <li><a href="#!" on:click={(e) => change(e, 0)}>RGBY (Fair Bounce)</a></li>
            <li><a href="#!" on:click={(e) => change(e, 1)}>Red or Blue (Fair Bounce)</a></li>
            <li><a href="#!" on:click={(e) => change(e, 2)}>Red and Blue (Favor Bounce)</a></li>
            <li class="divider" tabindex="-1"></li>
            <li><a href="#!" on:click={(e) => change(e, 3)}>Leaning (25:25:0:50)</a></li>
            <li><a href="#!" on:click={(e) => change(e, 4)}>Center (0:50:50:0)</a></li>
            <li><a href="#!" on:click={(e) => change(e, 5)}>Extreme (50:0:0:50)</a></li>
            <li class="divider" tabindex="-1"></li>
            <li><a href="#!" on:click={(e) => change(e, 6)}>Inside Wins (10:40:40:10)</a></li>
            <li><a href="#!" on:click={(e) => change(e, 7)}>Outside Wins (40:10:10:40)</a></li>
          </ul>
        </div>
        <header>
          <h1>isTrav Live</h1>
          <h2>One continuous flow of information.</h2>
        </header>
      </div>
    </div>
    <div style="border: 1px solid #fff; background: #000; margin: 0 3em;">
      <div class="entropy">
        <Machine bind:machine={machine} bind:environment={environments[environmentIndex]} />
      </div>
    </div>
    <div class="reports">
      <div class="max-entropy">
        {#if spoiler}
          <Spoiler />
        {/if}
        <div style="text-align: center; height: 0.2em;">
          <button on:click={() => {spoiler = !spoiler}} class="btn btn-large btn-floating"><i class="material-icons">all_inclusive</i></button>
        </div>
      </div>    
    </div>
  </div>
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
</div>

<Header />

<main>
  <slot />
</main>

<Subscribe />

<br />
<br />
<br />
<br />

<Footer />

<style>
  .motherboard {
    background-color: #222222;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 304 304' width='304' height='304'%3E%3Cpath fill='%23333333' fill-opacity='0.4' d='M44.1 224a5 5 0 1 1 0 2H0v-2h44.1zm160 48a5 5 0 1 1 0 2H82v-2h122.1zm57.8-46a5 5 0 1 1 0-2H304v2h-42.1zm0 16a5 5 0 1 1 0-2H304v2h-42.1zm6.2-114a5 5 0 1 1 0 2h-86.2a5 5 0 1 1 0-2h86.2zm-256-48a5 5 0 1 1 0 2H0v-2h12.1zm185.8 34a5 5 0 1 1 0-2h86.2a5 5 0 1 1 0 2h-86.2zM258 12.1a5 5 0 1 1-2 0V0h2v12.1zm-64 208a5 5 0 1 1-2 0v-54.2a5 5 0 1 1 2 0v54.2zm48-198.2V80h62v2h-64V21.9a5 5 0 1 1 2 0zm16 16V64h46v2h-48V37.9a5 5 0 1 1 2 0zm-128 96V208h16v12.1a5 5 0 1 1-2 0V210h-16v-76.1a5 5 0 1 1 2 0zm-5.9-21.9a5 5 0 1 1 0 2H114v48H85.9a5 5 0 1 1 0-2H112v-48h12.1zm-6.2 130a5 5 0 1 1 0-2H176v-74.1a5 5 0 1 1 2 0V242h-60.1zm-16-64a5 5 0 1 1 0-2H114v48h10.1a5 5 0 1 1 0 2H112v-48h-10.1zM66 284.1a5 5 0 1 1-2 0V274H50v30h-2v-32h18v12.1zM236.1 176a5 5 0 1 1 0 2H226v94h48v32h-2v-30h-48v-98h12.1zm25.8-30a5 5 0 1 1 0-2H274v44.1a5 5 0 1 1-2 0V146h-10.1zm-64 96a5 5 0 1 1 0-2H208v-80h16v-14h-42.1a5 5 0 1 1 0-2H226v18h-16v80h-12.1zm86.2-210a5 5 0 1 1 0 2H272V0h2v32h10.1zM98 101.9V146H53.9a5 5 0 1 1 0-2H96v-42.1a5 5 0 1 1 2 0zM53.9 34a5 5 0 1 1 0-2H80V0h2v34H53.9zm60.1 3.9V66H82v64H69.9a5 5 0 1 1 0-2H80V64h32V37.9a5 5 0 1 1 2 0zM101.9 82a5 5 0 1 1 0-2H128V37.9a5 5 0 1 1 2 0V82h-28.1zm16-64a5 5 0 1 1 0-2H146v44.1a5 5 0 1 1-2 0V18h-26.1zm102.2 270a5 5 0 1 1 0 2H98v14h-2v-16h124.1zM242 149.9V160h16v34h-16v62h48v48h-2v-46h-48v-66h16v-30h-16v-12.1a5 5 0 1 1 2 0zM53.9 18a5 5 0 1 1 0-2H64V2H48V0h18v18H53.9zm112 32a5 5 0 1 1 0-2H192V0h50v2h-48v48h-28.1zm-48-48a5 5 0 0 1-9.8-2h2.07a3 3 0 1 0 5.66 0H178v34h-18V21.9a5 5 0 1 1 2 0V32h14V2h-58.1zm0 96a5 5 0 1 1 0-2H137l32-32h39V21.9a5 5 0 1 1 2 0V66h-40.17l-32 32H117.9zm28.1 90.1a5 5 0 1 1-2 0v-76.51L175.59 80H224V21.9a5 5 0 1 1 2 0V82h-49.59L146 112.41v75.69zm16 32a5 5 0 1 1-2 0v-99.51L184.59 96H300.1a5 5 0 0 1 3.9-3.9v2.07a3 3 0 0 0 0 5.66v2.07a5 5 0 0 1-3.9-3.9H185.41L162 121.41v98.69zm-144-64a5 5 0 1 1-2 0v-3.51l48-48V48h32V0h2v50H66v55.41l-48 48v2.69zM50 53.9v43.51l-48 48V208h26.1a5 5 0 1 1 0 2H0v-65.41l48-48V53.9a5 5 0 1 1 2 0zm-16 16V89.41l-34 34v-2.82l32-32V69.9a5 5 0 1 1 2 0zM12.1 32a5 5 0 1 1 0 2H9.41L0 43.41V40.6L8.59 32h3.51zm265.8 18a5 5 0 1 1 0-2h18.69l7.41-7.41v2.82L297.41 50H277.9zm-16 160a5 5 0 1 1 0-2H288v-71.41l16-16v2.82l-14 14V210h-28.1zm-208 32a5 5 0 1 1 0-2H64v-22.59L40.59 194H21.9a5 5 0 1 1 0-2H41.41L66 216.59V242H53.9zm150.2 14a5 5 0 1 1 0 2H96v-56.6L56.6 162H37.9a5 5 0 1 1 0-2h19.5L98 200.6V256h106.1zm-150.2 2a5 5 0 1 1 0-2H80v-46.59L48.59 178H21.9a5 5 0 1 1 0-2H49.41L82 208.59V258H53.9zM34 39.8v1.61L9.41 66H0v-2h8.59L32 40.59V0h2v39.8zM2 300.1a5 5 0 0 1 3.9 3.9H3.83A3 3 0 0 0 0 302.17V256h18v48h-2v-46H2v42.1zM34 241v63h-2v-62H0v-2h34v1zM17 18H0v-2h16V0h2v18h-1zm273-2h14v2h-16V0h2v16zm-32 273v15h-2v-14h-14v14h-2v-16h18v1zM0 92.1A5.02 5.02 0 0 1 6 97a5 5 0 0 1-6 4.9v-2.07a3 3 0 1 0 0-5.66V92.1zM80 272h2v32h-2v-32zm37.9 32h-2.07a3 3 0 0 0-5.66 0h-2.07a5 5 0 0 1 9.8 0zM5.9 0A5.02 5.02 0 0 1 0 5.9V3.83A3 3 0 0 0 3.83 0H5.9zm294.2 0h2.07A3 3 0 0 0 304 3.83V5.9a5 5 0 0 1-3.9-5.9zm3.9 300.1v2.07a3 3 0 0 0-1.83 1.83h-2.07a5 5 0 0 1 3.9-3.9zM97 100a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-48 32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm32 48a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm32-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0-32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm32 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16-64a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 96a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16-144a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16-32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-96 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16-32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm96 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16-64a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-32 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM49 36a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-32 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm32 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM33 68a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16-48a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 240a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16-64a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16-32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm80-176a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm32 48a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0-32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm112 176a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM17 180a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0-32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM17 84a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm32 64a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6z'%3E%3C/path%3E%3C/svg%3E");
  }

  :global(body) {
    background: #eee;
    color: #333;
  }

  :global(main) {
    min-height: 100vh;
  }

  .control-panel {
    margin: 0 auto;
    width: 1000px;
    border: 1em solid #333;
    border-bottom: 0;
    background-color: #333;
    background-image: url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h20v20H0V0zm10 17a7 7 0 1 0 0-14 7 7 0 0 0 0 14zm20 0a7 7 0 1 0 0-14 7 7 0 0 0 0 14zM10 37a7 7 0 1 0 0-14 7 7 0 0 0 0 14zm10-17h20v20H20V20zm10 17a7 7 0 1 0 0-14 7 7 0 0 0 0 14z' fill='%23111111' fill-opacity='0.4' fill-rule='evenodd'/%3E%3C/svg%3E");
  }

  .reports {
    margin: 0 auto;
    width: 1000px;
    border: 1em solid #333;
    border-top: 0;
    background-color: #333;
    background-image: url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h20v20H0V0zm10 17a7 7 0 1 0 0-14 7 7 0 0 0 0 14zm20 0a7 7 0 1 0 0-14 7 7 0 0 0 0 14zM10 37a7 7 0 1 0 0-14 7 7 0 0 0 0 14zm10-17h20v20H20V20zm10 17a7 7 0 1 0 0-14 7 7 0 0 0 0 14z' fill='%23111111' fill-opacity='0.4' fill-rule='evenodd'/%3E%3C/svg%3E");
  }

  .main-settings {
    text-align: right;
    float: right;
    position: relative;
    padding: 0.5em 0;
  }

  .content {
    padding: 1em;
  }

  .control-panel h1 {
    color: #ccc;
    margin: 0;
    font-size: 3em;
  }
  .control-panel h2 {
    color: #aaa;
    font-size: 1em;
    margin: 0 0 0.5em;
  }

  .entropy {
    height: 1000px;
    width: 1000px;
    text-align: center;
    overflow: hidden;
    margin: 0 auto;
    padding: 0;
    background: #000;
  }
  .max-entropy {
    padding: 1em;
    color: #aaa;
    margin: 0;
  }
</style>