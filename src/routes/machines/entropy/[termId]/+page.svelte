<script lang="ts">
  import { onMount } from 'svelte';

  import Banner from "$lib/Banner.svelte";

  import Table from "$lib/Table.svelte"
  import * as gridjs from "gridjs";
  
  import live from 'secret-optimizer'

  export let data: any;
  
  let oneTimePads: any;
  let search = {
    enabled: true
  }
  let sort = true
  let pagination = {
    enabled: true,
    limit: 10,
    summary: true
  }
  let columns = [
    {
      id: 'id',
      name: 'H',
      width: '100px',
      sort: false,
      formatter: (cell: any, row: any) => {
        return gridjs.h('div', {
          style: 'width: 70px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;',
        }, row.cells[0].data);
      }
    },
    {
      id: 'orbit',
      name: '@'
    },
    {
      id: 'color',
      name: '^'
    },
    {
      id: 'number',
      name: '#'
    },
    {
      id: 'spin',
      name: 'spin',
      width: '250px',
    },
    {
      id: 'event',
      name: 'event',
      width: '250px',
    },
  ]
  let records: any = []

  onMount(async () => {
    let secretOptimizer = live.SecretOptimizer.getInstance()
    let db = await secretOptimizer.db()

    setInterval(async () => {
      oneTimePads = await db.oneTimePads.find({
        selector: {
          term: data.termId
        },
        sort: [
          { event: 'asc' }
        ]
      }).exec()

      console.log('oneTimePads',oneTimePads)
      
      records = []
      oneTimePads.forEach((value: any) => {
        let record = {
          id: value.id,
          term: value.term,
          orbit: value.orbit,
          color: value.color,
          number: value.number,
          spin: value.spin,
          event: value.event
        }
        records.push(record)
      })
    }, 10000)
  })
</script>

<Banner icon="theaters" name="One Time Pads" description="Innovation Management System">
  <a href="/machines#main-header" class="breadcrumb">Machines</a>
  <a href="/machines/entropy#main-header" class="breadcrumb">Entropy</a>
  <a href="#main-header" class="breadcrumb">{data.termId}</a>
</Banner>
<br />
<br />
<br />
<div class="container">
  {#if records.length}
    <Table columns={columns} data={records} search={search} pagination={pagination} sort={sort} />
  {/if}
</div>
<br />
<br />
<br />