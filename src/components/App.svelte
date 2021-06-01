<script>
	import PhoneList from './PhoneList.svelte';
	import Header from './Header.svelte';
	import PhoneDetail from './PhoneDetail.svelte';

	let app;		// internal prop (no export)

	// called by the JS app object to update UI
	export const refresh = (jsApp) => {
		app = jsApp;		// state change
	}
</script>


<style>
	.app {
		position: relative;
		max-width: 1200px;
		margin: auto;
		user-select: none;
	}
</style>


<div class="app">
	{#if typeof app !== 'undefined'}
	
		<Header app={app} />

		<!-- replace this with router -->
		{#if app.views.currentView === 0}
			<PhoneList app={app} />
		{:else if app.views.currentView === 1}
			<PhoneDetail app={app} />
		{/if}

	{/if}
</div>

