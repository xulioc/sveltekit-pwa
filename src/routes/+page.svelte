<script lang="ts">
	import { APP_NAME } from '$lib/constants';
	import { ConnectionStatus } from '$lib/components/svelte-connection-status';
	import { log } from '$lib/stores/log';
	import Home from './Home.svelte';
	import Log from './Log.svelte';
	import View1 from './View1.svelte';

	let view = 'home';

	const handleChangeView = (v: string) => {
		view = v;
		log.write('CHANGE VIEW TO ' + v);
	};

	const handleConnectionChange = ({ detail }: any) => {
		if (detail.isOffline) {
			// console.log('>>> you are offline');
			log.write('YOU ARE OFFLINE');
		}
		if (detail.isOnline) {
			// console.log('>>> you are online');
			log.write('YOU ARE ONLINE');
		}
	};
</script>

<div class="container mx-auto">
	<div class="navbar bg-base-100">
		<div class="navbar-start">
			<button
				class="btn btn-sm mx-2"
				class:btn-primary={view === 'home'}
				on:click={() => handleChangeView('home')}>Home</button
			>
			<button
				class="btn btn-sm mx-2"
				class:btn-primary={view === 'view1'}
				on:click={() => handleChangeView('view1')}>View1</button
			>
			<button
				class="btn btn-sm mx-2"
				class:btn-primary={view === 'log'}
				on:click={() => handleChangeView('log')}>Log</button
			>
		</div>
		<div class="navbar-center">
			<p class="btn btn-ghost normal-case text-xl">{APP_NAME}</p>
		</div>
		<div class="navbar-end">
			<ConnectionStatus on:change={handleConnectionChange}>
				<span slot="online">
					<div class="badge badge-success gap-2">online</div>
				</span>
				<span slot="offline">
					<div class="badge badge-error gap-2">offline</div>
				</span>
			</ConnectionStatus>
		</div>
	</div>

	<div class="h-max">
		<!-- VIEWS -->
		{#if view == 'home'}
			<Home />
		{:else if view == 'view1'}
			<View1 />
		{:else if view == 'log'}
			<Log />
		{/if}
	</div>

	<footer
		class="footer footer-center absolute inset-x-0 bottom-0 p-4 bg-base-300 text-base-content"
	>
		<div>
			<p>Copyright © 2022 - All right reserved by ACME Industries Ltd</p>
		</div>
	</footer>
</div>
