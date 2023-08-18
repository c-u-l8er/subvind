<script lang="ts">
  import { onMount } from "svelte";

  let hostname: any;

	onMount(async() => {
		hostname = window.location.hostname
		if (hostname === 'localhost') {
			hostname = 'entropy.subvind.com'
		}
	})
</script>

<footer>
  <p style="margin: 0;">
    {hostname} © {new Date().getFullYear()}.
  </p>
  <p style="margin: 0;">
    powered by <a href="https://subvind.com">subvind</a>
  </p>
</footer>

<style>
  footer {
    text-align: center;
  }
</style>