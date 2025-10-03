<script lang="ts">
    const gamificationTags = [
        { name: "News", href: "https://wrnad.cc/open-source" },
        { name: "Forum", href: "https://wrnad.cc/open-source" },
        { name: "Bulletin Board", href: "https://wrnad.cc/open-source" },
        { name: "Kanban", href: "https://wrnad.cc/open-source" },
        { name: "Photo Gallery", href: "https://wrnad.cc/open-source" },
        { name: "Video Library", href: "https://wrnad.cc/open-source" },
        { name: "Blog", href: "https://wrnad.cc/open-source" },
        { name: "Instant Messanger", href: "https://wrnad.cc/open-source" },
        { name: "Calendar", href: "https://wrnad.cc/open-source" },
        { name: "Shop", href: "https://wrnad.cc/open-source" },
        { name: "Support Desk", href: "https://wrnad.cc/open-source" },
        { name: "Arcade", href: "https://wrnad.cc/open-source" },
        { name: "Tournament System", href: "https://wrnad.cc/open-source" },
        { name: "Video Game Server", href: "https://wrnad.cc/open-source" },
    ];
</script>

<div class="marketing">
    <div class="banner">
        <div class="banner-subtitle">
            Building engaged digital substrates<br /> using interwoven information
            systems, real-time data, and collaborative platforms with amalgam
            interplay.
        </div>
        <div class="banner-title">WIN INTELLIGENCE OUTCOMES</div>
        <a
            href="https://github.com/c-u-l8er"
            target="_blank"
            class="get-started-btn"
        >
            Let's Connect!
        </a>
    </div>
    <br />
    <div class="notecards-container">
        <div class="notecard">
            <div class="notecard-title">OUR SOLUTIONS</div>
            <div class="notecard-body">
                At subvind, we orchestrate community solutions as if they were
                like Great Ball Contraptions (GBC). Were there is some kind of
                landing splash page to load balance flow. Followed by an idea
                that creates congestion. From that identified pain point we
                bounce traffic from layer to layer in currents. All while
                recording movement over sensors. At the endpoints traffic gets
                directed in a loop back to main. Join our discord for more about
                how our formula for winning intelligence outcomes can align with
                your values.
            </div>
            <a
                href="https://discord.gg/27dBhn3zuc"
                target="_blank"
                class="notecard-btn">Join Our Discord</a
            >
        </div>
        <div class="notecard">
            <div class="notecard-title">OUR FORMULA</div>
            <div class="notecard-body">
                <div class="code-wrap">
                    <pre class="code-block">
                        <code>
      -------
      FORMULA:
COMMUNITY SOLUTIONS
      -------
  TRAVIS = BURANDT
    -ART = -ART
     VIS = BUND
  {`{MIX & COMBINE}`}
      -------
      SUBVIND:
COMMUNITY SOLUTIONS
      -------</code>
    </pre>
                </div>
            </div>
            <a
                href="https://wrand.cc"
                target="_blank"
                class="notecard-btn">Learn More</a
            >
        </div>
    </div>
    <p class="tagline">
        "The map is not the territory, <br />but the pattern is the path."
        ~ArtInt
    </p>
    <!-- <section class="portfolio-summary">
        <h2>OPEN SOURCE GAMIFICATION</h2>
        <div class="tag-cloud">
            {#each gamificationTags as tag, i}
                <a
                    href={tag.href}
                    class="tag"
                    style="--size: {Math.random() * 1.2 + 0.8}em; --hue: {(i *
                        360) /
                        gamificationTags.length}deg;"
                >
                    {tag.name}
                </a>
            {/each}
        </div>
    </section> -->
    <br />
    <br />
</div>

<style>
    .marketing {
        background: #2c3e50;
    }

    .code-block {
        width: 175px !important;
        margin: 0 auto !important;
        background: transparent !important;
        font-size: 1em;
        border: none !important;
    }

    .banner {
        text-align: center;
        color: white;
        margin: 0 auto 4em auto;
        padding: 4em 0 0 0;
        max-width: 750px; /* Add this line */
    }

    .banner-subtitle {
        font-size: 1em;
        letter-spacing: 2px;
        margin-bottom: 1em;
        z-index: 11;
        position: relative;
    }

    .banner-title {
        font-size: 2em;
        font-weight: bold;
        letter-spacing: 3px;
        margin: 0;
        margin-bottom: 1em;
    }

    .get-started-btn {
        background-color: #8b4513;
        color: white;
        padding: 15px 40px;
        border: none;
        border-radius: 30px;
        font-size: 1.2em;
        cursor: pointer;
        text-decoration: none;
        transition:
            background-color 0.3s,
            transform 0.3s;
        display: block;
        width: fit-content;
        margin: 0 auto;
    }

    .get-started-btn:hover {
        background-color: #a0522d;
        transform: scale(1.05);
    }

    .notecards-container {
        display: flex;
        justify-content: center;
        gap: 40px;
        width: 100%;
        max-width: 1200px;
        margin: 0 auto 0 auto;
    }

    .notecard {
        background-color: white;
        padding: 2em;
        border-radius: 10px;
        width: 400px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        transform: rotate(-1deg);
        position: relative;
    }

    .notecard:nth-child(2) {
        transform: rotate(1deg);
    }

    .notecard::before {
        content: "";
        position: absolute;
        top: -5px;
        left: 50%;
        transform: translateX(-50%);
        width: 50px;
        height: 15px;
        background-color: #deb887;
        border-radius: 3px;
    }

    .notecard-title {
        color: #2c3e50;
        font-size: 1.5em;
        font-weight: bold;
        margin-bottom: 1em;
        text-align: center;
    }

    .notecard-body {
        color: #34495e;
        line-height: 1.6;
        margin-bottom: 2em;
        text-align: justify;
    }

    .notecard-btn {
        background-color: #8b4513;
        color: white;
        padding: 12px 25px;
        border: none;
        border-radius: 25px;
        font-size: 1em;
        cursor: pointer;
        text-decoration: none;
        transition:
            background-color 0.3s,
            transform 0.3s;
        display: block;
        width: fit-content;
        margin: 0 auto;
    }

    .notecard-btn:hover {
        background-color: #a0522d;
        transform: scale(1.05);
    }

    .tagline {
        font-style: italic;
        color: #ccc;
        text-align: center;
    }

    .portfolio-summary {
        max-width: 1000px;
        margin: 0 auto;
        padding: 2em;
        text-align: center;
        /*  Remove the background for cleaner look if preferred
            background-color: #f0f0f0; */
        border-radius: 8px;
    }

    .portfolio-summary h2 {
        color: #ccc;
        margin: 0.5em;
        font-size: 2em;
    }

    .tag-cloud {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center; /* Vertically center tags */
        gap: 0.5em; /* Spacing between tags */
    }

    .tag {
        background-color: #8b4513;
        color: white;
        padding: 0.5em 0.75em;
        border-radius: 0.3em;
        text-decoration: none;
        font-size: var(--size); /* Dynamically sized */
        transition: transform 0.2s ease-in-out;
        display: inline-block; /* Ensure scaling works properly */
        --hue: 0deg; /* Default color */
        /*  Optional: Add a border
            border: 1px solid #888; */
    }

    .tag:hover {
        transform: scale(1.1);
        background-color: #a0522d;
    }
</style>
