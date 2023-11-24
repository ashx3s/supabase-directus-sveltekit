import { supabase } from '$lib/supabaseClient';

export async function load() {
	const { data } = await supabase.from('new_todos').select();
	return {
		todos: data ?? []
	};
}

// TODO Add post functions for deleting from server
