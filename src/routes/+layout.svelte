<script>
	import '../app.css';
	import { APP_NAME } from '$lib/constants';

	/* disable right click */
	document.addEventListener('contextmenu', (event) => event.preventDefault());
</script>

<svelte:head>
	<title>{APP_NAME}</title>
	<meta name="description" content={APP_NAME} />
</svelte:head>

<slot />
