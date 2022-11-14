<script lang="ts">
  import { onMount } from "svelte";

  onMount(() => {
    var elems = document.querySelectorAll('.collapsible');
    var instances = M.Collapsible.init(elems, {});
  })
</script>

<div class="wrapper">
  <ul class="collapsible">
    <li>
      <div class="collapsible-header">Why is game theory important?</div>
      <div class="collapsible-body">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/7szPBZxBIg4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
    </li>
    <li>
      <div class="collapsible-header">Are the actors in this situation rational?</div>
      <div class="collapsible-body">
        <div>Leave your thoughts in the comment section down below.</div>
      </div>
    </li>
    <li>
      <div class="collapsible-header">Are we able to reach Nash Equalibrium?</div>
      <div class="collapsible-body">
        <div>Leave your thoughts in the comment section down below.</div>
      </div>
    </li>
    <li>
      <div class="collapsible-header">Do they act according to their self interest?</div>
      <div class="collapsible-body">
        <div>Leave your thoughts in the comment section down below.</div>
      </div>
    </li>
    <li>
      <div class="collapsible-header">Do they understand the rules of the game?</div>
      <div class="collapsible-body">
        <div>Leave your thoughts in the comment section down below.</div>
      </div>
    </li>
    <li>
      <div class="collapsible-header">Is their dominant strategy really that dominant?</div>
      <div class="collapsible-body">
        <div>Leave your thoughts in the comment section down below.</div>
      </div>
    </li>
  </ul>
</div>

<style>
  .wrapper {
    margin: 0;
    color: #333;
  }
</style>

