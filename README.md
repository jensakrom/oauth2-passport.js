# oauth2-passport.js
this is about oauth2 with passport.js

Install to try Oauth
1. clone this repository
2. install this repository
   - type npm install
3. this repository not include module keys. In this keys consist of
   - google secret id
   - mongodb uri
   - session key
   
   you must create keys.js in folder config and then type this script
   
   module.exports = {
    google:{
        clientId: 'your google+ id',
        clientSecret: 'your secret keys'
    },
    mongodb:{
        DbURI:'mongodb://localhost:27017/oauth-passport'
    },
    session:{
        cookieKey: 'yoursessionkey'
    }
}
   
