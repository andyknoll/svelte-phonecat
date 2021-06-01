<script>
    import PhoneSearchBox from './PhoneSearchBox.svelte';
    import PhoneListItem from './PhoneListItem.svelte';
	export let app;         // external prop
    $: phones = app.models.phones;
</script>

<style>
    .phone-list {
        position: relative;
        top: 140px;
        /* border: 1px solid green; */
    }

</style>

<div class="phone-list">
    <PhoneSearchBox app={app} />
    {#each phones as phone}
        {#if phone.name.toLowerCase().includes(app.views.filterStr.toLowerCase())}
            <PhoneListItem app={app} phone={phone} />
        {/if}
    {/each}
</div>
