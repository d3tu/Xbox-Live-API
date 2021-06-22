# Xbox-Live-API
Easy and simple API for xbox.

# How it works? 

```js
const XboxAPI = require('Xbox-Live-API');

let client = new XboxAPI({
apiToken: 'YOUR_API_TOKEN',
appTokeb: 'YOUR_APP_TOKEN',
lang: 'en-us'
})
client.account('xuid').then(response => console.log(response.data))
```
