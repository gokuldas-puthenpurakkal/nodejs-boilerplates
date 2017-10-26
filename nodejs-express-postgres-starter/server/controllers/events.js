var eventsService = require('../services/events');

function getAvailableEvents(req, res, next) {
    console.log('Controller method : getAvailableEvents');
    eventsService.getAvailableEvents( req, res, next);
}

function addEvent(req, res, next) {
    console.log('Controller method : addEvent');
    console.log(req.body);
}

function updateEvent(req, res, next) {
    console.log('Controller method : updateEvent');
    console.log(req.body);
}

function deleteEvent(req, res, next) {
    console.log('Controller method : deleteEvent');
    console.log(req.body);
}

module.exports = {
    getAvailableEvents, addEvent, updateEvent, deleteEvent
};