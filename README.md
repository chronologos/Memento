# Memento(Production)

A [Sails](http://sailsjs.org) application. User can upload photo through website (should not ultimately in the product) and through iOS app (another repository). Photos are displayed in realtime (pseudo-realtime actually since I have not actually discovered how to make a page automatically refresh. 

## API Documentation
For uploading do a POST request to: `http://yiyantay.me/upload/upld` 
key1=photo, value1 = file to be uploaded
key2=location, value2 = location of photo, as a string

For viewing a specific gallery do a GET request to `http://yiyantay.me/gallery/view` with key1=location, value2 = location of beacon as a string. For example `http://yiyantay.me/gallery/view?location=istana`
 
## Todo
1. Add flash popups for upload success. [See this tutorial](http://stackoverflow.com/questions/25350841/sails-js-flash-message-for-user-registration)
2. Enable CSRF Protection
3. Set up database
4. Enable SSL
5. Fix how js and css don't work when minified and concatenated.

## Team 
1. Ian Tay (Website, Server), 
2. Clement Lee (iOS - app), 
3. Zac Lim (iOS - BLE beacon), 
4. Gerald Tan (Product Design)

## Server Setup
1. Create droplet, Ubuntu 14.10, create new user and SSH key. Set up credential helper and password caching so that we don't have to enter our password everytime dwe do a `git push`.[L](https://www.digitalocean.com/community/tutorials/initial-server-setup-with-ubuntu-14-04)
2. Install NVM, nodejs, npm [L](https://www.digitalocean.com/community/tutorials/how-to-install-node-js-on-an-ubuntu-14-04-server)
3. Get sails app production ready.Export node env as production `export NODE_ENV=production` [1](https://www.digitalocean.com/community/tutorials/how-to-create-an-node-js-app-using-sails-js-on-an-ubuntu-vps)
3. [Allow process to run below port 1024](http://stackoverflow.com/questions/9164915/node-js-eacces-error-when-listening-on-most-ports)
4. Deploy using forever `sudo npm install -g forever`. Follow by `forever start app.js --prod`.

## Technology Stack
Nodejs + Sailsjs + Bootstrap & custom css/js + Blueimp image gallery
