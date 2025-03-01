<script lang="ts">
	import { onNavigate } from '$app/navigation';

	import '../app.css';
	const { children } = $props();

	onNavigate((navigation) => {
		if (!document.startViewTransition) return;

		return new Promise((resolve) => {
			document.startViewTransition(async () => {
				resolve();
				await navigation.complete;
			});
		});
	});
</script>

<div class="h-full w-full">
	<img src="/wallpaper.png" alt="Wallpaper" class="absolute -z-[999] h-full object-cover" />
	<div class="relative h-full w-full overflow-clip">
		{@render children()}
	</div>
</div>
