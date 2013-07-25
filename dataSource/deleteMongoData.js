/**
 * Created with JetBrains WebStorm.
 * User: cynric
 * Date: 13-3-12
 * Time: 下午3:24
 * To change this template use File | Settings | File Templates.
 */
var handleHelper = require('./../handler/handleHelper');

exports.deleteData = function (req, res) {
    var dataSource = req.params.dataSource;
    var model = require('../model/' + dataSource);
    var deleteData = req.body;

    console.log("DELETE from " + dataSource + ": " + JSON.stringify(deleteData));

    //单条删除
    if ( deleteData != null ) {
        model.remove( deleteData, function ( err ) {
            if (err) {
                handleHelper.handleError( res );
            }
            else {
                handleHelper.handleSuccess( res );
            }
        });
    }
    //}
    //多条删除
//    else if ( deleteData == null ) {
//        console.log( 'delete All' );
//        model[ dataSource ].remove( {}, function( err ){
//            if ( err ) {
//                handleHelper.handleError( res );
//            }
//            else {
//                handleHelper.handleSuccess( res );
//            }
//        });
//    }


};