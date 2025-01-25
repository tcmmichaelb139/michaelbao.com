<script lang="ts">
	import { openApp } from '$lib/OS/Desktop/utils';

	let { appOpening, svg } = $props();
</script>

<button
	class="inline-flex w-24 flex-col items-center rounded-lg border-2 bg-bg/75 p-2 backdrop-blur-xl transition-all hover:bg-bg-alt"
	onclick={() => openApp(appOpening)}
>
	<div class="w-12">
		{@render svg()}
	</div>
	<div class="select-none text-wrap text-sm">
		{appOpening}
	</div>
</button>
