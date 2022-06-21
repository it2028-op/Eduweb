'use strict';

/**
 * animal-card service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::animal-card.animal-card');
