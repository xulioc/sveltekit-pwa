<script lang="ts">
	import { APP_NAME } from '$lib/constants';
	import { ConnectionStatus } from '$lib/components/svelte-connection-status';
	import { popup, log } from '$lib/store';
	import Home from './Home.svelte';
	import Log from './Log.svelte';
	import View1 from './View1.svelte';
	import PopUp from './PopUp.svelte';

	import { fade, fly } from 'svelte/transition';

	import { invoke } from '@tauri-apps/api/tauri';

	let view = 'home';

	const handleChangeView = async (v: string) => {
		view = v;
		log.write('CHANGE VIEW TO ' + v);

		// let greetMsg = await invoke('user_iddle');
		// console.log(greetMsg);
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

	{#if $popup}
		<div transition:fly={{ y: 200, duration: 500 }}>
			<PopUp />
		</div>
	{/if}

	<footer
		class="footer footer-center absolute inset-x-0 bottom-0 p-4 bg-base-300 text-base-content"
	>
		<div class="flex flex-row w-full">
			<div>
				<p>Copyright © 2022 - All right reserved by ACME Industries Ltd</p>
			</div>

			<div class="ml-auto">
				<button class="btn btn-sm" on:click={() => ($popup = !$popup)}>
					{#if $popup}
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke-width="1.5"
							stroke="currentColor"
							class="w-6 h-6"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M19.5 8.25l-7.5 7.5-7.5-7.5"
							/>
						</svg>
					{:else}
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke-width="1.5"
							stroke="currentColor"
							class="w-6 h-6"
						>
							<path stroke-linecap="round" stroke-linejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
						</svg>
					{/if}
				</button>
			</div>
		</div>
	</footer>
</div>
