/* eslint-disable camelcase */
/* eslint-disable no-async-promise-executor */
const stringify = require('json-stringify-safe');
const axios = require('axios');
const utilService = require('../../utils/index')();


module.exports = () => {
  const getJobListing = ({ payload, logger }) => new Promise(async (resolve, reject) => {
    try {
      const { endpoint } = payload;
      const accessTokenResponse = await utilService.getAccessToken(payload);
      const { access_token } = accessTokenResponse;
      const url = `${endpoint}/odata/v2/Background_PFStatement?$select=backgroundElementId,userId,Year,attachment,lastModifiedDate,attachmentNav/attachmentId,attachmentNav/fileExtension,attachmentNav/fileName,attachmentNav/fileSize,attachmentNav/fileContent&$expand=attachmentNav&$format=json`;
      const authStr = 'Bearer '.concat(access_token);
      const odataResponse = await axios.get(url, { headers: { Authorization: authStr } });
      resolve(JSON.parse((stringify(odataResponse.data))));
    } catch (err) {
      logger.info(err);
      reject(err);
    }
  });
  return {
    getJobListing,
  };
};
