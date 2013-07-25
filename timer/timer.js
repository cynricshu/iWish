/**
 * Created with JetBrains WebStorm.
 * User: cynric
 * Date: 13-3-19
 * Time: 下午4:03
 * To change this template use File | Settings | File Templates.
 */
exports.checkWishTime = function ( interval )
{

    setInterval( checkWishTimeOut, interval );

};
/**
 * 检测过期的任务，改变其状态
 */
var checkWishTimeOut = function()
{
    var model = require( '../model/wishes' );
    var nowDate = Date.now();

    console.log( 'check Wish Process started at ' + nowDate );

//    model.update( { $where: 'this.status == 1 && this.endDate < ' + nowDate }, { status: 2 }, function( err, numbersAffected ) {
//        if ( err ) {
//            console.log( 'check Wish validity error' );
//        }
//        else {
//            console.log( numbersAffected + ' wishes were set finished by system' );
//        }
//    });

    model.update( { $where: 'this.status == 0 && this.endDate < ' + nowDate }, { status: 4 }, function( err, numbersAffected ) {
        if ( err ) {
            console.log( 'check Wish validity error' );
        }
        else {
            console.log( numbersAffected + ' wishes were out of date' );
        }
    });
};

