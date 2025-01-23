<script lang="ts">
	import Space from '$lib/OS/Bar/Modules/Space.svelte';
	import Application from '$lib/OS/Bar/Modules/Application.svelte';
</script>

<div class="flex gap-2 overflow-clip">
	<div class="hidden sm:flex">
		<Space />
	</div>
	<Application />
</div>
