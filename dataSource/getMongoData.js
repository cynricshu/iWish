/**
 * Created with JetBrains WebStorm.
 * User: cynric
 * Date: 13-3-12
 * Time: 下午3:24
 * To change this template use File | Settings | File Templates.
 */
var handleHelper = require('../handler/handleHelper');

exports.getData = function ( dataSource, condition, queryOptions, sorts, populates, fields, res, dataWrapper ) {
    var model = require('../model/' + dataSource);
    var query;
    //判断是否根据主键查询
//    if (condition._id != null) {
//        query = model.findById( condition._id );
//    }
//    else {
//    }
    query = model.find( condition, fields, queryOptions );
    //排序
    query.sort(sorts);
    //关联查询
    for (var i in populates) {
        var populate = populates[i];
        query.populate(populate + '');
    }

    query.exec(function ( err, data ) {
        if ( err ) {
            handleHelper.handleError( res );
        }
        else {
            dataWrapper( res, data, dataSource );
        }
    });
};

exports.getCounts = function ( dataSource, condition, queryOptions, res ) {
    var model = require('../model/' + dataSource);
    var query;

    query = model.count( condition, queryOptions );

    query.exec(function ( err, data ) {
        if ( err ) {
            handleHelper.handleError( res );
        }
        else {
            handleHelper.handleSuccess( res, data );
        }
    });
};