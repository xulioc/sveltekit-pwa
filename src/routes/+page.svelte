<script>
	// https://learn.microsoft.com/en-us/microsoft-edge/progressive-web-apps-chromium/how-to/offline

	// https://dev.to/maxmonteil/is-your-app-online-here-s-how-to-reliably-know-in-just-10-lines-of-js-guide-3in7

	console.log('STARTING APP...', navigator.onLine);

	window.addEventListener('online', function () {
		console.log('You are online!');
	});
	window.addEventListener('offline', function () {
		console.log('Oh no, you lost your network connection.');
	});
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
