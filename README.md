# Xbox-Live-API
Easy and simple API for xbox.

# How to get API token and App token 

go to https://xbl.io/ and log in to some account on Xbox, then press menu, profile and go down a little, and api key will appear, and press create, then go up a little and go to apps then click new app, put anything, in Chave Publica put anything, like: 1772683 


# How it works? 

```js
const XboxAPI = require('xb-live-api');

let client = new XboxAPI({
  apiToken: 'YOUR_API_TOKEN',
  appToken: 'YOUR_APP_TOKEN',
  lang: 'en-us' //default is pt-br
})
client.account('xuid').then(r => r.json()).then(json => console.log(json))
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
client.searchFriends(gamertag).then(r => r.json()).then(json => console.log(json))
```
> NOTE: id is hostid 

# How do you get the account id?

```js
const XboxAPI = require('xb-live-api')

let client = new XboxAPI({
	apiToken: 'YOUR_API_TOKEN',
	appToken: 'YOUR_APP_TOKEN',
	lang: 'en-us'//default is pt-br
})

client.account().then(r => r.json()).then(json => console.log(json))
```
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

## Functions

`account()` -> **get your information**

`account(xuid)` -> **get user information**

`addFriend(xuid)` -> **add a friend**

`removeFriend(xuid)` -> **remove a person as a friend**

`searchFriends(gamertag)` -> **get a user's information by the gamertag**

`recenPlayers()` -> **show recent players**

`precense()` -> **get friend's precense**

`precense(xuid)` -> **get friend's precense**

`conversationsRequests()` -> **get message requests**

`getConversations()` -> **get all conversations**

`getConversations(xuid)` -> **get a certain conversation**

`achievimentsPlayers(xuid)` -> **get the user's achievements**

`favoriteFriend(xuid)` -> **put one of your friends in the favorites list**

`postConversations(xuid, message)` -> **send a message**
