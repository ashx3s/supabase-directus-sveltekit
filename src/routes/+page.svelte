<script>
	import TodoView from '$lib/components/TodoView.svelte';
	export let data;
	let { todos } = data;
</script>

<header class="bg-blue-200 h-1/5 grid place-items-center">
	<h1 class="text-4xl">TODO App</h1>
</header>

<TodoView supabaseTodos={todos} />
