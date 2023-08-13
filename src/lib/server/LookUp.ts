import Names from '$lib/server/assets/Names.txt';
import VP from '$lib/server/assets/VietPhrase.txt';
import LV from '$lib/server/assets/LacViet.txt';
import fs from 'fs';
import readline from 'readline';
let Dicts: any;
async function initDict() {
	Dicts = {
		names: await GenDictMap(Names),
		VP: await GenDictMap(VP),
		LV: await GenDictMap(LV)
	};
}
await initDict();
async function GenDictMap(file_path: string) {
	let map = new Map() as Map<string, string>;

	const fileStream = fs.createReadStream('.' + file_path);
	const readLine = readline.createInterface({
		input: fileStream,
		crlfDelay: Infinity
	});
	for await (const line of readLine) {
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
