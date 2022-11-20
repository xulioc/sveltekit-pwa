<script lang="ts">
	export let log: any[] = [];
</script>

{#each log as l}
	<p>{new Date(l.t).toLocaleString()} > {l.l}</p>
{/each}
