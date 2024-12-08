<script lang="ts">
	import LeftBar from '$lib/UI/Bar/LeftBar.svelte';
	import RightBar from '$lib/UI/Bar/RightBar.svelte';
</script>

<nav
	class="flex h-11 w-full justify-between gap-2 bg-bg/50 px-2 text-sm shadow-md backdrop-blur-md"
>
	<LeftBar />

	<RightBar />
</nav>
