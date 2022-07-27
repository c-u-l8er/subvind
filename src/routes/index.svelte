<script>
  import Machine from '../components/Machine.svelte'
</script>

<br />
<br />
<div class="case">
  <div class="control-panel">
    <div class="content">
      <h1>EntropyMachine</h1>
      <h2>by isTrav</h2>
      <br />
      <br />
    </div>
  </div>
  <div class="entropy">
    <Machine />
  </div>
</div>
<br />
<br />

<style>
  :global(body) {
    background: #222;
  }

  .control-panel {
    margin: 0 auto;
    width: 1000px;
    border: 1em solid #333;
    border-bottom: 0;
    background-color: #000;
    background-image: url("data:image/svg+xml,%3Csvg width='30' height='30' viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M15 0C6.716 0 0 6.716 0 15c8.284 0 15-6.716 15-15zM0 15c0 8.284 6.716 15 15 15 0-8.284-6.716-15-15-15zm30 0c0-8.284-6.716-15-15-15 0 8.284 6.716 15 15 15zm0 0c0 8.284-6.716 15-15 15 0-8.284 6.716-15 15-15z' fill='%23222222' fill-opacity='0.4' fill-rule='evenodd'/%3E%3C/svg%3E");
  }

  .content {
    padding: 0.5em;
  }
  .control-panel h1 {
    color: #888;
    margin: 0;
  }
  .control-panel h2 {
    color: #888;
    font-size: 1em;
    margin: 0;
  }

  .entropy {
    height: 1000px;
    width: 1000px;
    overflow: hidden;
    margin: 0 auto;
    border: 1em solid #333;
    padding: 0;
  }
</style>