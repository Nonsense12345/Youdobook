export function match(param) {
	const regex = /\d{1,7}/;
	return regex.test(param);
}
