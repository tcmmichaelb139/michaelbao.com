<script lang="ts">
	import Boundary from '$lib/OS/Bar/Modules/Templates/Boundary.svelte';

	import { options } from '$lib/state.svelte';
</script>

<div class="text-fg">
	<Boundary>
		<div>
			{#if options.focusApp[options.workspace] != ''}
				{options.focusApp[options.workspace]}
			{:else}
				Open an App
			{/if}
		</div>
	</Boundary>
</div>
