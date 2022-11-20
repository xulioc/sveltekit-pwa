<script>
	import { PUBLIC_APP_NAME } from '$env/static/public';
	import { isOnline } from '$lib/components/svelte-connection-status';
	import SvelteLog from '$lib/components/svelte-log/SvelteLog.svelte';

	import { log } from '$lib/stores/log';

	import Home from './Home.svelte';
	import Log from './Log.svelte';
	import View1 from './View1.svelte';

	let view = 'home';
</script>

<div class="container mx-auto">
	<div class="navbar bg-base-100">
		<div class="navbar-start">
			<button
				class="btn btn-sm mx-2"
				class:btn-primary={view === 'home'}
				on:click={() => (view = 'home')}>Home</button
			>
			<button
				class="btn btn-sm mx-2"
				class:btn-primary={view === 'view1'}
				on:click={() => (view = 'view1')}>View1</button
			>
			<button
				class="btn btn-sm mx-2"
				class:btn-primary={view === 'log'}
				on:click={() => (view = 'log')}>Log</button
			>
		</div>
		<div class="navbar-center">
			<p class="btn btn-ghost normal-case text-xl">{PUBLIC_APP_NAME}</p>
		</div>
		<div class="navbar-end">
			{#if $isOnline}
				<div class="badge badge-success gap-2">online</div>
			{:else}
				<div class="badge badge-error gap-2">offline</div>
			{/if}
		</div>
	</div>

	<!-- VIEWS -->
	{#if view == 'home'}
		<Home />
	{:else if view == 'view1'}
		<View1 />
	{:else if view == 'log'}
		<!-- <button on:click={() => log.write('HELLO')}> Add item </button>
		<button on:click={() => log.clear()}> Clear </button>
		<SvelteLog bind:log={$log} /> -->
		<Log />
	{/if}

	<footer
		class="footer footer-center absolute inset-x-0 bottom-0 p-4 bg-base-300 text-base-content"
	>
		<div>
			<p>Copyright © 2022 - All right reserved by ACME Industries Ltd</p>
		</div>
	</footer>
</div>
