module.exports = () => {
  // eslint-disable-next-line global-require
  const contentSimilarityService = require('../../services/rcm/rcm.services')();
  /**
     * Paper similarity controller
     */
  /**
     * ćčż°
     * @date 2019-09-15
     * @param {any} req
     * @param {any} res
     * @param {any} next
     * @param {any} {logger}
     * @return {any}
     */
  const getJobListing = async (req, res, next, { logger }) => {
    try {
      const payload = req.body;
      // const response = await contentSimilarityService
      // .getJobListing({ payload, logger });
      // console.log(response);
      logger.info('Similar Papers Successfully found for ');
      res.status(200).send({ status: '200 OK', payload });
    } catch (error) {
      next(error);
    }
  };
  return {
    getJobListing,
  };
};
