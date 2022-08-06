<script lang="ts">
  import { onMount } from 'svelte';
</script>

<div class="border"></div>
<div style="max-width: 1000px; margin: 0 auto;">
  <div class="box">
    <a href="https://www.youtube.com/c/TravisBurandt" target="_blank" class="btn btn-large right controls">YOUTUBE</a>
    <h1 class="title"><i class="material-icons badge">videocam</i><div class="name">Subscribe</div></h1>
  </div>
</div>

<style>
  .border {
    border-top: 1em solid #ee6e73;
    margin-bottom: -5em;
    margin-top: 5em;
  }
  .badge {
    font-size: 1em;
    float: left;
  }
  .name {
    font-weight: 700;
  }
  .title {
    font-size: 4.7em;
    color: #ee6e73;
    margin: 0;
    line-height: 1em;
  }
  .box {
    border: 1em solid #ee6e73;
    color: #ccc;
    padding: 1em;
    background-color: #000000;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 80 80' width='80' height='80'%3E%3Cpath fill='%23111111' fill-opacity='1' d='M14 16H9v-2h5V9.87a4 4 0 1 1 2 0V14h5v2h-5v15.95A10 10 0 0 0 23.66 27l-3.46-2 8.2-2.2-2.9 5a12 12 0 0 1-21 0l-2.89-5 8.2 2.2-3.47 2A10 10 0 0 0 14 31.95V16zm40 40h-5v-2h5v-4.13a4 4 0 1 1 2 0V54h5v2h-5v15.95A10 10 0 0 0 63.66 67l-3.47-2 8.2-2.2-2.88 5a12 12 0 0 1-21.02 0l-2.88-5 8.2 2.2-3.47 2A10 10 0 0 0 54 71.95V56zm-39 6a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm40-40a2 2 0 1 1 0-4 2 2 0 0 1 0 4zM15 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm40 40a2 2 0 1 0 0-4 2 2 0 0 0 0 4z'%3E%3C/path%3E%3C/svg%3E");
  }
  .controls {
    margin: 0.6em;
  }
</style>