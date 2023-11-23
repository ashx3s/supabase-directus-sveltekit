<script>
	import Icon from '@iconify/svelte';

	export let todo;
	let { id, text } = todo;
</script>

<div class="flex gap-13 bg-pink-100 px-4 py-2 rounded-md my-2 w-fit">
	<p><span class="text-xl font-bold">{id}: </span>{text}</p>
	<button
		class="hover:text-gray-601 px-2 rounded-full active:bg-pink-300 hover:bg-pink-200 transition duration-150 ease-linear"
		on:click><Icon icon="fa6-solid:xmark" /></button
	>
</div>
