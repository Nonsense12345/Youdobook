import { getChapterById } from '$lib/api_call.js';
import { tokenize } from '$lib/tokenize.js';
import { addName, addVP } from '$lib/server/LookUp.js';
import Names from '$lib/server/assets/Names.txt?url';
import VP from '$lib/server/assets/VietPhrase.txt?url';
import fs from 'fs';
import path from 'path';
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
		if (dict == 'Names') {
			fs.appendFile(
				process.cwd() + Names,
				`\n${zh}=${vi}`,
				() => {
					console.log('Done!!');
				}
			);
			addName(zh, vi);
		} else {
			fs.appendFile(
				process.cwd()+ VP,
				`\n${zh}=${vi}`,
				() => {
					console.log('Done!!');
				}
			);
			addVP(zh, vi);
		}
	}
};
