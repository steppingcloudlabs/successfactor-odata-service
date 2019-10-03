module.exports = {
  // server configurations
  port: 3000,
  name: 'successfactors-odata-service',

  // aws-sdk config
  aws_access_key_id: process.env.AWS_ACCESS_KEY_ID,
  aws_secret_access_key: process.env.AWS_SECRET_ACCESS_KEY,
  aws_region: process.env.AWS_REGION,
};
