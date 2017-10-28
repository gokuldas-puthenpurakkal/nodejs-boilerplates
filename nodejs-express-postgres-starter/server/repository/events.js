var pool = require('../helpers/database');
var logger = require('../helpers/logger');

function getAvailableEvents(req, res, next) {
    logger.info('Repository method : getAvailableEvents');

    pool.connect(function (err, clients, done) {
        // Handle connection errors
        if (err) {
            done();
            logger.info(err);
            return res.status(500).json({ success: false, data: err });
        }


        clients.query('SELECT event_id, event_name FROM events', function (err, row) {

            var results = [];

            for (var i = 0; i < row.rows.length; i++) {
                var event = {
                };
                event.event_id = row.rows[i].event_id;
                event.event_name = row.rows[i].event_name;
                results.push(event);
                delete event;
            }
            if (err) {
                logger.info(err);
                return res.status(500).json({ success: false, data: err });
            }
            clients.release();
            return res.json(results);
        });
    });
}

function addEvent(req, res, next) {
    logger.info('Repository method : addEvent');
    logger.info(req.body);
}

function updateEvent(req, res, next) {
    logger.info('Repository method : updateEvent');
    logger.info(req.body);
}

function deleteEvent(req, res, next) {
    logger.info('Repository method : deleteEvent');
    logger.info(req.body);
}

module.exports = {
    getAvailableEvents, addEvent, updateEvent, deleteEvent
};