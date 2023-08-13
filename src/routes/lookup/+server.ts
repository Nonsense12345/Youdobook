import { Lookup } from '$lib/server/LookUp';
import { json } from '@sveltejs/kit';
export function GET({ url }) {
	const searchParams = new URLSearchParams(url.search);
	console.log(searchParams);
	const keyword = searchParams.get('keyword') || '';
	const dict_name = searchParams.get('dict_name') as DictionaryType;
	console.log(dict_name);
	console.log(keyword);
	if (!keyword && !dict_name) {
		return json(404);
	}
	const res = Lookup(keyword, dict_name);
	return json(res);
}
