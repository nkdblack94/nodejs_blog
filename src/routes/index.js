const newsRouter = require('./news');
const siteRouter = require('./site');
const profileRouter = require('./profile');


function route(app) {

    app.use('/news', newsRouter);

    app.use('/profile', profileRouter);

    app.use('/', siteRouter);
}

module.exports = route;
