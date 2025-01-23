<script lang="ts">
	import SEO from '$lib/misc/SEO.svelte';
	import Splash from '$lib/misc/Splash.svelte';

	import Bar from '$lib/OS/Bar/Bar.svelte';
	import Desktop from '$lib/OS/Desktop/Desktop.svelte';

	import AboutMe from '$lib/OS/Windows/AboutMe.svelte';
	import Projects from '$lib/OS/Windows/Projects.svelte';
	import WhatIsThis from '$lib/OS/Windows/WhatIsThis.svelte';
	import { onMount } from 'svelte';

	let showSplash = $state(true);

	onMount(() => {
		const previousUrl = document.referrer;
		console.log(previousUrl);
		const currentUrl = document.URL;

		if (previousUrl.includes(currentUrl)) {
			showSplash = false;
		}
	});
</script>

<SEO />

<Splash bind:showSplash />

<div class="h-full w-full overflow-clip">
	<Bar />
	<Desktop />
	<AboutMe />
	<Projects />
	<WhatIsThis />
</div>
