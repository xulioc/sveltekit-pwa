<script>
	import { PUBLIC_APP_NAME } from '$env/static/public';
	import { isOnline } from '$lib/components/svelte-connection-status';
</script>

<div class="container mx-auto">
	<div class="navbar bg-base-100">
		<div class="navbar-start">
			<div class="dropdown">
				<label tabindex="0" class="btn btn-ghost btn-circle">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="h-5 w-5"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						><path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M4 6h16M4 12h16M4 18h7"
						/></svg
					>
				</label>
				<ul
					tabindex="0"
					class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
				>
					<li><a>Homepage</a></li>
					<li><a>Portfolio</a></li>
					<li><a>About</a></li>
				</ul>
			</div>
		</div>
		<div class="navbar-center">
			<a class="btn btn-ghost normal-case text-xl">{PUBLIC_APP_NAME}</a>
		</div>
		<div class="navbar-end">
			{#if $isOnline}
				<div class="badge badge-success gap-2">online</div>
			{:else}
				<div class="badge badge-error gap-2">offline</div>
			{/if}
		</div>
	</div>

	<footer
		class="footer footer-center absolute inset-x-0 bottom-0 p-4 bg-base-300 text-base-content"
	>
		<div>
			<p>Copyright © 2022 - All right reserved by ACME Industries Ltd</p>
		</div>
	</footer>
</div>
