module.exports = (app) => {
    const eventsController = app.controllers.events;
    app.routes.get('/events', eventsController.getAvailableEvents);
    app.routes.post('/events', eventsController.addEvent);
    app.routes.put('/events/:eventId', eventsController.updateEvent);
    app.routes.delete('/events/:eventId', eventsController.deleteEvent);
};