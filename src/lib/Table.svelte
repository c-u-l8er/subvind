<script lang="ts">
  import { onMount } from 'svelte';
  
  import * as gridjs from "gridjs";
  import "gridjs/dist/theme/mermaid.css";

  export let columns: any
  export let data: any = []
  export let search: any
  export let pagination: any
  export let sort: boolean

  onMount(() => {
    let grid = new gridjs.Grid({ 
      columns: columns || ['Name', 'Email'],
      data: data || [
        ['John', 'john@example.com'],
        ['Mike', 'mike@gmail.com']
      ],
      search: search,
      pagination: pagination,
      sort: sort
    }).render(document.getElementById('wrapper'));
  });
</script>

{#if data}
  <div id="wrapper"></div>
{/if}
