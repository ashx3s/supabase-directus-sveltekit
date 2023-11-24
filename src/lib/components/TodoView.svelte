<script>
	import { createTodos } from '$lib/stores.js';
	import Todo from './Todo.svelte';
	export let supabaseTodos = [];
	let uid = 1;
	let defaultTodos = [
		{ id: uid++, text: 'a task', done: false },
		{ id: uid++, text: 'second task', done: false },
		{ id: uid++, text: 'third task', done: false },
		{ id: uid++, text: 'fourth task', done: false }
	];
	const todos = createTodos(defaultTodos);
	console.log($todos);
</script>

<section>
	<h2 class="text-2xl">Supabase Tasks</h2>
	<ul>
		{#each supabaseTodos as todo}
			<h3 class="text-xl">{todo.title}</h3>
			<p>{todo.description}</p>
		{/each}
	</ul>
</section>

<section class="ml-4 mt-8">
	<h2 class="text-2xl">Stores Current Tasks</h2>
	<ul>
		{#each $todos as todo}
			<Todo {todo} on:click={() => todos.remove(todo)} />
		{/each}
	</ul>
</section>
