'use strict';

/**
 * trunk service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::trunk.trunk');
