<script lang="ts">
  import { onMount } from 'svelte';
  import About from './About.svelte';
  import StackedbarSensor from './sensors/stackedbar/index.svelte';
  
  onMount(() => {
    var elems = document.querySelectorAll('.tabs');
    var instance = M.Tabs.init(elems, {});
  })
</script>

<div class="card">
  <div class="row">
    <div class="col s12">
      <ul class="tabs">
        <li class="tab col s4"><a href="#test0" class="active">about</a></li>
        <li class="tab col s2"><a href="#test1">balls</a></li>
        <li class="tab col s2"><a href="#test2">colors</a></li>
        <li class="tab col s2"><a href="#test3">sensors</a></li>
        <li class="tab col s2"><a href="#test4">race</a></li>
      </ul>
    </div>
    <div id="test0" class="col s12">
      <About />
    </div>
    <div id="test1" class="col s12">Test 1</div>
    <div id="test2" class="col s12">Test 2</div>
    <div id="test3" class="col s12"><StackedbarSensor /></div>
    <div id="test4" class="col s12">Test 4</div>
  </div>
</div>



    