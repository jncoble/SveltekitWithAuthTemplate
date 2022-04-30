import * as api from '$lib/api';

export async function get({ params, locals }) {
	const { profile } = await api.get(
		`profiles/${params.user}`,
		locals.user && locals.user.token,
		null
	);

	return {
		body: profile
	};
}
