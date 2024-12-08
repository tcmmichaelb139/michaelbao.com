<script lang="ts">
	import { opened } from '$lib/state.svelte';

	import Bar from '$lib/UI/Bar/Bar.svelte';
	import Desktop from '$lib/UI/Desktop/Desktop.svelte';

	import AboutMe from '$lib/UI/Windows/AboutMe.svelte';
	import Projects from '$lib/UI/Windows/Projects.svelte';
	import WhatIsThis from '$lib/UI/Windows/WhatIsThis.svelte';
</script>

<svelte:head>
	<title>Michael Bao</title>
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<meta property="og_site_name" content="michaelbao.io" />
	<meta property="og:url" content="https://michaelbao.io/" />
	<meta property="og:type" content="website" />
	<meta property="og:title" content="Michael Bao" />
</svelte:head>

<div class="h-full w-full overflow-clip">
	<Bar />
	<Desktop />
	<AboutMe />
	<Projects />
	<WhatIsThis />
</div>
