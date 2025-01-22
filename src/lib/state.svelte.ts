export const options = $state({
	workspace: 1,
	focusApp: 'About Me',
	zIndex: 10
});

export const opened: { [key: string]: number } = $state({
	'About Me': 1,
	Projects: -1,
	'What Is This?': -1
});

interface Projects {
	[key: string]: {
		cover: string;
		description: string;
		github: string;
		demo: string;
		builtWith: string[];
	};
}

export const projects: Projects = {
	'Obsidian Tokyo Night Theme': {
		cover:
			'https://raw.githubusercontent.com/tcmmichaelb139/obsidian-tokyonight/refs/heads/main/tokyonight.png',
		description:
			'A tokyonight theme for Obsidian. Colors from tokyonight.nvim and VSCode Tokyonight.',
		github: 'https://github.com/tcmmichaelb139/obsidian-tokyonight',
		demo: '',
		builtWith: ['CSS', 'Obsidian']
	},
	'.dotfiles': {
		cover:
			'https://raw.githubusercontent.com/tcmmichaelb139/.dotfiles/refs/heads/main/assets/desktop-full.png',
		description:
			'Personal dotfiles managed with stow. Include configurations for various applications.',
		github: 'https://github.com/tcmmichaelb139/.dotfiles',
		demo: '',
		builtWith: ['Lua', 'Bash', 'Toml', 'ZSH', 'Python']
	},
	VectorBoids: {
		cover:
			'https://raw.githubusercontent.com/tcmmichaelb139/VectorBoids/refs/heads/main/static/website.png',
		description:
			'Boids with vector fields. Uses the algorithm created by Craig Reynolds with the addition of vector fields.',
		github: 'https://github.com/tcmmichaelb139/VectorBoids',
		demo: 'https://vectorboids.michaelbao.io/',
		builtWith: ['HTML Canvas', 'TypeScript', 'Tailwind CSS', 'Svelte', 'Cloudflare Pages']
	},
	'One Million Line Word Search': {
		cover:
			'https://raw.githubusercontent.com/tcmmichaelb139/onemillionwordsearch/refs/heads/main/assets/website.png',
		description:
			"A word search game with a million lines of words. The game has three line modes: 25, 100, and 100,000 (and yes it's not a million but close enough). The game is the same for everyone, so finding a word will show up for everyone.",
		github: 'https://github.com/tcmmichaelb139/onemillionwordsearch',
		demo: 'https://onemillionwordsearch.michaelbao.io/',
		builtWith: ['Svelte', 'TypeScript', 'Tailwind CSS', 'Cloudflare Pages', 'Python']
	},
	'24 Game': {
		cover: 'https://raw.githubusercontent.com/tcmmichaelb139/24/refs/heads/main/assets/website.png',
		description:
			'24 game solver and generator. A simple game where you have to use 4 numbers to get 24 using basic operations.',
		github: 'https://github.com/tcmmichaelb139/24',
		demo: 'https://24.michaelbao.io/',
		builtWith: ['Svelte', 'TypeScript', 'Cloudflare Pages']
	},
	'Particle Avoidance Simulator': {
		cover:
			'https://raw.githubusercontent.com/tcmmichaelb139/particle-avoidance/refs/heads/main/assets/torus.png',
		description:
			'A simple particle simulator for various objects including spheres and cubes where the particles avoid the mouse based on certain parameters.',
		github: 'https://github.com/tcmmichaelb139/particle-avoidance',
		demo: 'https://avoid-particles.michaelbao.io/',
		builtWith: ['three.js', 'TypeScript', 'Svelte', 'Cloudflare Pages']
	},
	'Grid Art': {
		cover:
			'https://raw.githubusercontent.com/tcmmichaelb139/Grid-Art/refs/heads/master/assets/website.png',
		description: 'Creating art with grids. ',
		github: 'https://github.com/tcmmichaelb139/Grid-Art',
		demo: 'https://grid-art.michaelbao.io/',
		builtWith: ['HTML', 'CSS', 'Javascript']
	},
	'Competitive Programming Solutions': {
		cover: '',
		description: 'My solutions to various competitive programming problems.',
		github: 'https://github.com/tcmmichaelb139/Competitive-Programming',
		demo: '',
		builtWith: ['C++', 'Python']
	},
	CFBot: {
		cover:
			'https://raw.githubusercontent.com/tcmmichaelb139/cfbot/refs/heads/main/assets/website.png',
		description: 'Codeforces bot for visualizing stats',
		github: 'https://github.com/tcmmichaelb139/cfbot',
		demo: 'https://cfbot.michaelbao.io/',
		builtWith: ['React', 'D3.js', 'Chart.js', 'Tailwind CSS']
	},
	MBCP: {
		cover: '',
		description: 'Competitive programming stress testing tool',
		github: 'https://github.com/tcmmichaelb139/mbcp',
		demo: '',
		builtWith: ['Python']
	}
};
