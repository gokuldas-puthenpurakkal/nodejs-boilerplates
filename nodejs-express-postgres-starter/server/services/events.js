var eventsRepository = require('../repository/events');

function getAvailableEvents(req, res, next) {
    console.log('Service method : getAvailableEvents');
    eventsRepository.getAvailableEvents( req, res, next);
}

function addEvent(req, res, next) {
    console.log('Service method : addEvent');
    console.log(req.body);
}

function updateEvent(req, res, next) {
    console.log('Service method : updateEvent');
    console.log(req.body);
}

function deleteEvent(req, res, next) {
    console.log('Service method : deleteEvent');
    console.log(req.body);
}

module.exports = {
    getAvailableEvents, addEvent, updateEvent, deleteEvent
};