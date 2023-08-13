import { json } from '@sveltejs/kit';
import * as api from '$lib/api_call';

export async function POST({ request }) {
	const novel_id = await request.json();
	const data = await api.getBookById(novel_id);
	return json(data);
}
