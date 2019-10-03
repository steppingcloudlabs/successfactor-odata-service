/* eslint-disable no-async-promise-executor */
module.exports = () => {
  // const neo4j = require('neo4j-driver').v1;
  // const driver = neo4j.driver('bolt://localhost:7687');
  // // const session = driver.session();
  const getJobListing = ({ payload, logger }) => new Promise(async (resolve, reject) => {
    try {
      resolve(payload);
    } catch (err) {
      logger.info(err);
      reject(err);
    }
  });
  return {
    getJobListing,

  };
};
