import Names from '$lib/server/assets/Names.txt?url';
import VP from '$lib/server/assets/VietPhrase.txt?url';
import LV from '$lib/server/assets/LacViet.txt?url';
import readline from 'readline';
import fs from 'fs';
// import path from 'path';
let Dicts: any;
// const Names = './src/lib/server/assets/Names.txt';
// const VP = './src/lib/server/assets/VietPhrase.txt';
// const LV = './src/lib/server/assets/LacViet.txt';
async function initDict() {
	Dicts = {
		names: await GenDictMap(Names),
		VP: await GenDictMap(VP),
		LV: await GenDictMap(LV)
	};
}

async function GenDictMap(file_path: string) {
	let new_path = process.cwd()+file_path;
	const fileStream = fs.createReadStream(new_path);
	const rl = readline.createInterface({
		input: fileStream,
		crlfDelay: Infinity
	});
	let map = new Map() as Map<string, string>;

	for await (const line of rl) {
		const [key, value] = line.split('=') as [string, string];
		map.set(key, value);
	}

	return map;
}

export function Lookup(keyword: string, dict_name: DictionaryType) {
	return Dicts[dict_name].get(keyword);
}
export function addName(zh: string, vi: string) {
	Dicts['names'].set(zh, vi);
}
export function addVP(zh: string, vi: string) {
	Dicts['VP'].set(zh, vi);
}
initDict();
