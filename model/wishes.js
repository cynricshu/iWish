/**
 * Created with JetBrains WebStorm.
 * User: cynric
 * Date: 13-3-12
 * Time: 下午3:46
 * To change this template use File | Settings | File Templates.
 */

var mongoose = require( './mongoose' );
var Schema = mongoose.Schema;
var Users = require( './users' );

var wishSchema = new Schema({
    //分类 不需要显示，只用来查询
    categoryId: { type: Number, default: 0 },
    //标签
    tag: { type: String, default: '' },
    //心愿内容
    content: { type: String, default: '' },
    //是否有福利
    hasPayback: { type: Boolean, default: false },
    //报酬
    payback: { type: String, default: '' },
    //创建者ID
    createUser: { type: Schema.Types.ObjectId, ref: 'Users' },
    //创建日期
    createDate: { type: Date, default: Date.now },
    //终止时间
    endDate: { type: Date, default: Date.now },
    //经度
    longitude: { type: Number, default: 0 },
    //维度
    latitude: { type: Number, default: 0 },
    //任务状态  0可认领，1进行中，2等待评价，3已完成，4已终止
    status: { type: Number, default: 0 },
    //认领者ID列表
    claimUser: { type: Schema.Types.ObjectId, ref: 'Users', default: null },
    //评论标识 0表示没人评论，1表示发布者评论，10表示认领者已评论，11表示双方都评论。
    commentFlag: { type: Number, default: 0 }
    //最大响应人数
    //maxAnswer: { type: Number, default: 1 },
    //是否隐藏
    //hidden: { type: Boolean, default: false }
});

module.exports = mongoose.model('Wishes', wishSchema);