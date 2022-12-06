<script lang="ts">
  import { onMount } from "svelte";

  import Banner from "$lib/Banner.svelte";
  import Create from "$lib/members/Create.svelte";
</script> 

<Banner icon="record_voice_over" name="Mesh Federation" description="Innovation Management System">
  <a href="/authentication/members#main-header" class="breadcrumb">Distributed Network</a>
  <a href="/authentication/members#main-header" class="breadcrumb">Members</a>
  <a href="/authentication/members/create#main-header" class="breadcrumb">Create</a>
</Banner>
<br />
<br />
<Create />
<br />
<br />
<br />
<br />