<script lang="ts">
    import { onMount } from "svelte";

    import Banner from "$lib/Banner.svelte";

    import Table from "$lib/Table.svelte";
    import * as gridjs from "gridjs";

    import live from "secret-optimizer";

    let terms: any;

    let loading = true;
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
            name: "generation",
            width: "150px",
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
            id: "t",
            name: "T",
        },
        {
            id: "c",
            name: "C",
        },
        {
            id: "g",
            name: "G",
        },
        {
            id: "a",
            name: "A",
        },
        {
            name: "",
            sort: false,
            hidden: false,
            formatter: (cell: any, row: any) => {
                return gridjs.h(
                    "a",
                    {
                        href: `/machines/amalgam/${row.cells[0].data}`,
                        className: "btn btn-small red lighten-2 right",
                    },
                    "FLOWS",
                );
            },
        },
    ];
    let records: any = [];

    onMount(async () => {
        await load();
    });

    async function load() {
        let secretOptimizer = live.SecretOptimizer.getInstance();
        let db = await secretOptimizer.db();

        terms = await db.terms.find().exec();

        // needed in both areas
        records = [];
        setTimeout(() => {
            records = [];
            terms.forEach((value: any) => {
                let record = {
                    id: value.id,
                    t: `${value.tColor}: ${value.tCount}`,
                    c: `${value.cColor}: ${value.cCount}`,
                    g: `${value.gColor}: ${value.gCount}`,
                    a: `${value.aColor}: ${value.aCount}`,
                };
                records.push(record);
            });

            loading = false;
        }, 0);
    }
</script>

<Banner icon="traffic" name="Amalgam Machines" description="amalgam machines">
    <a href="/" class="breadcrumb">Home</a>
    <a href="/machines/amalgam" class="breadcrumb">Amalgam</a>
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
