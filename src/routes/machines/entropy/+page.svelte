<script lang="ts">
  import { onMount } from 'svelte';

  import live from 'secret-optimizer'

  let terms: any
  let oneTimePads: any
  export let data: any;
  let loading: boolean = true

  onMount(async () => {

    let secretOptimizer = live.SecretOptimizer.getInstance()
    let db = await secretOptimizer.db()

    setInterval(async () => {
      terms = await db.terms.find().exec()
      console.dir(terms)
    }, 1000)

    // oneTimePads = await db.oneTimePads.find().exec()
    // console.dir(oneTimePads)
    loading = false
  })
</script>

terms {JSON.stringify(terms)}
<!-- oneTimePads {JSON.stringify(oneTimePads)} -->