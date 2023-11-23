<script>
	import TodoView from '$lib/components/TodoView.svelte';
	import { todos } from '$lib/stores.js';
	let todoList;

	todos.subscribe((value) => {
		todoList = value;
	});
	console.log(todoList);
</script>

<header class="bg-blue-200 h-1/5 grid place-items-center">
	<h1 class="text-4xl">TODO App</h1>
</header>

<TodoView todos={todoList} />
