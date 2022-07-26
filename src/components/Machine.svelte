<script>
  import { onMount } from "svelte";
  import Machine from '../machine/index'

  onMount(() => {
    Matter.use(
      'matter-wrap'
    );
    Machine.init('entropy')
  })
</script>

<div id="entropy"></div>