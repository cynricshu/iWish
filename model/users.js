/**
 * Created with JetBrains WebStorm.
 * User: cynric
 * Date: 13-3-12
 * Time: 下午11:26
 * To change this template use File | Settings | File Templates.
 */

var mongoose = require( './mongoose' );
var Schema = mongoose.Schema;

var userSchema = new Schema({
    //姓名
    name: String,
    //密码
    password: String,
    //电话
    phone: String,
    //积分
    score: { type: Number, default: 10 },
    //性别
    sex: { type: Number, default: 2 },
    //已发布且被认领的心愿数
    issuingWishes: { type: Number, default: 0 },
    //已领取且正在进行中的心愿条数
    claimingWishes: { type: Number, default: 0 }
    //已完成但没有评分的条数
    //notCommentWishes: { type: Number, default: 0 }
});

module.exports = mongoose.model( 'Users', userSchema );


