# Xbox-Live-API
Easy and simple API for xbox.

# How get api token and app token?

go to https://xbl.io/ and log in to some account on Xbox, then press menu, profile and go down a little, and api key will appear, and press create, then go up a little and go to apps then click new app, put anything, in Chave Publica put anything, like: 1772683 


# How it works? 

```js
const XboxAPI = require('xb-live-api');

let client = new XboxAPI({
  apiToken: 'YOUR_API_TOKEN',
  appToken: 'YOUR_APP_TOKEN',
  lang: 'en-us' //default is pt-br
})
client.account('xuid').then(response => console.log(response.data))
```
> NOTE: xuid is the xbox account id

# How do you get the account id?

```js
const XboxAPI = require('xb-live-api')

let client = new XboxAPI({
	apiToken: 'YOUR_API_TOKEN',
	appToken: 'YOUR_APP_TOKEN',
	lang: 'en-us'//default is pt-br
})

let gamertag = 'kayke293'
client.searchFriends(gamertag).then(response => console.log(reponse.data))
```
> NOTE: id is hostid 

# How do you send a friend request? 

```js
const XboxAPI = require('xb-live-api')

let client = new XboxAPI({
	apiToken: 'YOUR_API_TOKEN',
	appToken: 'YOUR_APP_TOKEN',
	lang: 'en-us'// default is pt-br
})

client.addFriend('xuid')
```