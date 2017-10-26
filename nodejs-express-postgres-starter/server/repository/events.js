

function getAvailableEvents(req, res, next) {
    console.log('Repository method : getAvailableEvents');
}

function addEvent(req, res, next) {
    console.log('Repository method : addEvent');
    console.log(req.body);
}

function updateEvent(req, res, next) {
    console.log('Repository method : updateEvent');
    console.log(req.body);
}

function deleteEvent(req, res, next) {
    console.log('Repository method : deleteEvent');
    console.log(req.body);
}

module.exports = {
    getAvailableEvents, addEvent, updateEvent, deleteEvent
};