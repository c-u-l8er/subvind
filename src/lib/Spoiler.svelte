<script lang="ts">
    import Facts from "./information/Facts.svelte";

    export let term: any;
</script>

<h4>Random/Caos/Predictable</h4>
<p class="term">
    (<a href={`/machines/amalgamy/${term}#`} class="id">{term}</a>)
</p>
<Facts />

<style>
    h4 {
        text-align: center;
        margin: 0;
        color: #fff;
    }

    .term {
        text-align: center;
        padding: 0;
        margin: 0;
    }

    .id {
        color: #fff;
    }
    .id:hover {
        text-decoration: underline;
    }
</style>
