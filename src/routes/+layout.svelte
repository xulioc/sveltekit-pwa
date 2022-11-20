<script>
	import '../app.css';
	import { PUBLIC_APP_NAME } from '$env/static/public';
</script>

<svelte:head>
	<title>{PUBLIC_APP_NAME}</title>
	<meta name="description" content={PUBLIC_APP_NAME} />
</svelte:head>

<slot />
