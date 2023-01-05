'use strict';

module.exports = ({ strapi }) => {
  // registeration phase
  strapi.customFields.register({
    name: 'china-province',
    plugin: 'china-province-picker',
    type: 'string',
  });
};
