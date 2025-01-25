<script lang="ts">
	import { marked, type RendererObject } from 'marked';

	const renderer: RendererObject = {
		link({ href, title, text }) {
			return `<a href="${href}" target="_blank" rel="noopener noreferrer">${text}</a>`;
		}
	};

	marked.use({ renderer });

	const { markdown } = $props();
</script>

{#await marked(markdown)}
	<p>Loading...</p>
{:then text}
	{@html text}
{/await}
