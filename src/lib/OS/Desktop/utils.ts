import { options, opened } from '$lib/state.svelte';

export function openApp(appOpening: string) {
	options.focusApp[options.workspace] = appOpening;
	opened[options.workspace][appOpening] = options.zIndex++;
}
