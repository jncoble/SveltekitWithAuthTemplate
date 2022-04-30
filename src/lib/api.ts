const base = 'https://conduit.productionready.io/api';

async function send({ method, path, data, token }) {
	const opts = { method, headers: {}, body: '' };

	if (data) {
		opts.headers['Content-Type'] = 'application/json';
		opts.body = JSON.stringify(data);
	}

	if (token) {
		opts.headers['Authorization'] = `Token ${token}`;
	}

	return fetch(`${base}/${path}`, opts)
		.then((r) => r.text())
		.then((json) => {
			try {
				return JSON.parse(json);
			} catch (err) {
				return json;
			}
		});
}

export function get(path, data, token: any | null) {
	return send({ method: 'GET', path, data, token });
}

export function del(path, data, token: any | null) {
	return send({ method: 'DELETE', data, path, token });
}

export function post(path, data, token: any | null) {
	return send({ method: 'POST', path, data, token });
}

export function put(path, data, token: any | null) {
	return send({ method: 'PUT', path, data, token });
}
