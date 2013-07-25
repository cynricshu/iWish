/**
 * Created with JetBrains WebStorm.
 * User: cynric
 * Date: 13-3-19
 * Time: 下午7:05
 * To change this template use File | Settings | File Templates.
 */
var mongoose = require( './mongoose' );
var Schema = mongoose.Schema;

var categorySchema = new Schema({
    _id: Number,
    text: String
});

module.exports = mongoose.model( 'Category', categorySchema );