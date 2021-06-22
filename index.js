const {get, post} = require('axios')
      
      /**
        * @param {{
        *  apitoken: string | string[],
        *  apptoken: string | string[],
        *  lang: string | string[]
        * }} XboxAPI options
        */
     class XboxAPI {
        constructor(options = {}) {
          this.apitoken = options.apiToken;
          this.apptoken = options.appToken || 'pt-br'
          this.lang = options.lang;
      
          if(!this.apitoken) throw new Error('Provide api_token')
          if(!this.apptoken) throw new Error('Provide app_token')
       }
      
      async account (number) {
     
          if(!number) throw new Error('Provide xuid')
          if(isNaN(number)) throw new Error('Provide number')
            return await get(`https://xbl.io/api/v2/account/${number}`, {
  "headers": {
  "X-Authorization": String(this.apitoken),
  "X-Contract": String(this.apptoken),
  "Accept": ['application/json', 'application/xml'],
  "Accept-Language": String(this.lang),
  },
  
  })
}
 async addFriend(number) {
   if(!number) throw new Error('Provide xuid')
   if(isNaN(number)) throw new Error('Provide number')
   
  return await get(`https://xbl.io/api/v2/friends/add/${number}`, {
 "headers": {
  "X-Authorization": String(this.apitoken),
  "X-Contract": String(this.apptoken),
  "Accept": ['application/json', 'application/xml'],
  "Accept-Language": String(this.lang),
},
})
}
async friends() {
return await get('https://xbl.io/api/v2/friends', {
  "headers": {
  "X-Authorization": String(this.apitoken),
  "X-Contract": String(this.apptoken),
  "Accept": ['application/json', 'application/xml'],
  "Accept-Language": String(this.lang)
  },
          })
}
async searchFriend(string) {
  if(!string) throw new Error('Provide gamertag');
return await get(`https://xbl.io/api/v2/friends/search?gt=${string}`, {
  "headers": {
  "X-Authorization": String(this.apitoken),
  "X-Contract": String(this.apptoken),
  "Accept": ['application/json', 'application/xml'],
  "Accept-Language": String(this.lang),
  },
})
}
async favoriteFriend() {
return await post('https://xbl.io/api/v2/friends/favorite', {

  "headers": {
  "X-Authorization": String(this.apitoken),
  "X-Contract": String(this.apptoken),
  "Accept": ['application/json', 'application/xml'],
  "Accept-Language": String(this.lang),
  },
  
"Payload": {"xuids":["id"]}
})
   }
   }
