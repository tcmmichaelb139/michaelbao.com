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

<div class="bg-background-image h-full w-full bg-cover">
	{@render children()}
</div>
