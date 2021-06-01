<script>
	export let app;
	export let phone;

    const onThumbClick = (phone) => {
        app.services.fetchPhoneDetail(phone.id);
    }

</script>

<div>
    <div class="phone-item">
        <div class="phone-thumb">
            <img src={phone.imageUrl} alt="phone" on:click={onThumbClick(phone)} />
        </div>
        <div class="phone-text">
            <div class="phone-name">{phone.name}</div>
            <div class="phone-descr">{phone.snippet}</div>
            <div class="tattle-rating">Tattle Rating: {phone.tattleRating}</div>
        </div>
    </div>
</div>

<style>
    .phone-item {
        width: 100%;
        /* min-height: 120px; */
        display: flex;
        align-items: center;
        margin-bottom: 20px;
        animation-name: growHeight;
        animation-duration: .3s;
        overflow: hidden;
    }

    .phone-thumb img {
        height: 110px;
    }

    .phone-text {
        margin-left: 20px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
    }

    .phone-name {
        font-size: 1.2em;
        font-weight: 600;
        color: #337ab7;
    }

    .phone-descr {
        font-size: 1em;
    }

    .tattle-rating {
        margin-top: 5px;
        font-size: 0.8em;
        font-weight: bold;
    }

    @keyframes growHeight {
        from {
            height: 0px;
            opacity: 0;
        }
        to {
            height: 114px;
            opacity: 1;
        }
    }
</style>
