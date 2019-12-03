/* eslint-disable no-async-promise-executor */
const axios = require('axios');
const stringify = require('json-stringify-safe');


const params = new URLSearchParams();
module.exports = () => {
  const getAccessToken = (payload) => new Promise(async (resolve, reject) => {
    const {
      masterUserId,
      companyId,
      clientId,
      grantType,
      tokenUrl,
      idpUrl,
      privateKey,
    } = payload;
    params.append('client_id', clientId);
    params.append('user_id', masterUserId);
    params.append('token_url', tokenUrl);
    params.append('private_key', privateKey);
    try {
      axios({
        method: 'POST',
        url: idpUrl,
        withCredentials: true,
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'Access-Control-Allow-Methods': 'POST',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Headers': 'Content-Type',
        },
        data: params,
      }).then((response) => {
        const assertionToken = response.data;
        params.append('company_id', companyId);
        params.append('client_id', clientId);
        params.append('grant_type', grantType);
        params.append('assertion', assertionToken);
        axios({
          method: 'POST',
          url: tokenUrl,
          withCredentials: true,
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Access-Control-Allow-Methods': 'POST',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Headers': 'Content-Type',
          },
          data: params,
        }).then((_response) => {
          const assertionResponse = JSON.parse(stringify(_response));
          resolve(assertionResponse.data);
        });
      });
    } catch (error) {
      reject(error);
    }
  });
  return {
    getAccessToken,

  };
};
