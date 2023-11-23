import { writable } from 'svelte/store';
export let todos = writable([
	{ id: 1, text: 'a task' },
	{ id: 2, text: 'second task' },
	{ id: 3, text: 'third task' }
]);
