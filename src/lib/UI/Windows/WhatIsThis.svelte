<script lang="ts">
	import { marked } from 'marked';

	import Window from '$lib/UI/Windows/Templates/Window.svelte';

	import WhatIsThis from '$lib/content/WhatIsThis.md?raw';
</script>

<Window appName="What Is This?">
	{@html marked(WhatIsThis)}
</Window>
