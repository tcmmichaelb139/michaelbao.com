<script lang="ts">
	import LeftBar from '$lib/OS/Bar/LeftBar.svelte';
	import RightBar from '$lib/OS/Bar/RightBar.svelte';
</script>

<nav class="flex h-11 w-full justify-between gap-2 bg-bg-alt/50 px-2 text-sm shadow-md">
	<LeftBar />

	<RightBar />
</nav>
