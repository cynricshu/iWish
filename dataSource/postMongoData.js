/**
 * Created with JetBrains WebStorm.
 * User: cynric
 * Date: 13-3-12
 * Time: 下午3:24
 * To change this template use File | Settings | File Templates.
 */

var handleHelper = require( '../handler/handleHelper' );

/**
 * 更新数据，不做任何额外操作
 * @param dataModel
 * @param condition
 * @param update
 * @param res
 */
var postData = function( dataModel, condition, update, res, handle )
{
    dataModel.update( condition, update, { upsert: false }, function ( err, numberAffected, data ) {
        if ( err ) {
            handleHelper.handleError( res );
        }
        else {
            handle( res, numberAffected );
        }
    });
};
/**
 * 修改用户信息时先验证将要修改的手机号是否已存在，已存在则返回错误
 * @param condition
 * @param update
 * @param res
 */
exports.postUserData = function( condition, update, res )
{
    var userModel = require( '../model/users' );
    var phone = update.phone;
    userModel.findOne( { phone: phone }, function( err, data ) {
        if ( err ) {
            handleHelper.handleError( res );
        }
        else {
            if ( data != null ) {
                res.send( { flag: -2, result: "该手机号已存在" } );
            }
            else {
                postData( userModel, condition, update, res, handleHelper.handleSuccess );
            }
        }
    });
};
/**
 * 修改心愿状态
 * @param condition
 * @param update
 * @param res
 */
exports.postWishData = function( condition, update, res )
{
    var wishModel = require( '../model/wishes' );
    var userModel = require( '../model/users' );
    var toState = update.status;
    switch ( toState ) {
        case '0' ://放弃心愿
            postData( wishModel, condition, { $set: update }, res, function( res, numberAffected ) {
                handleHelper.handleSuccess( res, numberAffected );
            });
            break;
        case '1' ://接受心愿，先判断是否过期，在判断是否已达到认领数上限
            var endDate = update.endDate;
            if ( endDate < Date.now() ) {
                res.send( { flag: -3, result: "该心愿已过期啦" } );
                return false;
            }
            var claimUser = update.claimUser;
            userModel.findById( claimUser, function( err, data ) {
                if ( err ) {
                    handleHelper.handleError( res );
                }
                else {
                    if ( data.claimingWishes >= 3 ) {
                        res.send( { flag: -4, result: "你领取的心愿太多了，请先完成一些~"} );
                    }
                    else {
                        //console.log( condition );
                        //console.log( update );
                        postData( wishModel, condition, { $set: update }, res, function( res, numberAffected ) {
                            handleHelper.handleSuccess( res, numberAffected );
                        });
                    }
                }
            });
            break;
        case '2' ://完成心愿
            postData( wishModel, condition, { $set: update }, res, function( res, numberAffected ) {
                handleHelper.handleSuccess( res, numberAffected );
            });
            break;
        case '3' ://完成评分，流程结束，给用户加分或者减分。
            var score = update.score;
            update.score = undefined;
            delete update.score;

            postData( wishModel, condition, { $set: update }, res, function( res, numberAffected ) {
                condition = { _id: update.claimUser };
                update = { $inc: { score: score } };

                postData( userModel, condition, update, res, function( res, numberAffected ) {
                    handleHelper.handleSuccess( res, numberAffected );
                });

            });
            break;
        case '4' :
            postData( wishModel, condition, { $set: update }, res, function( res, numberAffected ) {
                handleHelper.handleSuccess( res, numberAffected );
            });
            break;
        default :
            break;
    }
};

exports.postData = postData;
