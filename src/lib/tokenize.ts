import { Lookup } from '$lib/server/LookUp';
const longest_name = 23;
const longest_vp = 39;
const longest_lv = 14;
export const tokenize = (text: string) => {
	let lines = text.split('\n');
	const result = lines
		.map((line, i) => {
			return '<p>' + render_zh(line, i) + '<br>' + render_cv(line, i) + '</p>';
		})
		.join(' ');
	return result;
};

const render_zh = (line: string, l_index: number) => {
	let result = '<zh-line>';
	let i = 0;
	for (const char of Array.from(line)) {
		result += `<zh-w l-i="${l_index}" i="${i}" >${char}</zh-w>`;
		i++;
	}
	return result + '</zh-line>';
};

const render_cv = (line: string, l_index: number) => {
	let result = line;
	for (let i = longest_name; i > 0; i--) {
		for (let j = 0; j <= line.length - i; j++) {
			const recently = line.slice(j, j + i - 1);
			const is_find = Lookup(recently, 'names');
			if (is_find) {
				let replace_text = `<cv-w l-i="${l_index}" zh-i="${j}-${j + i - 2}" >${
					is_find.split('/')[0]
				} </cv-w>`;
				result = result.replaceAll(recently, replace_text);

				j += recently.length - 1;
			}
		}
	}

	for (let i = longest_vp; i > 0; i--) {
		for (let j = 0; j <= line.length - i; j++) {
			const recently = line.slice(j, j + i - 1);
			const is_find = Lookup(recently, 'VP');
			if (is_find) {
				let replace_text = `<cv-w l-i="${l_index}" zh-i="${j}-${j + i - 2}">${
					is_find.split('/')[0]
				} </cv-w>`;
				result = result.replaceAll(recently, replace_text);
				j += recently.length - 1;
			}
		}
	}
	//console.log(result);
	return '<cv-line>' + result + '</cv-line>';
};
// zh="${recently}"
