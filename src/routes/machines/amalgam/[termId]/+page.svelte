<script lang="ts">
    import { onMount } from "svelte";

    import Banner from "$lib/Banner.svelte";

    import Table from "$lib/Table.svelte";
    import * as gridjs from "gridjs";

    import live from "secret-optimizer";

    export let data: any;

    let loading = true;
    let oneTimePads: any;
    let search = {
        enabled: true,
    };
    let sort = true;
    let pagination = {
        enabled: true,
        limit: 10,
        summary: true,
    };
    let columns = [
        {
            id: "id",
            name: "flow",
            width: "100px",
            sort: false,
            formatter: (cell: any, row: any) => {
                return gridjs.h(
                    "div",
                    {
                        style: "width: 70px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;",
                    },
                    row.cells[0].data,
                );
            },
        },
        {
            id: "orbit",
            name: "intersection",
            width: "160px",
        },
        {
            id: "color",
            name: "signal",
            width: "150px",
        },
        {
            id: "number",
            name: "traffic",
            width: "150px",
        },
        {
            id: "spin",
            name: "direction",
            width: "250px",
        },
        {
            id: "event",
            name: "event",
            width: "250px",
        },
    ];
    let records: any = [];

    onMount(async () => {
        await load();
    });

    async function load() {
        let secretOptimizer = live.SecretOptimizer.getInstance();
        let db = await secretOptimizer.db();

        oneTimePads = await db.oneTimePads
            .find({
                selector: {
                    term: data.termId,
                },
                sort: [{ event: "asc" }],
            })
            .exec();

        // needed in both areas
        records = [];
        setTimeout(() => {
            records = [];
            oneTimePads.forEach((value: any) => {
                let record = {
                    id: value.id,
                    term: value.term,
                    orbit: value.orbit,
                    color: value.color,
                    number: value.number,
                    spin: value.spin,
                    event: value.event,
                };
                records.push(record);
            });

            loading = false;
        }, 0);
    }
</script>

<Banner
    icon="theaters"
    name="Incident Investigation"
    description="amalgam machines"
>
    <a href="/" class="breadcrumb">Home</a>
    <a href="/machines/amalgam" class="breadcrumb">Amalgam</a>
    <a href="#" class="breadcrumb">{data.termId}</a>
</Banner>

<div class="container">
    <a
        href="#"
        class="btn-floating btn-large red lighten-2 waves-effect waves-light right refresh"
        on:click={async () => {
            loading = true;
            await load();
            M.toast({ html: "Update success!" });
        }}><i class="material-icons">refresh</i></a
    >
    <br />
    <br />
    <br />
    {#if loading === false}
        <Table {columns} data={records} {search} {pagination} {sort} />
    {:else}
        <div class="progress red lighten-2">
            <div class="indeterminate teal lighten-2"></div>
        </div>
    {/if}
</div>

<div class="machines">
    <p>
        (system: from well ordered through congestion <br /> then through double
        xor then over sensors and <br /> then loop back around to repeat)
    </p>
</div>

<style>
    .machines {
        text-align: center;
        max-width: 800px;
        margin: 0 auto;
    }
    .refresh {
        margin: -2em 0 0 0;
    }
</style>
