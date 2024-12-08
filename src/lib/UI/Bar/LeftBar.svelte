<script lang="ts">
	import Space from '$lib/UI/Bar/Modules/Space.svelte';
	import Application from '$lib/UI/Bar/Modules/Application.svelte';

	import { options } from '$lib/state.svelte';
</script>

<div class="flex gap-2 overflow-clip">
	<div class="hidden sm:flex">
		<Space />
	</div>
	<Application />
</div>
