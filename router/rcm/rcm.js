module.exports = ({ logger }) => {
  // eslint-disable-next-line global-require
  const express = require('express');
  // eslint-disable-next-line new-cap
  const router = express.Router();
  // eslint-disable-next-line max-len
  // eslint-disable-next-line global-require
  const similarityController = require('../../controller/rcm/rcm.controller')();
  /**
     * paper similarity routes
     */
  router
    .route('/rcm/joblist')
    .post((req, res, next) => similarityController.getJobListing(req, res, next, { logger }));
  return router;
};
