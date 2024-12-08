<script lang="ts">
	import { options, opened } from '$lib/state.svelte';

	let { appOpening, svg } = $props();

	function openApp() {
		options.focusApp = appOpening;
		opened[appOpening] = options.zIndex++;
	}
</script>

<button
	class="inline-flex w-24 flex-col items-center rounded-lg p-2 backdrop-blur-xl transition-all hover:bg-gray/50"
	onclick={() => openApp()}
>
	<div class="w-12">
		{@render svg()}
	</div>
	<div class="text-wrap text-sm">
		{appOpening}
	</div>
</button>
