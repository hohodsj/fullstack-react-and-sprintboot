import React from "react";

export const oktaConfig = {
    clientId: '0oann18iqyCykcG8Z5d7',
    issuer: 'https://dev-73621003.okta.com',
    redirectUri: 'http://localhost:3000/login/callback',
    scopes: ['openid', 'profile', 'email'],
    pkce: true,
    disableHttpsCheck: true,
};