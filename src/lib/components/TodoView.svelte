<script>
	export let todos = [{ text: 'a' }];
</script>

<section>
	<h2>Current Tasks</h2>
	<ul>
		{#each todos as todo}
			<li>{todo.text}</li>
		{/each}
	</ul>
</section>
