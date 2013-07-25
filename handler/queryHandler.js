/**
 * Created with JetBrains WebStorm.
 * User: cynric
 * Date: 13-3-13
 * Time: 下午4:22
 * To change this template use File | Settings | File Templates.
 */
var getMongoData = require('../dataSource/getMongoData');
var handleHelper = require('./handleHelper');

var parseQueryUrl = function(req, res) {
    var dataSource = req.params.dataSource;

    //console.log('GET DATA: ' + dataSource + '; options: ' + req.params.options);

    var queryFields = {};
    var queryOptions = {};
    var sorts = {};
    var populates = [];
    var fields = '';

    //解析查询条件
    var options = req.params.options.split('&');
    for (var i in options) {
        var pattern = options[i].split('$');
        switch (pattern[0]) {
            case 'a' :
                break;
            case 'count' :
                queryOptions.count = 'count';
                break;
            case 'skip' :
                queryOptions.skip = pattern[1];
                break;
            case 'limit' :
                queryOptions.limit = pattern[1];
                break;
            case 'sort' :
                sorts[ pattern[1] ] = pattern[2];
                break;
            case 'populate':
                populates.push(pattern[1]);
                break;
            case 'field':
                fields += pattern[1] + ' ';
                break;
            default :
                var query = {};
                if (pattern[1] == 'eq') {
                    queryFields[ pattern[0] ] = pattern[2];
                }
                else if ( pattern[1] == 'co' ) {
                    query[ '$regex' ] = ".*" + pattern[2] + ".*";
                    queryFields[ pattern[0] ] = query;
                }
                else {
                    query[ '$' + pattern[1] ] = pattern[2];
                    queryFields[ pattern[0] ] = query;
                }
                break;
        }
    }
//    console.log( 'queryFields: ' + JSON.stringify(queryFields) );
//    console.log( 'queryOptions: ' + JSON.stringify(queryOptions) );
//    console.log( 'sorts: ' + JSON.stringify(sorts) );
//    console.log( populates );
//    console.log( fields );
    if ( queryOptions.count != null ) {
        getMongoData.getCounts( dataSource, queryFields, queryOptions, res );
    }
    else {
        getMongoData.getData( dataSource, queryFields, queryOptions, sorts, populates, fields, res, dataWrapper );
    }
};


var dataWrapper = function( res, data, dataSource )
{
    switch ( dataSource ) {
        case 'wishes' :
            handleOvertimeWishes( res, data );
            break;
        case 'users' :
            if ( data != '' && data != null  ) {
                var singleData = data[0];
                singleData.password = undefined;
                delete singleData.password;
                var wishModel = require( '../model/wishes' );
                wishModel.count( { createUser: singleData._id, status: { $lte: 1 } }, function( err, data ) {
                    if ( err ) {
                        handleHelper.handleError( res );
                    }
                    else {
                        singleData.issuingWishes= data;
                        wishModel.count( { claimUser: singleData._id, status: { $lte: 1 } }, function( err, data ) {
                            if ( err ) {
                                handleHelper.handleError( res );
                            }
                            else {
                                singleData.claimingWishes = data;
                                handleHelper.handleSuccess( res, singleData );
                            }
                        });
                    }
                });
            }
            else {
                res.send( { flag: -1, result: '用户不存在!' } );
            }
            break;
        default :
            handleHelper.handleSuccess( res, data );
            break;
    }
};

var handleOvertimeWishes = function( res, data )
{
    if ( data instanceof Array ) {
        for (var i in data) {
            var wish = data[i];
            var endDate = wish.endDate;
            if ( endDate != null && endDate < Date.now() ) {
                wish.state = 4;
            }
        }
        handleHelper.handleSuccess( res, data );
    }
    else {
        var wish = data;
        var endDate = wish.endDate;
        if ( endDate != null && endDate < Date.now() ) {
            wish.state = 4;
        }
        handleHelper.handleSuccess( res, data );
    }
};


exports.parseQueryUrl = parseQueryUrl;