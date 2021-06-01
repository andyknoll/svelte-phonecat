<script>
    // import { flip } from 'svelte/animate';   // for animations
	export let app;                             // the only prop passsed in
    const phone = app.models.phoneDetail;
    $: imgSrc = phone.images[0];                // no need for onThumbClick

    const onBackClick = () => {
        app.views.setCurrentView(0);
    }

</script>

<!-- the HRML/CSS for each individual phone detail -->
<div class="phone-detail-page">
    <div class="phone-detail-row">
        <div class="phone-image">
            <img src={imgSrc} alt="phone" />
        </div>
        <div class="phone-text">
            <div class="phone-name">{phone.name}</div>
            <div class="phone-descr">{phone.description}</div>
            <div class="phone-thumbs">
                {#each phone.images as path}
                    <img src={path} alt="phone" draggable="false" on:click={() => imgSrc = path} />
                {/each}
            </div>
        </div>
        <div class="back-button" on:click={onBackClick} ><button>X</button></div>
    </div>

    <div class="phone-specs-row">
        <div class="spec-block">
            <h4>Display</h4>
            <ul>
                <li>{phone.display.screenSize} screen size</li>
                <li>{phone.display.screenResolution} resolution</li>
                <li>{phone.display.touchScreen} touchscreen</li>
            </ul>
        </div>
        <div class="spec-block">
            <h4>Hardware</h4>
            <ul>
                <li>{phone.hardware.cpu}</li>
                <li>{phone.hardware.usb}</li>
            </ul>
        </div>
        <div class="spec-block">
            <h4>Camera</h4>
            <ul>
                <li>{phone.camera.primary}</li>
                <li>{phone.camera.features[0]}</li>
                <li>{phone.camera.features[1]}</li>
            </ul>
        </div>
        <div class="spec-block">
            <h4>Battery</h4>
            <ul>
                <li>{phone.battery.standbyTime} Standby Time</li>
                <li>{phone.battery.talkTime} Talk Time</li>
            </ul>
        </div>
    </div>
</div>


<style>

    .phone-detail-page {
        position: relative;
        top: 70px;
        border: 1px solid #ffffff;
        animation-name: zoomIn;
        animation-duration: .3s;
    }

    .phone-detail-row {
        width: 100%;
        display: flex;
        justify-content: space-between;
        margin: 5px 0px 10px 0px;
        padding-bottom: 10px;
        border-bottom: 1px solid gray;
    }

    .phone-image img {
        width: 400px;
        animation-name: zoomImg;
        animation-duration: .3s;
        /* border: 1px solid green; */
    }

    .phone-text {
        width: 75%;
        display: flex;
        margin-left: 30px;
        flex-direction: column;
        align-items: flex-start;
        justify-content: space-around;
        /* border: 1px solid green; */
    }

    .phone-thumbs img {
        height: 80px;
        padding: 10px;
    }

    .phone-name {
        font-size: 1.5em;
        font-weight: 600;
        color: #337ab7;
    }

    .phone-descr {
        padding: 40px;
        font-size: 1.2em;
    }

    .back-button button {
        width: 42px;
        height: 40px;
        color: #337ab7;
        font-size: 1.5em;
        font-weight: bold;
        border: 2px solid #337ab7;
        border-radius: 50%;
    }

    /* SPECS */

    .phone-specs-row {
        width: 100%;
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
        /* border: 1px solid gray; */
    }
    
    .spec-block {
        min-width: 290px;
        min-height: 200px;
        /* border: 1px solid red; */
    }
    
    @keyframes zoomIn {
        from {
            transform: scale(.8);
            opacity: 0;
        }
        to {
            transform: scale(1);
            opacity: 1;
        }
    }

    @keyframes zoomImg {
        from {
            transform: scale(0);
            opacity: 0;
        }
        to {
            transform: scale(1);
            opacity: 1;
        }
    }

</style>
