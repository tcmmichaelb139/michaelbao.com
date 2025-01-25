import { options, opened, position } from '$lib/state.svelte';

const numWorkspaces = 9;

export function initVars() {
	for (let i = 2; i <= numWorkspaces; i++) {
		opened.push({
			'About Me': -1,
			Projects: -1,
			'What Is This?': -1
		});

		options.focusApp.push('');

		position.push({});
	}
}
