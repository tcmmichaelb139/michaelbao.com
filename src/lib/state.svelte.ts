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
