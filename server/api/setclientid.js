'use strict';

const Cookie = require('../../common/cookie');
const UrlParams = require('../../common/urlparams');

module.exports = function*(next) {
    const clientID = this.query[UrlParams.URL_PARAM_CLIENT_ID];
    if (!clientID) {
        this.body = 'no clientID, ignored';
        return;
    }

    const cookieStr = Cookie.generateCookieItem(Cookie.KEY_CLIENT_ID, clientID, Infinity, '/', this.hostname);
    this.response.set('set-cookie', cookieStr);
    this.body = 'updated as ' + clientID;
};
