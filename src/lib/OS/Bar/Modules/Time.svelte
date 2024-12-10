<script lang="ts">
	import { onMount } from 'svelte';

	import Boundary from '$lib/OS/Bar/Modules/Templates/Boundary.svelte';
	import Svg from '$lib/OS/Bar/Modules/Templates/Svg.svelte';

	let time = $state(new Date().toLocaleTimeString('en-US', { hour12: false }));

	onMount(() => {
		const interval = setInterval(() => {
			time = new Date().toLocaleTimeString('en-US', { hour12: false });
		}, 1000);
		return () => clearInterval(interval);
	});
</script>

<div class="text-purple">
	<Boundary>
		<Svg>
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
				><path
					d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM13 12H17V14H11V7H13V12Z"
				></path></svg
			>
		</Svg>
		<div>{time}</div>
	</Boundary>
</div>
