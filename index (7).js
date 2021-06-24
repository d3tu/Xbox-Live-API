const { get, post } = require('axios');

/**
 * @param {{
 *  apitoken: string | string[],
 *  apptoken: string | string[],
 *  lang: string | string[]
 * }} XboxAPI options
 */

module.exports = class XboxAPI {
	constructor(options = {}) {
		this.apitoken = options.apiToken;
		this.apptoken = options.appToken || 'pt-br';
		this.lang = options.lang;

		if (!this.apitoken) throw new Error('Provide a api_token');
		if (!this.apptoken) throw new Error('Provide a app_token');
	}
	// get
	async account(number) {
		if (!number) {
		return await get(`https://xbl.io/api/v2/account/${number}`, {
			"headers": {
				'X-Authorization': String(this.apitoken),
				'X-Contract': String(this.apptoken),
				"Accept": ['application/json', 'application/xml'],
				'Accept-Language': String(this.lang)
			}
		});
		} else {
			return await get(`https://xbl.io/api/v2/account/`, {
			"headers": {
				'X-Authorization': String(this.apitoken),
				'X-Contract': String(this.apptoken),
				"Accept": ['application/json', 'application/xml'],
				'Accept-Language': String(this.lang)
			}
			});
		}
	}
	async addFriend(number) {
		if (!number) throw new Error('Provide a xuid');

		return await get(`https://xbl.io/api/v2/friends/add/${number}`, {
			"headers": {
				'X-Authorization': String(this.apitoken),
				'X-Contract': String(this.apptoken),
				"Accept": ['application/json', 'application/xml'],
				'Accept-Language': String(this.lang)
			}
		});
	}
	async friends() {
		return await get('https://xbl.io/api/v2/friends', {
			"headers": {
				'X-Authorization': String(this.apitoken),
				'X-Contract': String(this.apptoken),
				"Accept": ['application/json', 'application/xml'],
				'Accept-Language': String(this.lang)
			}
		});
	}
	async searchFriend(string) {
		if (!string) throw new Error('Provide a gamertag');
		return await get(`https://xbl.io/api/v2/friends/search?gt=${string}`, {
			"headers": {
				'X-Authorization': String(this.apitoken),
				'X-Contract': String(this.apptoken),
				"Accept": ['application/json', 'application/xml'],
				'Accept-Language': String(this.lang)
			}
		});
	}
	// Post
	async favoriteFriend(xuid) {
		if (!xuid) throw new Error('provide a xuid');
		return await post('https://xbl.io/api/v2/friends/favorite', {
			"headers": {
				'X-Authorization': String(this.apitoken),
				'X-Contract': String(this.apptoken),
				"Accept": ['application/json', 'application/xml'],
				'Accept-Language': String(this.lang)
			},

			"Payload": { "xuids": [xuid] }
		});
	}
}