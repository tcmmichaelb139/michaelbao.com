<script lang="ts">
	import Window from '$lib/UI/Windows/Templates/Window.svelte';

	const projects: { [key: string]: { [key: string]: string } } = {
		'Obsidian Tokyo Night Theme': {
			cover:
				'https://raw.githubusercontent.com/tcmmichaelb139/obsidian-tokyonight/refs/heads/main/dark2.png',
			description:
				'A tokyonight theme for Obsidian. Colors from tokyonight.nvim and VSCode Tokyonight.',
			github: 'https://github.com/tcmmichaelb139/obsidian-tokyonight',
			demo: ''
		},
		'.dotfiles': {
			cover:
				'https://raw.githubusercontent.com/tcmmichaelb139/.dotfiles/refs/heads/main/assets/desktop-full.png',
			description:
				'Personal dotfiles managed with stow. Include configurations for various applications.',
			github: 'https://github.com/tcmmichaelb139/.dotfiles',
			demo: ''
		},
		'Particle Avoidance Simulator': {
			cover:
				'https://raw.githubusercontent.com/tcmmichaelb139/particle-avoidance/refs/heads/main/assets/torus.png',
			description:
				'A simple particle simulator for various objects including spheres and cubes where the particles avoid the mouse based on certain parameters.',
			github: 'https://github.com/tcmmichaelb139/particle-avoidance',
			demo: 'https://avoid-particles.michaelbao.io/'
		},
		'24 Game': {
			cover:
				'https://raw.githubusercontent.com/tcmmichaelb139/24/refs/heads/main/assets/website.png',
			description:
				'24 game solver and generator. A simple game where you have to use 4 numbers to get 24 using basic operations.',
			github: 'https://github.com/tcmmichaelb139/24',
			demo: 'https://24.michaelbao.io/'
		},
		'Grid Art': {
			cover:
				'https://raw.githubusercontent.com/tcmmichaelb139/Grid-Art/refs/heads/master/assets/website.png',
			description: 'Creating art with grids. ',
			github: 'https://github.com/tcmmichaelb139/Grid-Art',
			demo: 'https://grid-art.michaelbao.io/'
		}
	};
</script>

<Window appName="Projects">
	<div class="flex flex-col gap-4">
		{#each Object.keys(projects) as project}
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
				/>
				<div class="">
					<div class="flex flex-row items-center gap-2">
						<h3 class="my-0">{project}</h3>
						<!-- <div class="w-7">
						<a
							class="text-gray transition-all hover:text-purple"
							href={projects[project].github}
							rel="noopener noreferrer"
							target="_blank"
							aria-label="GitHub"
						>
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
								><path
									d="M12.001 2C6.47598 2 2.00098 6.475 2.00098 12C2.00098 16.425 4.86348 20.1625 8.83848 21.4875C9.33848 21.575 9.52598 21.275 9.52598 21.0125C9.52598 20.775 9.51348 19.9875 9.51348 19.15C7.00098 19.6125 6.35098 18.5375 6.15098 17.975C6.03848 17.6875 5.55098 16.8 5.12598 16.5625C4.77598 16.375 4.27598 15.9125 5.11348 15.9C5.90098 15.8875 6.46348 16.625 6.65098 16.925C7.55098 18.4375 8.98848 18.0125 9.56348 17.75C9.65098 17.1 9.91348 16.6625 10.201 16.4125C7.97598 16.1625 5.65098 15.3 5.65098 11.475C5.65098 10.3875 6.03848 9.4875 6.67598 8.7875C6.57598 8.5375 6.22598 7.5125 6.77598 6.1375C6.77598 6.1375 7.61348 5.875 9.52598 7.1625C10.326 6.9375 11.176 6.825 12.026 6.825C12.876 6.825 13.726 6.9375 14.526 7.1625C16.4385 5.8625 17.276 6.1375 17.276 6.1375C17.826 7.5125 17.476 8.5375 17.376 8.7875C18.0135 9.4875 18.401 10.375 18.401 11.475C18.401 15.3125 16.0635 16.1625 13.8385 16.4125C14.201 16.725 14.5135 17.325 14.5135 18.2625C14.5135 19.6 14.501 20.675 14.501 21.0125C14.501 21.275 14.6885 21.5875 15.1885 21.4875C19.259 20.1133 21.9999 16.2963 22.001 12C22.001 6.475 17.526 2 12.001 2Z"
								></path></svg
							></a
						>
						</div> -->
					</div>
					<p class="text-fg">{projects[project].description}</p>
				</div>
			</a>
		{/each}
	</div>
</Window>
