<script lang="ts">
	import { onMount } from 'svelte';

	import Boundary from '$lib/OS/Bar/Modules/Templates/Boundary.svelte';
	import Svg from '$lib/OS/Bar/Modules/Templates/Svg.svelte';

	let date = $state(new Date());
	const weekday = $derived(date.toLocaleDateString('en-US', { weekday: 'short' }));
	const day = $derived(date.toLocaleDateString('en-US', { day: '2-digit' }));
	const month = $derived(date.toLocaleDateString('en-US', { month: 'short' }));
	const combined = $derived(`${weekday} ${day}. ${month}`);

	onMount(() => {
		const interval = setInterval(() => {
			date = new Date();
		}, 1000);
		return () => clearInterval(interval);
	});
</script>

<div class="text-blue">
	<Boundary>
		<Svg>
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
				><path
					d="M17 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3H7V1H9V3H15V1H17V3ZM4 9V19H20V9H4ZM6 11H8V13H6V11ZM11 11H13V13H11V11ZM16 11H18V13H16V11Z"
				></path></svg
			>
		</Svg>
		<div class="text-nowrap">{combined}</div>
	</Boundary>
</div>
