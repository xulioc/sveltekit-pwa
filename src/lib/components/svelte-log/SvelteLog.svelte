<script lang="ts">
	export let log: any[] = [];

	const sort_descending = (a: any, b: any) => {
		return b.t - a.t;
	};
</script>

{#each log.sort(sort_descending) as l}
	<p style="font-family: monospace;">[{new Date(l.t).toLocaleString()}] {l.l}</p>
{/each}
