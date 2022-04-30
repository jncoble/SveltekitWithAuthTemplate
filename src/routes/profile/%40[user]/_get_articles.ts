import * as api from '$lib/api';
import { page_size } from '$lib/constants';

export async function get_articles({ url, params, locals }, type) {
	const p = +url.searchParams.get('page') || 1;

	const q = new URLSearchParams([
		['limit', page_size],
		['offset', (p - 1) * page_size],
		[type, encodeURIComponent(params.user)]
	]);

	const { articles, articlesCount } = await api.get(
		`articles?${q}`,
		locals.user && locals.user.token,
		null
	);

	return {
		body: {
			articles,
			pages: Math.ceil(articlesCount / page_size)
		}
	};
}