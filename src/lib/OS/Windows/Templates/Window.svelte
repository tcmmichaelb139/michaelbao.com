<script lang="ts">
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';

	import { options, opened, position } from '$lib/state.svelte';

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

	$effect(() => {
		if (!position[options.workspace][appName]) {
			position[options.workspace][appName] = { x: defaultPosX, y: defaultPosY };
		}
		moving.posX = position[options.workspace][appName].x;
		moving.posY = position[options.workspace][appName].y;
		moving.originalPosX = position[options.workspace][appName].x;
		moving.originalPosY = position[options.workspace][appName].y;
	});

	function windowOnTop() {
		options.focusApp[options.workspace] = appName;
		opened[options.workspace][appName] = options.zIndex++;
	}

	function onWindowDrag(event: MouseEvent) {
		event.preventDefault();

		moving.originalPosX = event.clientX;
		moving.originalPosY = event.clientY;

		moving.moving = true;

		windowOnTop();
	}

	function onTouchStart(event: TouchEvent) {
		moving.originalPosX = event.touches[0].clientX;
		moving.originalPosY = event.touches[0].clientY;

		moving.moving = true;

		windowOnTop();
	}

	function onMouseUp() {
		moving.moving = false;

		position[options.workspace][appName] = { x: moving.posX, y: moving.posY };
	}

	function onMouseMove(event: MouseEvent) {
		event.preventDefault();

		if (moving.moving) {
			moving.posX += event.clientX - moving.originalPosX;
			moving.posY += event.clientY - moving.originalPosY;

			moving.originalPosX = event.clientX;
			moving.originalPosY = event.clientY;
		}
	}

	function onTouchMove(event: TouchEvent) {
		if (moving.moving) {
			moving.posX += event.touches[0].clientX - moving.originalPosX;
			moving.posY += event.touches[0].clientY - moving.originalPosY;

			moving.originalPosX = event.touches[0].clientX;
			moving.originalPosY = event.touches[0].clientY;
		}
	}

	function closeWindow() {
		opened[options.workspace][appName] = -1;
		const result = Object.entries(opened[options.workspace]).sort(([, a], [, b]) => b - a)[0];
		if (result[1] == -1) options.focusApp[options.workspace] = '';
		else options.focusApp[options.workspace] = result[0];
	}

	onMount(() => {
		initialMount = true;
		const loc = Object.keys(opened[options.workspace]).indexOf(appName);
		defaultPosX = Math.max(window.innerWidth / 2 - 338, 0) + loc * 10;
		defaultPosY = window.innerHeight / 8 + loc * 10;

		if (position[options.workspace][appName].x === -1) {
			position[options.workspace][appName] = { x: defaultPosX, y: defaultPosY };

			moving.originalPosX = defaultPosX;
			moving.originalPosY = defaultPosY;
			moving.posX = defaultPosX;
			moving.posY = defaultPosY;
		} else {
			moving.originalPosX = position[options.workspace][appName].x;
			moving.originalPosY = position[options.workspace][appName].y;
			moving.posX = position[options.workspace][appName].x;
			moving.posY = position[options.workspace][appName].y;
		}
	});
</script>

{#if initialMount && opened[options.workspace][appName] !== -1}
	<div
		class="absolute inline-block overflow-clip rounded-lg backdrop-blur-sm {moving.moving
			? 'transition-opacity'
			: 'transition-all ease-linear'}"
		style="left: {moving.posX}px; top: {moving.posY}px; z-index: {opened[options.workspace][
			appName
		]};"
		transition:fade={{ duration: 150 }}
		onmousedown={windowOnTop}
		ontouchstart={windowOnTop}
		role="button"
		tabindex="0"
	>
		<div
			class="inline-block bg-gradient-to-br from-orange to-purple p-0.5 transition-opacity {options
				.focusApp[options.workspace] === appName
				? 'opacity-100'
				: 'opacity-75'} "
		>
			<div
				class="flex h-full max-h-[70vh] w-full flex-col overflow-clip rounded-md transition-colors md:max-h-[80vh] {options
					.focusApp[options.workspace] === appName
					? 'bg-bg'
					: 'bg-bg/95'}"
			>
				<div class="flex h-full items-center bg-bg-alt p-1 text-orange">
					<button
						class="w-full cursor-move px-2 py-1 text-left"
						onmousedown={onWindowDrag}
						ontouchstart={onTouchStart}
					>
						{appName}
					</button>
					<button
						class="m-1 w-6 text-red transition-all hover:brightness-125"
						onclick={closeWindow}
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
	</div>
{/if}

<!-- Hidden children to render for SEO -->
<div class="hidden">
	{@render children()}
</div>

<svelte:window
	onmouseup={onMouseUp}
	ontouchend={onMouseUp}
	onmousemove={onMouseMove}
	ontouchmove={onTouchMove}
/>
