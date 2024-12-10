<script lang="ts">
	import { options } from '$lib/state.svelte';

	import Boundary from '$lib/OS/Bar/Modules/Templates/Boundary.svelte';

	const spaceIcons = ['一', '二', '三', '四', '五', '六', '七', '八', '九'];

	function switchWorkspaces(index: number) {
		options['workspace'] = index + 1;
	}
</script>

<div class="text-red">
	<Boundary>
		{#each spaceIcons as icon, index}
			<button onclick={() => switchWorkspaces(index)}>
				{#if index === options['workspace'] - 1}
					<span class="text-current mx-0.5">{icon}</span>
				{:else}
					<span class="mx-0.5 text-fg">{icon}</span>
				{/if}
			</button>
		{/each}
	</Boundary>
</div>
