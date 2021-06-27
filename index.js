const fetch = require('node-fetch');

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
	
	// Get methods
	
	account(number) {
		return number ? this._get(`https://xbl.io/api/v2/account/${number}`) : this._get(`https://xbl.io/api/v2/account/`);
	}
	
	addFriend(number) {
		if (!number) throw new Error('Provide a xuid');
		return this._get(`https://xbl.io/api/v2/friends/add/${number}`);
	}
	
  removeFriend(xuid) {
	  if(!xuid) throw new Error('Provide a xuid');
  	return this._get(`https://xbl.io/api/v2/friends/remove/${xuid}`);
  }
	
	friends() {
		return this._get('https://xbl.io/api/v2/friends');
	}
	
	searchFriend(string) {
		if (!string) throw new Error('Provide a gamertag');
		return this._get(`https://xbl.io/api/v2/friends/search?gt=${string}`);
	}
	
	recentPlayers() {
		return this._get(`https://xbl.io/api/v2/recent-players`);
	}
	
	precense(xuid) {
		return xuid ? this._get(`https://xbl.io/api/v2/${xuid}/precense`) : this._get(`https://xbl.io/api/v2/precense`);
	}
	
	conversationsRequest() {
		return this._get(`https://xbl.io/api/v2/conversations/request`);
	}
	
	getConversations(xuid) {
		return xuid ? this._get(`https://xbl.io/api/v2/conversations/${xuid}`) : this._get(`https://xbl.io/api/v2/conversations`);
	}
	
	getParty() {
		return this._get(`https://xbl.io/api/v2/party`);
	}
	
  achievimentsPlayer(xuid) {
		if (!xuid) throw new Error('Provide a xuid');
		return this._get(`https://xbl.io/api/v2/achieviments/player/${xuid}`);
	}
	
	// Post methods
	
	favoriteFriend(xuid) {
		if (!xuid) throw new Error('provide a xuid');
		return this._post('https://xbl.io/api/v2/friends/favorite', {
			xuid
		});
	}
	
	postConversations(xuid, message) {
  	if (!xuid && message) throw new Error('Provide xuid and a message');
    return this._post('https://xbl.io/api/v2/conversations', {
    	xuid, message
    });
  }

  postParty(id, xuid, sessionName) {
  	if (!id) throw new Error('Provide a sessionid, If using this in your application first call "getParty()" to get a list of sessions (usually only 1) then call this endpoint to invite players to join the session. SessionName below is a value returned from getParty()');
  	if (!xuid) throw new Error('Provide a xuid');
  	return this._post(`https://xbl.io/api/v2//party/invite/${id}`, {
  		xuid, sessionName
  	});
  }
  
  // Requester
  
  get _headers() {
  	return {
  		'X-Authorization': String(this.apitoken),
  		'X-Contract': String(this.apptoken),
  		"Accept": ['application/json', 'application/xml'],
  		'Accept-Language': String(this.lang)
  	};
  }
  
  _get(url) {
  	return fetch(url, {
		  method: 'get',
	  	headers: this._headers
	  });
  }

  _post(url, data) {
  	return fetch(url, {
	  	method: 'post',
	  	body: JSON.stringify(data),
	  	headers: this._headers
  	});
  }
}
