import Names from '$lib/server/assets/Names.txt?raw';
import VP from '$lib/server/assets/VietPhrase.txt?raw';
import LV from '$lib/server/assets/LacViet.txt?raw';
let Dicts: any;
// const Names = './src/lib/server/assets/Names.txt';
// const VP = './src/lib/server/assets/VietPhrase.txt';
// const LV = './src/lib/server/assets/LacViet.txt';
function initDict() {
	Dicts = {
		names: GenDictMap(Names),
		VP: GenDictMap(VP),
		LV: GenDictMap(LV)
	};
}

function GenDictMap(data: string) {
	let map = new Map() as Map<string, string>;
	const readLine = data.split('\n');
	for (const line of readLine) {
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
