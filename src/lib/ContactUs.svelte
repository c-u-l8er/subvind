<script>
</script>

<div class="wrap">
    <form
        class="contact-form"
        action="https://formspree.io/f/myzkbppo"
        method="POST"
    >
        <div class="paper">
            <h1 class="title">CONTACT US</h1>
            <label>
                Your email:
                <input type="email" name="email" />
            </label>
            <label>
                Your message:
                <textarea name="message"></textarea>
            </label>
            <!-- your other form fields go here -->
            <button type="submit">Submit</button>
        </div>
    </form>
</div>

<style>
    .wrap {
        background: #2c3e50;
        overflow: hidden;
    }
    .contact-form {
        background-color: #8b4513; /* Brown for the clipboard */
        padding: 2em;
        border-radius: 5px;
        width: 100%;
        max-width: 600px;
        margin: 4em auto;
        box-shadow: 0 0 50px rgba(0, 0, 0, 0.5);
        font-family: "Courier New", monospace;
        border: none;
        position: relative; /* Important for positioning children */
    }

    .contact-form::before {
        content: "";
        position: absolute;
        top: -1em;
        left: 50%;
        transform: translateX(-50%);
        font-size: 1.5em;
        font-weight: bold;
        color: white;
        letter-spacing: 0.1em;
        text-align: center;
        z-index: 3; /* Above paper and clipboard */
    }

    .contact-form::after {
        content: ""; /* The metal clip */
        position: absolute;
        top: -20px;
        left: 50%;
        transform: translateX(-50%);
        width: 200px;
        height: 50px;
        background-color: #777;
        border-radius: 5px 5px 0 0;
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.4);
        z-index: 3; /* On top of everything */
    }

    .paper {
        position: relative; /* Within the form */
        background-color: #fff; /* White paper */
        width: 90%; /* Slightly smaller than the form */
        padding: 1.5em;
        margin: -0.5em auto 1em auto; /* Center horizontally and add top margin */
        border-radius: 3px;
        box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);
        transform: rotate(-1deg); /* Slant the paper */
        z-index: 2; /* Above the clipboard, below the clip */
    }

    .paper .title {
        text-align: center;
        margin: 0 0 0.5em;
        font-size: 2em;
        font-weight: bold;
    }

    .contact-form label {
        display: block;
        margin-bottom: 0.3em;
        font-weight: bold;
        color: #2c3e50;
        font-size: 1.1em;
    }

    .contact-form input[type="email"],
    .contact-form textarea {
        width: 100%;
        padding: 0.75em;
        margin-bottom: 1.2em;
        border: 1px solid #ccc;
        border-radius: 3px;
        font-size: 1em;
        font-family: "Courier New", monospace;
        box-sizing: border-box;
        background-color: #fff;
        color: #34495e;
    }

    .contact-form textarea {
        height: 150px;
        resize: vertical;
    }

    .contact-form button[type="submit"] {
        background-color: #8b4513;
        color: white;
        padding: 0.8em 1.5em;
        border: none;
        border-radius: 25px;
        font-size: 1.2em;
        cursor: pointer;
        transition:
            background-color 0.3s,
            transform 0.3s;
        display: block;
        margin: 0 auto;
        font-family: "Courier New", monospace;
        letter-spacing: 0.1em;
    }

    .contact-form button[type="submit"]:hover {
        background-color: #a0522d;
        transform: scale(1.05);
    }

    .contact-form input::placeholder,
    .contact-form textarea::placeholder {
        color: #777;
        font-style: italic;
    }
</style>
