<script lang="ts">
	import SEO from '$lib/misc/SEO.svelte';

	import { projects } from '$lib/state.svelte';
	import { slide } from 'svelte/transition';

	const projectList = Object.keys(projects).sort((a, b) => projects[b].year - projects[a].year);
</script>

<SEO title="Projects" />

<div
	class="flex h-full w-full justify-center overflow-auto bg-bg/75 px-5 text-fg backdrop-blur-sm md:px-12"
>
	<div class="h-fit px-2 py-12 md:py-16">
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

		<table class="relative mt-10 bg-bg text-left backdrop-blur-lg">
			<thead class="sticky top-0 z-10 border-b border-gray/30 bg-bg/75 text-sm backdrop-blur-sm">
				<tr class="px-6 py-5">
					<th class="py-4 pl-8 pr-8">Year</th>
					<th class="py-4 pr-8">Project</th>
					<th class="hidden py-4 pr-8 sm:inline-flex">Built with</th>
					<th class="py-4 pr-8">Link</th>
				</tr>
			</thead>
			{#each projectList as project, i}
				<tbody>
					<tr class={i != projectList.length - 1 ? 'border-b border-gray/30' : ''}>
						<td class="py-4 pl-8 pr-8 align-top font-light leading-snug text-gray">
							{projects[project].year}
						</td>
						<td class="group py-4 pr-8 align-top font-semibold leading-snug">
							{project}

							<div
								class="absolute left-14 mt-11 h-fit w-48 -translate-y-9 rounded-md border-2 border-gray bg-bg/85 p-2 text-xs text-gray opacity-0 backdrop-blur-lg transition-opacity group-hover:opacity-100 sm:left-24 sm:w-64"
							>
								<div
									class="absolute left-12 top-0 w-3 -translate-x-1/2 -translate-y-full transform sm:left-2"
								>
									<svg viewBox="0 0 20 10" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M0 10L10 0L20 10Z" fill="currentColor" />
									</svg>
								</div>
								{projects[project].description}
							</div>
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
							{#if projects[project].github}
								<a
									class="items-baseline text-sm leading-tight text-gray transition-all hover:text-cyan focus-visible:text-cyan"
									href={projects[project].github}
									target="_blank"
									rel="noopener noreferrer">GitHub</a
								>
							{/if}
							{#if projects[project].demo}
								<a
									class="items-baseline text-sm leading-tight text-gray transition-all hover:text-cyan focus-visible:text-cyan"
									href={projects[project].demo}
									target="_blank"
									rel="noopener noreferrer">Demo</a
								>
							{/if}
						</td>
					</tr>
				</tbody>
			{/each}
		</table>
	</div>
</div>
