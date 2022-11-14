<script lang="ts">
  import { onMount } from "svelte";

  import Library from '../machine/index'
  import { v4 as uuidv4 } from 'uuid';

  export let machine: any
  export let environment: any
  export let initiate: any
  
  onMount(() => {
    Matter.use(
      'matter-wrap'
    );
    let term = uuidv4()
    machine = Library.init('entropy', environment, term)
    initiate(term, environment)
    setTimeout(() => {
      machine.stop()
    }, 0)
    setTimeout(() => {
      machine.start()
    }, 2000)
  })

</script>

<div id="entropy"></div>

<style>
  #entropy {
    margin: 0 auto;
    background-color: #111111;
    background-image: url("data:image/svg+xml,%3Csvg width='30' height='30' viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M15 0C6.716 0 0 6.716 0 15c8.284 0 15-6.716 15-15zM0 15c0 8.284 6.716 15 15 15 0-8.284-6.716-15-15-15zm30 0c0-8.284-6.716-15-15-15 0 8.284 6.716 15 15 15zm0 0c0 8.284-6.716 15-15 15 0-8.284 6.716-15 15-15z' fill='%23222222' fill-opacity='0.4' fill-rule='evenodd'/%3E%3C/svg%3E");
  }
</style>