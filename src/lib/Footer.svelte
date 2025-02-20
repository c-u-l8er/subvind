<script lang="ts">
    import { onMount } from "svelte";

    let hostname: any;

    onMount(async () => {
        hostname = window.location.hostname;
        if (hostname === "localhost") {
            hostname = "subvind.com";
        }
    });
</script>

<footer>
    <div class="code-wrap">
        <pre class="code-block">
TRAVIS = BURANDT
  -ART = -ART
   VIS = BUND
 (MIX & COMBINE)
    SUBVIND</pre>
    </div>

    <p style="margin: 0;">
        {hostname} © {new Date().getFullYear()}.
    </p>
    <p style="margin: 0;">
        powered by <a href="https://wrand.cc">WRANDTEL</a>
    </p>
</footer>

<style>
    .code-wrap {
        display: flex;
        justify-content: center; /* Center the code block horizontally */
    }

    .code-block {
        width: fit-content; /* Adjust width to content */
        text-align: left; /* Align text to the left within the block */
        white-space: pre; /* Preserve whitespace and line breaks */
        font-family: monospace; /* Use a monospace font for alignment */
        margin: 0 auto; /* Center the block itself (redundant with code-wrap centering, but good practice) */
    }

    footer {
        text-align: center;
    }
</style>
