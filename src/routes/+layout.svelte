<script>
	import '../app.css';
	import { PUBLIC_APP_NAME } from '$env/static/public';

	/* disable right click */
	document.addEventListener('contextmenu', (event) => event.preventDefault());
</script>

<svelte:head>
	<title>{PUBLIC_APP_NAME}</title>
	<meta name="description" content={PUBLIC_APP_NAME} />
</svelte:head>

<slot />
