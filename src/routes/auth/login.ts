import * as api from '$lib/api';
import { respond } from './_respond';

export async function post({ request }) {
	const json = await request.json();
	const body = await api.post(
		'users/login',
		{
			user: {
				email: json.email,
				password: json.password
			}
		},
		null
	);

	return respond(body);
}
