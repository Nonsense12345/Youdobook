import * as api from '$lib/api_call';
export async function load({ params }) {
	const bookdata = await api.getBookById(params.id);
	//console.log(bookdata);
	if (bookdata.book_data.code == 200) {
		return bookdata.book_data.data;
	} else {
		throw new Error('WTF');
	}
}
