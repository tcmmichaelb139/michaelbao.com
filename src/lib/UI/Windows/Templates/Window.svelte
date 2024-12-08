<script lang="ts">
	import { onMount } from 'svelte';
	import { scale } from 'svelte/transition';

	import { options, opened } from '$lib/state.svelte';

	const { children, appName } = $props();

	let initialMount = $state(false);
	let width = $state(0);
	let defaultPosX = -1;
	let defaultPosY = -1;
	let moving = false;
	let originalPosX = $state(defaultPosX);
	let originalPosY = $state(defaultPosY);
	let posX = $state(defaultPosX);
	let posY = $state(defaultPosY);

	onMount(() => {
		initialMount = true;
		width = window.innerWidth;
		defaultPosX = Math.max(window.innerWidth / 2 - 338, 0);
		defaultPosY = window.innerHeight / 7;
		originalPosX = defaultPosX;
		originalPosY = defaultPosY;
		posX = defaultPosX;
		posY = defaultPosY;

		console.log(window.innerWidth);
	});

	function onMouseDown(event: Event) {
		event.preventDefault();

		originalPosX = (event as MouseEvent).clientX;
		originalPosY = (event as MouseEvent).clientY;

		moving = true;

		options.focusApp = appName;
		opened[appName] = options.zIndex++;
	}

	function onMouseUp() {
		moving = false;
	}

	function onMouseMove(event: Event) {
		event.preventDefault();

		if (moving) {
			posX += (event as MouseEvent).clientX - originalPosX;
			posY += (event as MouseEvent).clientY - originalPosY;

			originalPosX = (event as MouseEvent).clientX;
			originalPosY = (event as MouseEvent).clientY;
		}
	}

	function closeWindow() {
		opened[appName] = -1;
		const result = Object.entries(opened).sort(([, a], [, b]) => b - a)[0];
		if (result[1] == -1) options.focusApp = '';
		else options.focusApp = result[0];
	}
</script>

{#if initialMount && opened[appName] != -1}
	<div
		class="absolute inline-block overflow-clip rounded-lg bg-gradient-to-r from-orange to-purple p-0.5"
		style="left: {posX}px; top: {posY}px; z-index: {opened[appName]}"
		transition:scale={{ duration: 300 }}
	>
		<div class="flex h-full max-h-[80vh] w-full flex-col overflow-clip rounded-md bg-bg">
			<div class="flex h-full items-center bg-bg-alt px-1 py-2 text-orange">
				<button class="w-full cursor-move px-2 py-1 text-left" onmousedown={onMouseDown}
					>{appName}
				</button>
				<button
					class=" m-1 w-6 text-red transition-all hover:brightness-125"
					onmousedown={closeWindow}
					aria-label="Window close"
				>
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
						><path
							d="M11.9997 10.5865L16.9495 5.63672L18.3637 7.05093L13.4139 12.0007L18.3637 16.9504L16.9495 18.3646L11.9997 13.4149L7.04996 18.3646L5.63574 16.9504L10.5855 12.0007L5.63574 7.05093L7.04996 5.63672L11.9997 10.5865Z"
						></path></svg
					>
				</button>
			</div>
			<section
				class="prose prose-sm prose-tokyonight max-w-2xl overflow-auto overflow-x-clip p-4"
				style="width: {window.innerWidth - 4}px"
			>
				{@render children()}
			</section>
		</div>
	</div>
{/if}

<svelte:window onmouseup={onMouseUp} onmousemove={onMouseMove} />
