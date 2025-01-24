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

<div class="h-full w-full bg-wallpaper bg-cover">
	<!-- idk how but backdrop-blur-0 clips the window which is good -->
	<div class="h-full w-full backdrop-blur-0">
		{@render children()}
	</div>
</div>
