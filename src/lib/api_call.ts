import { json } from '@sveltejs/kit';

const Account: string = '书客511150774337';
const Token: string = '14a3e23b000d005a1302c2a5514ab03a';
const base: string = 'https://pre-api.youdubook.com/api';
const media: string = 'https://alioss.youdubook.com';
export const getBookById = async (novel_id: string) => {
	const res = await fetch(base + '/webNovelDetail?novel_id=' + novel_id);
	const book_data = await res.json();
	return {
		book_data
	};
};
export const getDirectoryById = async (novel_id: string) => {
	const directory = await fetch(base + `/directoryList?nid=${novel_id}&orderBy=0`);
	return await directory.json();
};
export const Media = (cover: string) => {
	return media + cover;
};
export const getChapterById = async (novel_id: string, chapter_id: string, v_id: string) => {
	const res = await fetch(
		base +
			`/readNovelByWeb?nid=${novel_id}&vid=${v_id}&chapter_id=${chapter_id}&chapter_order=1&showpic=false`
	);
	const chapter_data = await res.json();
	//console.log(chapter_data);
	return chapter_data.data;
};
