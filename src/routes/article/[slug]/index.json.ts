import * as api from '$lib/api';

export async function get({ params, locals }) {
	const { slug } = params;
	const { article } = await api.get(`articles/${slug}`, locals.user && locals.user.token, null);

	return {
		body: article
	};
}

export async function put({ request }) {
	console.log('put', request);
}
