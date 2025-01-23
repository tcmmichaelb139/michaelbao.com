<script lang="ts">
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';

	import { options, opened, splashTime } from '$lib/state.svelte';

	const { children, appName } = $props();

	let initialMount = $state(false);
	let defaultPosX = -1;
	let defaultPosY = -1;
	const moving = $state({
		moving: false,
		originalPosX: 0,
		originalPosY: 0,
		posX: 0,
		posY: 0
	});

	function windowOnTop() {
		options.focusApp = appName;
		opened[appName] = options.zIndex++;
	}

	function onWindowDrag(event: Event) {
		event.preventDefault();

		moving.originalPosX = (event as MouseEvent).clientX;
		moving.originalPosY = (event as MouseEvent).clientY;

		moving.moving = true;

		windowOnTop();
	}

	function onMouseUp() {
		moving.moving = false;
	}

	function onMouseMove(event: Event) {
		event.preventDefault();

		if (moving.moving) {
			moving.posX += (event as MouseEvent).clientX - moving.originalPosX;
			moving.posY += (event as MouseEvent).clientY - moving.originalPosY;

			moving.originalPosX = (event as MouseEvent).clientX;
			moving.originalPosY = (event as MouseEvent).clientY;
		}
	}

	function closeWindow() {
		opened[appName] = -1;
		const result = Object.entries(opened).sort(([, a], [, b]) => b - a)[0];
		if (result[1] == -1) options.focusApp = '';
		else options.focusApp = result[0];
	}

	onMount(() => {
		initialMount = true;
		const loc = Object.keys(opened).indexOf(appName);
		defaultPosX = Math.max(window.innerWidth / 2 - 338, 0) + loc * 10;
		defaultPosY = window.innerHeight / 8 + loc * 10;
		moving.originalPosX = defaultPosX;
		moving.originalPosY = defaultPosY;
		moving.posX = defaultPosX;
		moving.posY = defaultPosY;

		const zIndex = opened[appName];
		const isFocus = options.focusApp === appName;
		setTimeout(() => {
			windowOnTop();
			setTimeout(() => {
				opened[appName] = zIndex;
				if (isFocus) options.focusApp = appName;
			}, splashTime / 3);
		}, splashTime / 2);
	});
</script>

{#if initialMount && opened[appName] !== -1}
	<div
		class="absolute inline-block overflow-clip rounded-lg bg-gradient-to-r from-orange to-purple p-0.5 transition-opacity {options.focusApp ===
		appName
			? 'opacity-100'
			: 'opacity-75'}"
		style="left: {moving.posX}px; top: {moving.posY}px; z-index: {opened[appName]}"
		transition:fade={{ duration: 300 }}
	>
		<div
			class="flex h-full max-h-[70vh] w-full flex-col overflow-clip rounded-md bg-bg md:max-h-[80vh]"
		>
			<div class="flex h-full items-center bg-bg-alt px-1 py-2 text-orange">
				<button class="w-full cursor-move px-2 py-1 text-left" onmousedown={onWindowDrag}
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
				onmousedown={windowOnTop}
				role="button"
				tabindex="0"
			>
				{@render children()}
			</section>
		</div>
	</div>
{/if}

<!-- Hidden children to render for SEO -->
<div class="hidden">
	{@render children()}
</div>

<svelte:window onmouseup={onMouseUp} onmousemove={onMouseMove} />
