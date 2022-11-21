<script>
	import SvelteLog from '$lib/components/svelte-log/SvelteLog.svelte';
	import { log } from '$lib/stores/log';
</script>

<div class="bg-base-200 h-full">
	<div class="flex float-right justify-end">
		<button on:click={() => log.clear()} class="btn btn-circle btn-sm m-2">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="h-6 w-6"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
				><path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M6 18L18 6M6 6l12 12"
				/></svg
			>
		</button>
	</div>

	<!-- <button on:click={() => log.write('HELLO')}> Add item </button>
<button on:click={() => log.clear()}> Clear </button> -->

	<SvelteLog log={$log} />
</div>
