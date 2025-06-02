export const splash = $state({
	show: true,
	time: 1000
});

export const options = $state({
	workspace: 0,
	focusApp: ['About Me'],
	zIndex: 10
});

export const opened: { [key: string]: number }[] = $state([
	{
		'About Me': 1,
		Projects: -1,
		'What Is This?': -1
	}
]);

export const position: { [key: string]: { x: number; y: number } }[] = $state([{}]);

interface Projects {
	[key: string]: {
		cover: string;
		description: string;
		github: string;
		demo: string;
		builtWith: string[];
		year: number;
	};
}

export const projects: Projects = {
	'Obsidian Tokyo Night Theme': {
		cover: '/projects/tokyonight.png',
		description:
			'A tokyonight theme for Obsidian. Colors from tokyonight.nvim and VSCode Tokyonight. 135,000+ downloads and 115+ GitHub stars.',
		github: 'https://github.com/tcmmichaelb139/obsidian-tokyonight',
		demo: '',
		builtWith: ['CSS', 'Obsidian'],
		year: 2023
	},
	'.dotfiles': {
		cover: '/projects/dotfiles.png',
		description:
			'Personal dotfiles managed with stow. Include configurations for various applications. 120+ GitHub stars',
		github: 'https://github.com/tcmmichaelb139/.dotfiles',
		demo: '',
		builtWith: ['Lua', 'Bash', 'Toml', 'ZSH', 'Python'],
		year: 2021
	},
	VectorBoids: {
		cover: '/projects/vectorboids.png',
		description:
			'Boids with vector fields. Uses the algorithm created by Craig Reynolds with the addition of vector fields.',
		github: 'https://github.com/tcmmichaelb139/VectorBoids',
		demo: 'https://vectorboids.michaelbao.com/',
		builtWith: ['HTML Canvas', 'TypeScript', 'Tailwind CSS', 'Svelte', 'Cloudflare Pages'],
		year: 2025
	},
	'One Million Line Word Search': {
		cover: '/projects/onemillionwordsearch.png',
		description:
			"A word search game with a million lines of words. The game has three line modes: 25, 100, and 100,000 (and yes it's not a million but close enough). The game is the same for everyone, so finding a word will show up for everyone.",
		github: 'https://github.com/tcmmichaelb139/onemillionwordsearch',
		demo: 'https://onemillionwordsearch.michaelbao.com/',
		builtWith: ['Svelte', 'TypeScript', 'Tailwind CSS', 'Cloudflare Pages', 'Python'],
		year: 2024
	},
	'24 Game': {
		cover: '/projects/24.png',
		description:
			'24 game solver and generator. A simple game where you have to use 4 numbers to get 24 using basic operations.',
		github: 'https://github.com/tcmmichaelb139/24',
		demo: 'https://24.michaelbao.com/',
		builtWith: ['Svelte', 'TypeScript', 'Cloudflare Pages'],
		year: 2022
	},

	// after first 5 that show

	'Zheng Zero': {
		cover: '',
		description:
			'Created a double DQN model for the card game Zheng Shang You. Achieved ~70% win rate against greedy random players.',
		github: 'https://github.com/tcmmichaelb139/zheng-zero',
		demo: '',
		builtWith: ['Python', 'PyTorch', 'Reinforcement Learning'],
		year: 2025
	},
	'Adaptive Rock Paper Scissors': {
		cover: '',
		description: 'Simple rock-paper-scissors game implemented in Python with different strategies.',
		github: 'https://github.com/tcmmichaelb139/adaptive-rps',
		demo: '',
		builtWith: ['Python', 'Reinforcement Learning'],
		year: 2025
	},
	'Particle Avoidance Simulator': {
		cover:
			'https://raw.githubusercontent.com/tcmmichaelb139/particle-avoidance/refs/heads/main/assets/torus.png',
		description:
			'A simple particle simulator for various objects including spheres and cubes where the particles avoid the mouse based on certain parameters.',
		github: 'https://github.com/tcmmichaelb139/particle-avoidance',
		demo: 'https://particle-avoidance.michaelbao.com',
		builtWith: ['three.js', 'TypeScript', 'Svelte', 'Cloudflare Pages'],
		year: 2024
	},
	'Grid Art': {
		cover:
			'https://raw.githubusercontent.com/tcmmichaelb139/Grid-Art/refs/heads/master/assets/website.png',
		description: 'Creating art with grids. ',
		github: 'https://github.com/tcmmichaelb139/Grid-Art',
		demo: 'https://grid-art.michaelbao.com/',
		builtWith: ['HTML', 'CSS', 'Javascript'],
		year: 2022
	},
	'Competitive Programming Solutions': {
		cover: '',
		description: 'My solutions to various competitive programming problems.',
		github: 'https://github.com/tcmmichaelb139/Competitive-Programming',
		demo: '',
		builtWith: ['C++', 'Python'],
		year: 2021
	},
	CFBot: {
		cover:
			'https://raw.githubusercontent.com/tcmmichaelb139/cfbot/refs/heads/main/assets/website.png',
		description: 'Codeforces bot for visualizing stats',
		github: 'https://github.com/tcmmichaelb139/cfbot',
		demo: 'https://cfbot.michaelbao.com/',
		builtWith: ['React', 'D3.js', 'Chart.js', 'Tailwind CSS', 'Codeforces API'],
		year: 2022
	},
	MBCP: {
		cover: '',
		description: 'Competitive programming stress testing tool',
		github: 'https://github.com/tcmmichaelb139/mbcp',
		demo: '',
		builtWith: ['Python'],
		year: 2023
	},
	'Style Transfer Mural Generator': {
		cover:
			'https://raw.githubusercontent.com/tcmmichaelb139/style-transfer-mural-generator/refs/heads/main/assets/example.png',
		description:
			'A mural generator using style transfer. Upload an image and select the styles to apply to the image. The app will generate a mural using the style transfer technique.',
		github: 'https://github.com/tcmmichaelb139/style-transfer-mural-generator',
		demo: 'https://huggingface.co/spaces/tcmmichaelb139/style-transfer-mural-generator',
		builtWith: ['Python', 'Gradio', 'Hugging Face'],
		year: 2024
	},
	'Word Censorer': {
		cover:
			'https://raw.githubusercontent.com/tcmmichaelb139/word-censorer/refs/heads/main/assets/website.png',
		description: 'A simple word censorer that allows frequency and custom audio.',
		github: 'https://github.com/tcmmichaelb139/word-censorer',
		demo: 'https://huggingface.co/spaces/tcmmichaelb139/word-censorer',
		builtWith: ['OpenAI Whisper ', 'Python', 'Gradio', 'Hugging Face'],
		year: 2025
	},
	'michaelbao.com': {
		cover: '',
		description: 'My personal website.',
		github: 'https://github.com/tcmmichaelb139/michaelbao.com',
		demo: 'https://michaelbao.com/',
		builtWith: ['Svelte', 'Tailwind CSS', 'Cloudflare Pages'],
		year: 2024
	}
};
