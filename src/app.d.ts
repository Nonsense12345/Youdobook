// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface Platform {}
	}
	type DictionaryType = 'names' | 'VP' | 'LV';

	interface BookData {
		novel_name: string;
		novel_info: string;
		author_page: {
			author_nickname: string;
		};
	}
}

export {};
