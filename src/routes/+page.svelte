<script lang="ts">
	import SEO from '$lib/misc/SEO.svelte';
	import Splash from '$lib/misc/Splash.svelte';

	import Bar from '$lib/OS/Bar/Bar.svelte';
	import Desktop from '$lib/OS/Desktop/Desktop.svelte';

	import AboutMe from '$lib/OS/Windows/AboutMe.svelte';
	import Projects from '$lib/OS/Windows/Projects.svelte';
	import WhatIsThis from '$lib/OS/Windows/WhatIsThis.svelte';

	import { options, opened } from '$lib/state.svelte';
	import { openApp } from '$lib/OS/Desktop/utils';
	import { initVars } from '$lib/utils';

	initVars();

	function handleKeyDown(e: KeyboardEvent) {
		const key = e.key.toLowerCase();

		if (+key >= 1 && +key <= 9) {
			// Switch workspaces
			e.preventDefault();

			options['workspace'] = +key - 1;
		} else if (key === 'tab') {
			// Switch focus app
			e.preventDefault();

			if (options.focusApp[options.workspace] == '') return;

			const windows = Object.keys(opened[options.workspace]).reduce(
				(acc: string[], key: string) => {
					if (opened[options.workspace][key] != -1) acc.push(key);
					return acc;
				},
				[]
			);
			const index = windows.indexOf(options.focusApp[options.workspace]);
			options.focusApp[options.workspace] = windows[(index + 1) % windows.length];
			opened[options.workspace][options.focusApp[options.workspace]] = options.zIndex++;
		} else if (key === 'a') {
			// Open About Me
			e.preventDefault();

			openApp('About Me');
		} else if (key === 'p') {
			// Open Projects
			e.preventDefault();

			openApp('Projects');
		} else if (key === 'h') {
			// Open What Is This?
			e.preventDefault();

			openApp('What Is This?');
		}
	}
</script>

<SEO />

<Splash />

<div class="h-full w-full overflow-clip">
	<Bar />
	<Desktop />
	<AboutMe />
	<Projects />
	<WhatIsThis />
</div>

<svelte:window onkeydown={handleKeyDown} />
