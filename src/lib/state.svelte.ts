export const options = $state({
	workspace: 1,
	focusApp: '',
	zIndex: 10
});

export const opened: { [key: string]: number } = $state({
	'About Me': -1,
	'What Is This?': -1,
	Projects: -1
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
			'https://raw.githubusercontent.com/tcmmichaelb139/obsidian-tokyonight/refs/heads/main/dark2.png',
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
	'Particle Avoidance Simulator': {
		cover:
			'https://raw.githubusercontent.com/tcmmichaelb139/particle-avoidance/refs/heads/main/assets/torus.png',
		description:
			'A simple particle simulator for various objects including spheres and cubes where the particles avoid the mouse based on certain parameters.',
		github: 'https://github.com/tcmmichaelb139/particle-avoidance',
		demo: 'https://avoid-particles.michaelbao.io/',
		builtWith: ['three.js', 'TypeScript', 'Svelte']
	},
	'24 Game': {
		cover: 'https://raw.githubusercontent.com/tcmmichaelb139/24/refs/heads/main/assets/website.png',
		description:
			'24 game solver and generator. A simple game where you have to use 4 numbers to get 24 using basic operations.',
		github: 'https://github.com/tcmmichaelb139/24',
		demo: 'https://24.michaelbao.io/',
		builtWith: ['Svelte', 'TypeScript']
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
