import axios from 'axios';

const api = axios.create({
    baseURL: 'https://dev-nft.storicha.in/api',
    headers: {
		'Content-type': 'application/json; charset=UTF-8',
		accept: 'application/json,',
	}
})

export const apis = {
    get: () => api.get('/cashseries?series_idx=5737'),
    update: () => api.post('/User/SiteSnsLogin?site_user_id=testkwy@test.com&pwd=1234qwer!@%23$')
}