<script lang="ts">
  import { onMount } from 'svelte';

  import Banner from "$lib/Banner.svelte";

  import live from 'secret-optimizer'

  let member: any
  export let data: any;
  let loading: boolean = true

  onMount(async () => {

    let secretOptimizer = live.SecretOptimizer.getInstance()
    let db = await secretOptimizer.db()
    member = await db.members.findOne({
      selector: {
        id: data.memberId
      }
    }).exec()
    console.dir(member)
    loading = false

  })
</script>

<Banner icon="settings_input_antenna" name="Mesh Federation" description="Innovation Management System">
  <a href="/authentication/members#main-header" class="breadcrumb">Distributed Network</a>
  <a href="/authentication/members#main-header" class="breadcrumb">Members</a>
  {#if member}
    <a href={`/authentication/members/${data.memberId}#main-header`} class="breadcrumb">{member.username}</a>
  {/if}
</Banner>

member {JSON.stringify(member)}