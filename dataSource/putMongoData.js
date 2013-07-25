/**
 * Created with JetBrains WebStorm.
 * User: cynric
 * Date: 13-3-12
 * Time: 下午3:24
 * To change this template use File | Settings | File Templates.
 */
var handleHelper = require('../handler/handleHelper');
//var postMongoData = require('../dataSource/postMongoData');

/**
 * 增加一条信息，没有任何额外操作
 * @param dataSource
 * @param data
 * @param res
 */
exports.putData = function( dataSource, data, res )
{
    var model = require( '../model/' + dataSource );
    var putData = new model( data );
    putData.save(function ( err, data ) {
        if ( err ) {
            handleHelper.handleError( res );
        }
        else {
            handleHelper.handleSuccess( res, data );
        }
    });
};
/**
 * 新增用户，如果用户存在就返回-1
 * @param putData
 * @param res
 */
exports.putUserData = function( putData, res )
{
    var model = require( '../model/users' );
    model.findOne( { phone: putData.phone }, function( err, data ) {
       if ( err ) {
           handleHelper.handleError( res );
       }
       else {
           //console.log( data );
           if ( data != null ) {
               console.log( 'users already exists ');
               res.send( {flag: -3, result: '这个手机号已经注册过啦' } );
           }
           else {
               //对密码加密
               // putData.password = handleHelper.encode( putData.password );
               data = new model( putData );
               data.save( function( err, data ) {
                   if ( err ) {
                       handleHelper.handleError( res );
                   }
                   else {
                       handleHelper.handleSuccess( res, data );
                   }
               });
           }
       }
    });
};
/**
 * 发布心愿，首先判断，然后插入。
 * @param putData
 * @param res
 */
//exports.putWishData = function( putData, res )
//{
//    var model = require( '../model/wishes' );
//    var data = new model( putData );
//
//    var userId = putData._id;
//    var userModel = require( '../model/users' );
//    userModel.findById( userId, function( err, data ) {
//        if ( data == null ) {
//            res.send( '')
//        }
//    });
//    //发布愿望
//    data.save( function ( err, data ) {
//        if (err) {
//            handleHelper.handleError( res );
//        }
//        //发布成功后，从用户的分数里扣除任务的分数。
//        else {
//            handleHelper.handleSuccess( res );
//        }
//    });
//
//};