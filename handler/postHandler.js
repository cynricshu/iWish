/**
 * Created with JetBrains WebStorm.
 * User: cynric
 * Date: 13-3-16
 * Time: 下午8:18
 * To change this template use File | Settings | File Templates.
 */

var postMongoData = require('../dataSource/postMongoData');
var handleHelper = require( './handleHelper' );

exports.handleUpdate = function ( req, res )
{
    var dataSource = req.params.dataSource;

    console.log( "POST DATA " + dataSource + ": " + JSON.stringify( req.body ) );

    var update = req.body;
    var condition = { _id: update._id };
    //更新前把主键删除
    if ( update._id != null ) {
        update._id = undefined;
        delete update._id;
    }


    switch ( dataSource ) {
        case 'users' ://修改用户个人信息
            condition.password = update.oldPassword;
            update.oldPassword = undefined;
            update._id = undefined;
            delete update.oldPassword;
            delete update._id;
            console.log(condition);
            console.log(update);
            postMongoData.postUserData( condition, update, res );
            break;
        case 'wishes' ://修改心愿状态，对应的操作是领取，完成，放弃等等
            postMongoData.postWishData( condition, update, res );
            break;
        default :
            var model = require( '../dataSource/' + dataSource );
            postMongoData.postData( model, condition, update, res );
            break;
    }
};

