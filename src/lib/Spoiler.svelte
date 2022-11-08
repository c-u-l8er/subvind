<script lang="ts">
  import Facts from "./information/Facts.svelte"

  export let stats: any
</script>

<h4>Entropy Machine</h4>
<Facts bind:stats={stats} />

<style>
  h4 {
    text-align: center;
    margin: 0;
    color: #fff;
  }
</style>