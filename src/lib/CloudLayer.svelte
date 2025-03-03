<div style="height: 40px;">
    <div class="cloud-bottom">
        <div class="cloud-layer-1"></div>
        <div class="cloud-layer-2"></div>
    </div>
</div>

<style>
    .cloud-bottom {
        position: relative;
        bottom: 0px;
        left: 0;
        width: 100%;
        height: 40px;
        background: transparent;
        pointer-events: none;
        transform: scaleY(-1); /* This flips the clouds vertically */
        overflow: hidden;
    }

    .cloud-layer-1 {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 20px;
        background: transparent;
    }

    .cloud-layer-2 {
        position: absolute;
        top: 0px;
        left: -350px;
        width: calc(100% + 350px);
        height: 20px;
        background: transparent;
    }

    .cloud-layer-1::after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 20px;
        background: #2c3e50;
        clip-path: path(
            "M0,20 C150,20 200,0 300,0 C400,0 450,20 600,20 C750,20 800,0 900,0 C1000,0 1050,20 1200,20 C1350,20 1400,0 1500,0 C1600,0 1650,20 1800,20 C1950,20 2000,0 2100,0 C2200,0 2250,20 2400,20 V0 H0 Z"
        );
    }

    .cloud-layer-2::after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 20px;
        background: rgba(
            44,
            62,
            80,
            0.5
        ); /* Changed to semi-transparent #2c3e50 */
        clip-path: path(
            "M0,20 C200,20 250,0 350,0 C450,0 500,20 650,20 C800,20 850,0 950,0 C1050,0 1100,20 1250,20 C1400,20 1450,0 1550,0 C1650,0 1700,20 1850,20 C2000,20 2050,0 2150,0 C2250,0 2300,20 2450,20 V0 H0 Z"
        );
    }
</style>
