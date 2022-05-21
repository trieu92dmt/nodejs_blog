const newsRouter = require('./news');
const siteRouter = require('./site');

function route(app) {
      
    //newsRouter
    app.use('/news', newsRouter);

    //siteRouter
    app.use('/', siteRouter);  
    
    // app.post('/search', (req, res) => {
    //     console.log(req.body)
    //     res.render('search');
    // });
      
}

module.exports = route;