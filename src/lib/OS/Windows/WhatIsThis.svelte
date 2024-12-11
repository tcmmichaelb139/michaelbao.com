<script lang="ts">
	import Window from '$lib/OS/Windows/Templates/Window.svelte';
	import Markdown from '$lib/OS/Windows/Templates/Markdown.svelte';

	import WhatIsThis from '$lib/content/WhatIsThis.md?raw';
</script>

<Window appName="What Is This?">
	<Markdown markdown={WhatIsThis} />
</Window>
