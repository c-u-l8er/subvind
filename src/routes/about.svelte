<script lang="ts">
  import Header from "../components/Header.svelte";
</script>

<Header />

<div class="content">
  <h1>Related Videos</h1>
  <iframe class="related-video" src="https://www.youtube.com/embed/VMCGA9Z_J4k" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  <h4>(The Theory of Information by Aperture)</h4>
  <br />
  <br />

  <iframe class="related-video" src="https://www.youtube.com/embed/2s3aJfRr9gE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  <h4>(Information Entropy by Khan Academy)</h4>
  <br />
  <br />
  
  <iframe class="related-video" src="https://www.youtube.com/embed/YtebGVx-Fxw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  <h4>(Entropy (for data science) Clearly Explained!!! by StatQuest with Josh Starmer)</h4>
  <br />
  <br />

  <iframe class="related-video" src="https://www.youtube.com/embed/Ks1pw1X22y4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  <h4>(Random Numbers with LFSR (Linear Feedback Shift Register) - Computerphile)</h4>
  <br />
  <br />
</div>

<style>
  .content {
    padding: 2em;
  }

  h1 {
    color: #ccc;
    text-align: center;
  }
  h4 {
    color: #ccc;
    text-align: center;
    margin: 0 0 1em;
  }

  .related-video {
    width: 100%;
    min-height: 500px;
  }
</style>