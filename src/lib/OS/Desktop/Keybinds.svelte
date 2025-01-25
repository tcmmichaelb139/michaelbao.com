<script lang="ts">
	import Markdown from '$lib/misc/Markdown.svelte';

	import Keybinds from '$lib/content/Keybinds.md?raw';
</script>

<div
	class="absolute bottom-2 right-2 hidden rounded-lg border-2 border-gray bg-bg/75 px-4 pb-4 pt-2 backdrop-blur-sm sm:flex"
>
	<section class="prose prose-sm prose-tokyonight text-sm/3">
		<Markdown markdown={Keybinds} />
	</section>
</div>
