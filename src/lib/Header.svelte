<script lang="ts">
    import { onMount } from "svelte";

    import firebase from "$lib/stores/firebase";

    let user: any;

    onMount(() => {
        firebase.subscribe((value) => {
            user = value;
        });
    });
</script>

<header class="cloud-header">
    <div class="domain-nav">
        <div class="domain-container">
            <a href="https://c-u-l8er.link">IDEATION</a> (<a href="https://watermark.wrand.cc">DESIGN</a>
            &#x2022; <a
                href="https://wrand.cc">R&D</a
            >
            &#x2022; <a href="https://opensentience.org">PRODUCTION</a>)
            <div style="float: right;">
                &#123; <a href="https://istrav.com">WEB SOLUTIONS</a> &#x2022;
                <a href="https://subvind.com">COMMUNITY SOLUTIONS</a> &#125;
                <a
                    href="https://ticktickclock.com"
                    style="font-family: Helvetica, sans-serif; line-height: 0.85em; font-size: 0.85em !important;"
                    >!!</a
                >
            </div>
        </div>
    </div>
</header>

<style>
    .domain-nav {
        background: #000;
        color: #ccc;
        margin-bottom: 0;
    }

    .domain-container {
        width: 1000px;
        margin: 0 auto;
        padding: 2px 0 0 0;
        font-size: 16px;
    }

    .domain-nav a {
        color: #ccc !important;
        font-size: 1em !important;
        font-weight: normal !important;
        margin: 0 !important;
    }

    .domain-nav a:hover {
        color: #fff !important;
        text-decoration: underline;
    }

    /* Add these new styles */
    .cloud-header {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        background: #000;
        padding: 0;
        z-index: 1000;
    }

    .cloud-header a {
        color: #2c3e50;
        text-decoration: none;
        margin: 0 10px;
        font-size: 1.2em;
        font-weight: bold;
        transition: color 0.3s;
    }

    .cloud-header a:hover {
        color: #8b4513;
    }
</style>
