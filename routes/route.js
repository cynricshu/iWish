var deleteMongoData = require('../dataSource/deleteMongoData');
var queryHandler = require('../handler/queryHandler');
var postHandler = require('../handler/postHandler');
var putHandler = require('../handler/putHandler');

var viewProvider = require('../staticContentProvider/viewProvider');

/**
 * get      查
 * put      增
 * post     改
 * delete   删
 * 本方法负责分发路由，根据操作方法的不同，分派到不同的Handler
 * @param app
 */
exports.route = function (app) {
    app.get('/api/data/:dataSource/:options', queryHandler.parseQueryUrl);
    app.delete('/api/data/:dataSource', deleteMongoData.deleteData);
    app.post('/api/data/:dataSource', postHandler.handleUpdate);
    app.put('/api/data/:dataSource', putHandler.handleInsert);




    app.get('/:page', viewProvider.provide);
};

