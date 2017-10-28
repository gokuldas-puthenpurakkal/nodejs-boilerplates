var eventsRepository = require('../repository/events');
var logger = require('../helpers/logger');

function getAvailableEvents(req, res, next) {
    logger.info('Service method : getAvailableEvents');
    eventsRepository.getAvailableEvents( req, res, next);
}

function addEvent(req, res, next) {
    logger.info('Service method : addEvent');
    logger.info(req.body);
}

function updateEvent(req, res, next) {
    logger.info('Service method : updateEvent');
    logger.info(req.body);
}

function deleteEvent(req, res, next) {
    logger.info('Service method : deleteEvent');
    logger.info(req.body);
}

module.exports = {
    getAvailableEvents, addEvent, updateEvent, deleteEvent
};