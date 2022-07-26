<script>
  import { onMount } from "svelte";
  import Machine from '../machine/index'

  onMount(() => {
    Machine.init('entropy')
  })
</script>

<div id="entropy"></div>