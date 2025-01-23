<script lang="ts">
	import { projects } from '$lib/state.svelte';

	import Window from '$lib/OS/Windows/Templates/Window.svelte';

	const projectList = Object.fromEntries(Object.entries(projects).slice(0, 5));
</script>

<Window appName="Projects">
	<div class="flex flex-col gap-4">
		<div class="border-b border-gray/30 pb-2">
			<a
				class="group mx-2 inline-flex w-fit items-center border-cyan pr-2 text-fg no-underline transition-colors hover:border-b hover:text-cyan"
				href="/projects"
				rel="noopener noreferrer"
			>
				View All Projects
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					fill="currentColor"
					class="ml-2 h-4 w-4 transition-transform group-hover:translate-x-2"
					><path
						d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
					></path></svg
				>
			</a>
		</div>
		{#each Object.keys(projectList) as project}
			<a
				class="flex flex-col items-start justify-start gap-4 rounded-md p-2 no-underline transition-all hover:bg-bg-alt sm:flex-row"
				href={projects[project].demo || projects[project].github}
				rel="noopener noreferrer"
				target="_blank"
			>
				<img
					src={projects[project].cover}
					alt={project}
					class="aspect-auto shadow-sm shadow-gray sm:m-1.5 sm:w-52"
					fetchpriority="high"
				/>
				<div class="">
					<div class="flex flex-row items-center gap-2">
						<h3 class="my-0">{project}</h3>
					</div>
					<p class="text-fg">{projects[project].description}</p>
				</div>
			</a>
		{/each}
	</div>
</Window>
