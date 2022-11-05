import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ cookies }) => {
	cookies.get('session-cookie');
	cookies.get('normal-cookie');
	cookies.get('expires-cookie');

	cookies.set('expires-cookie', 'expires-test-value', {
		expires: new Date(Date.now() + 10),
		path: '/',
	});

	cookies.set('session-cookie', 'session-test-value', {
		path: '/',
	});

	cookies.set('normal-cookie', 'test-value', {
		path: '/',
		maxAge: 1000,
	});
}