<script lang="ts">
  import { onMount } from 'svelte';

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

member {member}