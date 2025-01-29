import { opened, options } from '$lib/state.svelte';

export function closeWindow(appName: string) {
	opened[options.workspace][appName] = -1;
	const result = Object.entries(opened[options.workspace]).sort(([, a], [, b]) => b - a)[0];
	if (result[1] == -1) options.focusApp[options.workspace] = '';
	else options.focusApp[options.workspace] = result[0];
}
