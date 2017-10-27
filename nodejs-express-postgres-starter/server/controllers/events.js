var eventsService = require('../services/events');
var logger = require('../helpers/logger');

function getAvailableEvents(req, res, next) {
    logger.info("Enter Controller method : getAvailableEvents");
    logger.info("Test Log");
    return eventsService.getAvailableEvents( req, res, next);
}

function addEvent(req, res, next) {
    logger.info("Enter Controller method : addEvent");
    logger.info(req.body);
}

function updateEvent(req, res, next) {
    logger.info("Enter Controller method : updateEvent");
    logger.info(req.body);
}

function deleteEvent(req, res, next) {
    logger.info("Enter Controller method : deleteEvent");
    logger.info(req.body);
}

module.exports = {
    getAvailableEvents, addEvent, updateEvent, deleteEvent
};