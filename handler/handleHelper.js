/**
 * Created with JetBrains WebStorm.
 * User: cynric
 * Date: 13-3-13
 * Time: 下午2:35
 * To change this template use File | Settings | File Templates.
 */


exports.handleError = function (res) {
    res.send({  flag: -1 });
    return false;
};

exports.handleSuccess = function (res, data) {
    if ( data instanceof Array ) {
        var count = data.length;
        res.send({  flag: 1, count: count, result: data });
    }
    else {
        res.send({  flag: 1, count: 1, result: data });
    }
    return false;
};

exports.encode = function( content ) {
    var crypto = require( 'crypto' );
    var hash = crypto.createHash( "md5" );
    hash.update( new Buffer( content, "binary" ) );
    var encode = hash.digest('hex');
    return encode;
};
