const n = require('node-fetch');

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
		if (number) {
		return await n(`https://xbl.io/api/v2/account/${number}`, {
			"headers": {
				'X-Authorization': String(this.apitoken),
				'X-Contract': String(this.apptoken),
				"Accept": ['application/json', 'application/xml'],
				'Accept-Language': String(this.lang)
			}
		});
		} else {
			return await n(`https://xbl.io/api/v2/account/`, {
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

		return await n(`https://xbl.io/api/v2/friends/add/${number}`, {
			"headers": {
				'X-Authorization': String(this.apitoken),
				'X-Contract': String(this.apptoken),
				"Accept": ['application/json', 'application/xml'],
				'Accept-Language': String(this.lang)
			}
		});
	}
	
async removeFriend(xuid) {
	if(!xuid) throw new Error('Provide a xuid')
	
	return await n(`https://xbl.io/api/v2/friends/remove/${xuid}`, {
			method: 'get',
			headers: {
				'X-Authorization': String(this.apitoken),
				'X-Contract': String(this.apptoken),
				"Accept": ['application/json', 'application/xml'],
				'Accept-Language': String(this.lang)
			}
		});
}
	
	async friends() {
		return await n('https://xbl.io/api/v2/friends', {
			method: 'get',
			headers: {
				'X-Authorization': String(this.apitoken),
				'X-Contract': String(this.apptoken),
				"Accept": ['application/json', 'application/xml'],
				'Accept-Language': String(this.lang)
			}
		});
	}
	async searchFriend(string) {
		if (!string) throw new Error('Provide a gamertag');
		return await n(`https://xbl.io/api/v2/friends/search?gt=${string}`, {
			method: 'get',
			headers: {
				'X-Authorization': String(this.apitoken),
				'X-Contract': String(this.apptoken),
				"Accept": ['application/json', 'application/xml'],
				'Accept-Language': String(this.lang)
			}
		});
	}
	
	async recentPlayers() {
		return await n(`https://xbl.io/api/v2/recent-players`, {
			method: 'get',
			headers: {
				'X-Authorization': String(this.apitoken),
				'X-Contract': String(this.apptoken),
				"Accept": ['application/json', 'application/xml'],
				'Accept-Language': String(this.lang)
			}
		});
	}
	
	async precense(xuid) {
		if(xuid) {
			return await n(`https://xbl.io/api/v2/${xuid}/precense`, {
			method: 'get',
			headers: {
				'X-Authorization': String(this.apitoken),
				'X-Contract': String(this.apptoken),
				"Accept": ['application/json', 'application/xml'],
				'Accept-Language': String(this.lang)
			}
			});
		} else {
			return await n(`https://xbl.io/api/v2/precense`, {
			method: 'get',
			headers: {
				'X-Authorization': String(this.apitoken),
				'X-Contract': String(this.apptoken),
				"Accept": ['application/json', 'application/xml'],
				'Accept-Language': String(this.lang)
			}
			});
		}
	}
	
	async conversationsRequest() {
		return await n(`https://xbl.io/api/v2/conversations/request`, {
			method: 'get',
			headers: {
				'X-Authorization': String(this.apitoken),
				'X-Contract': String(this.apptoken),
				"Accept": ['application/json', 'application/xml'],
				'Accept-Language': String(this.lang)
			}
			});
	}
	
	async getConversations(xuid) {
		if(xuid) {
			return await n(`https://xbl.io/api/v2/conversations/${xuid}`, {
			method: 'get',
			headers: {
				'X-Authorization': String(this.apitoken),
				'X-Contract': String(this.apptoken),
				'Accept-Language': String(this.lang)
			}
			});
		} else {
			return await n(`https://xbl.io/api/v2/conversations`, {
			method: 'get',
			headers: {
				'X-Authorization': String(this.apitoken),
				'X-Contract': String(this.apptoken),
				"Accept": ['application/json', 'application/xml'],
				'Accept-Language': String(this.lang)
			}
			});
		}
	}
	
	async achievimentsPlayer(xuid) {
		if(!xuid) throw new Error('Provide a xuid')
		
		return await n(`https://xbl.io/api/v2/achieviments/player/${xuid}`, {
			method: 'get',
			headers: {
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
		return await n('https://xbl.io/api/v2/friends/favorite', {
			method: 'post',
			body: `{"xuid": "${xuid}"}`,
			headers: {
				'X-Authorization': String(this.apitoken),
				'X-Contract': String(this.apptoken),
				"Accept": ['application/json', 'application/xml'],
				'Accept-Language': String(this.lang),
			},

		});
	}
	async postConversations(number, string) {
	if(!number && string) throw new Error('Provide xuid and a message')
n('https://xbl.io/api/v2/conversations', {
   method: 'post',
   body: `{"xuid": "${number}", "message": "${string}"}`,
   headers: {
        "x-Authorization": String(this.apitoken),
        'x-Contract': String(this.apptoken),
        'Accept': ['application/json', 'application/xml'],
        'Accept-Language': String(this.lang),
   }
});
}


}
