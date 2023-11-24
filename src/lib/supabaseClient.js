import { createClient } from '@supabase/supabase-js';
import { SUPABASE_URL, SUPABASE_ANON_KEY } from '$env/static/private'; /* do not forget $env! */

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

export async function deleteRow(tableName, rowId) {
	try {
		const { data, error } = await supabase.from(tableName).delete().eq('id', rowId);

		if (error) {
			throw new Error(error.message);
		}

		return data;
	} catch (error) {
		console.error('Error deleting row:', error.message);
		throw error;
	}
}
