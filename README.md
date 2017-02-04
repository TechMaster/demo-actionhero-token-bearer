Demo ActionHero with simple authentication token bearer

In token bearer authentication, server will compare value of authorization field in request header, if it matches
with existing value in database then request is authenticated otherwise server returns error
 
For better security, use JWT and refresh token

# How to run

```bash
git clone https://github.com/TechMaster/demo-actionhero-token-bearer.git
npm install
actionhero start
```

Using curl to call to API
```bash
curl -H "authorization: 123456789" http://127.0.0.1:8080/api/randomNumber
curl -H "authorization: 123456789mmm" http://127.0.0.1:8080/api/randomNumber
```

-H will create field in header of request.
The first request will be successful but the second will be failed because unmatched authorization

token of each user is stored in db/users.js
```javascript
const records = [
  {id: 1, username: 'jack', token: '123456789', displayName: 'Jack', emails: [{value: 'jack@example.com'}]} ,
  {id: 2, username: 'jill', token: 'abcdefghi', displayName: 'Jill', emails: [{value: 'jill@example.com'}]}
];
```

Look at initializers/middleware.js for authentication logic.
When property ```global``` of middle is true, that middleware will apply to all actions that has property ```authenticated = true```

When property ```global``` of middle is false, that middleware will only apply to action that specifies in ```middleware=['middle ware name']``` 
```javascript
exports.action = {
  name: 'math.random',
  description: 'Generate random number',
  blockedConnectionTypes: [],
  outputExample: {},
  matchExtensionMimeType: false,
  version: 1.0,
  toDocument: true,
  middleware: ['token-authentication'],  //Bổ xung middle ware here
  authenticated: true,
  inputs: {},

  run: function (api, data, next) {
    data.response.number = Math.random() * 100;
    next();
  }
};
```
