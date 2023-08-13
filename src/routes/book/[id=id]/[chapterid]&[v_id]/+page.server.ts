import { getChapterById } from '$lib/api_call.js';
import { tokenize } from '$lib/tokenize.js';
import { addName, addVP } from '$lib/server/LookUp.js';
import fs from 'fs';
export const load = async ({ params }) => {
	console.log(params);
	const { id, chapterid, v_id } = params;
	const data = await getChapterById(id, chapterid, v_id);
	const chapter_info = {
		chapter_name: data.chapter_name,
		content: tokenize(data.content)
	};
	//console.log(chapter_info.content);
	return chapter_info;
};
export const actions = {
	default: async ({ request }) => {
		const formData = await request.formData();
		const zh = formData.get('zh') as string;
		const vi = formData.get('vi') as string;
		const dict = formData.get('dict');
		fs.appendFile(`./src/lib/server/assets/${dict}.txt`, `\n${zh}=${vi}`, () => {
			console.log('Done!!');
		});
		if (dict == 'Names') {
			addName(zh, vi);
		} else {
			addVP(zh, vi);
		}
	}
};
