module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '00b7a7ee3c59ed90e1d46fa27ff1155f'),
  },
});
