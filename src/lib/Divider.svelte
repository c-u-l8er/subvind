<script lang="ts">
</script>

<div class="divider-wrap">
    <div class="divider-container">
        <a href="/" class="divider-logo">
            <img src="/WRANDTEL.png" alt="WRANDTEL" class="divider-image" />
        </a>

        <div class="divider"></div>
    </div>
    <br />
</div>

<style>
    .divider-wrap {
        background: #2c3e50;
        overflow: hidden;
    }
    .divider-container {
        background: #2c3e50;
        width: 100%;
        max-width: 1000px; /* Matches the TV and folder containers */
        margin: 4em auto 4em; /* Consistent spacing */
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative; /* For absolute positioning of children */
        padding: 2em; /* Add padding around the image */
        border-radius: 15px; /* Optional: Rounded corners */
    }

    .divider-logo {
        width: 200px;
        background-color: white;
        padding: 10px 0;
        border: 5px solid #000;
        overflow: hidden;
        text-align: center;
        position: absolute;
        z-index: 10;
        border-radius: 10em;
    }

    .divider-image {
        max-width: 90%; /* Image takes up most of the container */
        max-height: 500px; /* Limit height to prevent it from getting too big */
        z-index: 1; /* Above the divider lines */
        border-radius: 100px;
    }

    .divider {
        width: 100%; /*  divider width, now full width */
        height: 2px;
        background-color: #000;
        position: absolute; /* Position absolutely within the container */
        top: 50%; /* Center vertically */
        left: 0; /* Start from the left edge */
        transform: translateY(-50%); /* Correct vertical centering */
        z-index: 0; /* Behind the image */
    }

    .divider::before,
    .divider::after {
        content: "";
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        width: 8px;
        height: 8px;
        background-color: #000;
        border-radius: 50%;
    }

    .divider::before {
        left: 0px; /* Position at the start of the line */
    }

    .divider::after {
        right: 0px; /* Position at the end of the line */
    }
</style>
