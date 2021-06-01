<script>
	export let app;
 </script>

<div class="app-header">
    <div class="logo-title">
        <h1>{app.name} for </h1>
        <div class="tattle-logo"></div>
    </div>
    <p>{app.author}</p>
</div>

<style>
    .app-header {
        position: fixed;
        height: 50px;
		width: 1200px;
		max-width: 1200px;
        margin: 0px 0px 20px 0px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        color: #337ab7;
        background-color: #f4f5f7;
        z-index: 100;
        border-bottom: 1px solid #337ab7;
    }

    .logo-title {
        margin-left: 10px;
        display: flex;
        align-items: center;
    }

    /* not the best way for bg image - look into this */
    .tattle-logo {
        width: 80px;
        height: 18px;
        margin-right: 10px;
        background-image: url('http://andyknoll.com/tattle/svelte-phonecat/img/tattle-logo.png');
        background-repeat: no-repeat;
        background-size: contain;
    }

    h1 {
        height: 40px;
        margin: 0px 10px 0px 0px;
        font-size: 1.7em;
        font-weight: 400;
        /* text-shadow: 1px 1px 2px #222222; */
    }

    p {
        margin-right: 10px;
    }
</style>
