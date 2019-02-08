let routes = (app) =>{
    app.use('/api/v1/cafes', require('./components/cafes'))
}

module.exports = routes;