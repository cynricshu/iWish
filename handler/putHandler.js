/**
 * Created with JetBrains WebStorm.
 * User: cynric
 * Date: 13-3-16
 * Time: 下午8:31
 * To change this template use File | Settings | File Templates.
 */
var putMongoData = require('../dataSource/putMongoData');
//var handleHelper = require( './handleHelper' );


exports.handleInsert = function ( req, res )
{
    var dataSource = req.params.dataSource;
    var putData = req.body;

    console.log("PUT DATA " + dataSource + ": " + JSON.stringify(putData));

    switch ( dataSource ) {
//        case 'wishes' :
//            putMongoData.putWishData( putData, res );
//            break;
        case 'users' ://添加用户是需要检测手机号是否已存在
            putMongoData.putUserData( putData, res );
            break;
        default :
            putMongoData.putData( dataSource, putData, res );
            break;
    }
};

