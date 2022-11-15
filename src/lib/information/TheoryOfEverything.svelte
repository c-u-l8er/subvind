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
      <div class="collapsible-header">Why is the theory of everything important?</div>
      <div class="collapsible-body">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/cBfd0GQRVhc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
    </li>
    <li>
      <div class="collapsible-header">What about small and fast?</div>
      <div class="collapsible-body">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/MmG2ah5Df4g" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
    </li>
    <li>
      <div class="collapsible-header">What about small and slow?</div>
      <div class="collapsible-body">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/V8Gbn1NFUBE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
    </li>
    <li>
      <div class="collapsible-header">What about big and fast?</div>
      <div class="collapsible-body">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/AInCqm5nCzw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
    </li>
    <li>
      <div class="collapsible-header">What about big and slow?</div>
      <div class="collapsible-body">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/tzQC3uYL67U" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
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

