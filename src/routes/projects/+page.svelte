<script lang="ts">
	import SEO from '$lib/misc/SEO.svelte';

	import { projects } from '$lib/state.svelte';
</script>

<SEO title="Projects" />

<main
	class="h-full w-full overflow-auto bg-bg/85 px-5 py-12 text-fg backdrop-blur-xl md:px-12 md:py-16"
>
	<div class="mx-auto w-fit p-2">
		<a
			class="group mb-2 inline-flex items-center text-sm font-bold leading-tight text-cyan transition-all"
			href="/"
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 24 24"
				fill="currentColor"
				class="mr-1 h-4 w-4 transition-transform group-hover:-translate-x-2"
				><path
					d="M7.82843 10.9999H20V12.9999H7.82843L13.1924 18.3638L11.7782 19.778L4 11.9999L11.7782 4.22168L13.1924 5.63589L7.82843 10.9999Z"
				></path></svg
			>
			Home
		</a>
		<h1 class="text-4xl font-bold text-fg">Projects</h1>

		<table class="mt-10 text-left">
			<thead class="sticky top-0 z-10 border-b border-gray/25 px-6 py-5 text-sm">
				<tr>
					<th class="py-4 pr-8">Project</th>
					<th class="hidden py-4 pr-8 sm:inline-flex">Built with</th>
					<th class="py-4 pr-8">Link</th>
				</tr>
			</thead>
			{#each Object.keys(projects) as project}
				<tbody>
					<tr class="border-b border-gray/30">
						<td class="py-4 pr-8 align-top font-semibold leading-snug">
							{project}
						</td>
						<td class="hidden py-4 pr-8 align-top font-normal leading-snug sm:inline-flex">
							<div class="flex flex-wrap">
								{#each projects[project].builtWith as tool}
									<span
										class="mb-2.5 mr-2 rounded-full bg-cyan/20 px-2.5 py-1 text-xs leading-5 text-cyan"
										>{tool}</span
									>
								{/each}
							</div>
						</td>
						<td class="py-4 pr-8 align-top font-semibold leading-snug">
							{#if projects[project].demo}
								<a
									class="items-baseline text-sm leading-tight text-gray transition-all hover:text-cyan focus-visible:text-cyan"
									href={projects[project].demo}
									target="_blank"
									rel="noopener noreferrer">Demo</a
								>
							{:else}
								<a
									class="items-baseline text-sm leading-tight text-gray transition-all hover:text-cyan focus-visible:text-cyan"
									href={projects[project].github}
									target="_blank"
									rel="noopener noreferrer">GitHub</a
								>
							{/if}
						</td>
					</tr>
				</tbody>
			{/each}
		</table>
	</div>
</main>
