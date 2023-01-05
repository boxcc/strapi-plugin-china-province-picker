'use strict';

module.exports = ({ strapi }) => ({
  index(ctx) {
    ctx.body = strapi
      .plugin('china-province-picker')
      .service('myService')
      .getWelcomeMessage();
  },
});
