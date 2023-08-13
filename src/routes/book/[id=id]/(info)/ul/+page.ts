import { getDirectoryById } from '$lib/api_call';
export async function load({ parent }) {
	const { novel_id, v_id } = await parent();
	console.log('hello');
	const res = await getDirectoryById(novel_id);
	const data = res.data.data;
	//console.log(JSON.stringify(data[3], null, 2));
	return { data, novel_id, v_id };
}
