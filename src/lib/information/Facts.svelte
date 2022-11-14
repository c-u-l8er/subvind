<script lang="ts">
  import { onMount } from 'svelte';
  
  import InformationTheory from './InformationTheory.svelte';
  import GameTheory from './GameTheory.svelte';
  import TheoryOfEverything from './TheoryOfEverything.svelte';
  
  onMount(() => {
    var elems = document.querySelectorAll('.tabs');
    var instance = M.Tabs.init(elems, {});
  })
</script>

<div class="card">
  <div class="row">
    <div class="col s12">
      <ul class="tabs">
        <li class="tab col s4"><a href="#test0" class="active">Information Theory</a></li>
        <li class="tab col s4"><a href="#test1">Game Theory</a></li>
        <li class="tab col s4"><a href="#test2">Theory of Everything</a></li>
      </ul>
    </div>
    <div id="test0" class="col s12">
      <InformationTheory />
    </div>
    <div id="test1" class="col s12">
      <GameTheory />
    </div>
    <div id="test2" class="col s12">
      <TheoryOfEverything />
    </div>
  </div>
</div>



    