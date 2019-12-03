module.exports = () => {
  // eslint-disable-next-line global-require
  const rcmServices = require('../../services/rcm/rcm.services')();
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
      const response = await rcmServices.getJobListing({ payload, logger });
      res.status(200).send({
        status: '200 OK',
        response,
      });
    } catch (error) {
      logger.info(error);
      next(error);
    }
  };
  return {
    getJobListing,
  };
};
