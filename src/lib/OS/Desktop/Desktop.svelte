<script lang="ts">
	import AboutMe from '$lib/OS/Desktop/Apps/AboutMe.svelte';
	import WhatIsThis from '$lib/OS/Desktop/Apps/WhatIsThis.svelte';
	import Projects from '$lib/OS/Desktop/Apps/Projects.svelte';

	import Keybinds from '$lib/OS/Desktop/Keybinds.svelte';
</script>

<div class="m-2 flex flex-col flex-wrap gap-2">
	<AboutMe />
	<Projects />
	<WhatIsThis />

	<Keybinds />
</div>
