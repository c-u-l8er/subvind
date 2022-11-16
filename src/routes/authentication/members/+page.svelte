<script lang="ts">
  import { onMount } from 'svelte';

  import Banner from "$lib/Banner.svelte";

  import Table from "$lib/Table.svelte"
  import * as gridjs from "gridjs";

  import live from 'secret-optimizer'

  let members: any
  export let data: any;

  let loading = true
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
      name: 'id',
      width: '100px',
      sort: false,
      formatter: (cell: any, row: any) => {
        return gridjs.h('div', {
          style: 'width: 70px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;',
        }, row.cells[0].data);
      }
    },
    {
      id: 'username',
      name: 'username',
      width: '150px',
    },
    {
      id: 'isOnline',
      name: 'online',
      width: '120px',
      formatter: (cell: any, row: any) => {
        return gridjs.h('div', {
          style: 'width: 70px;',
        }, `${cell}`);
      }
    },
    {
      id: 'isServer',
      name: 'server',
      width: '120px',
      formatter: (cell: any, row: any) => {
        return gridjs.h('div', {
          style: 'width: 70px;',
        }, `${cell}`);
      }
    },
    {
      id: 'isPerson',
      name: 'person',
      width: '120px',
      formatter: (cell: any, row: any) => {
        return gridjs.h('div', {
          style: 'width: 70px;',
        }, `${cell}`);
      }
    },
    {
      id: 'isBusiness',
      name: 'business',
      width: '140px',
      formatter: (cell: any, row: any) => {
        return gridjs.h('div', {
          style: 'width: 70px;',
        }, `${cell}`);
      }
    },
    {
      id: 'isElection',
      name: 'election',
      width: '140px',
      formatter: (cell: any, row: any) => {
        return gridjs.h('div', {
          style: 'width: 70px;',
        }, `${cell}`);
      }
    },
    {
      id: 'isSocialNetwork',
      name: 'social',
      width: '120px',
      formatter: (cell: any, row: any) => {
        return gridjs.h('div', {
          style: 'width: 70px;',
        }, `${cell}`);
      }
    },
    {
      id: 'isVerified',
      name: 'verified',
      width: '120px',
      formatter: (cell: any, row: any) => {
        return gridjs.h('div', {
          style: 'width: 70px;',
        }, `${cell}`);
      }
    },
    { 
      name: 'Actions',
      sort: false,
      hidden: false,
      width: '120px',
      formatter: (cell: any, row: any) => {
        return gridjs.h('a', {
          href: `/authentication/members/${row.cells[0].data}#main-header`,
          className: 'btn btn-small red lighten-2 right',
        }, 'VIEW');
      }
    },
  ]
  let records: any = []

  onMount(async () => {
    await load()
  })

  async function load () {
    let secretOptimizer = live.SecretOptimizer.getInstance()
    let db = await secretOptimizer.db()

    members = await db.members.find().exec()
    
    // needed in both areas
    records = []
    setTimeout(() => {
      records = []
      members.forEach((value: any) => {
        let record = {
          id: value.id,
          username: value.username,
          isOnline: value.isOnline,
          isServer: value.isServer,
          isPerson: value.isPerson,
          isBusiness: value.isBusiness,
          isElection: value.isElection,
          isSocialNetwork: value.isSocialNetwork,
          isVerified: value.isVerified
        }
        records.push(record)
      })

      loading = false
    }, 0)
  }
</script>

<Banner icon="settings_input_antenna" name="Mesh Federation" description="Innovation Management System">
  <a href="/authentication/members#main-header" class="breadcrumb">Distributed Network</a>
  <a href="/authentication/members#main-header" class="breadcrumb">Members</a>
</Banner>
<div class="container">
  <a href="#main-header" class="btn-floating btn-large red lighten-2 waves-effect waves-light right refresh" on:click={async () => {loading = true; await load(); M.toast({html: 'Update success!'});}}><i class="material-icons">refresh</i></a>
  <br />
  <br />
  <br />
  {#if loading === false}
    <Table columns={columns} data={records} search={search} pagination={pagination} sort={sort} />
    <br />
    <a href="/authentication/members/create#main-header" class="btn btn-large red lighten-2">new member</a>
  {:else}
    <div class="progress red lighten-2">
      <div class="indeterminate teal lighten-2"></div>
    </div>
  {/if}
</div>
<br />
<br />
<br />

<style>
  .refresh {
    margin: -2em 0 0 0;
  }
</style>