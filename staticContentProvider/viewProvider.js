/**
 * Created with JetBrains WebStorm.
 * User: cynric
 * Date: 13-3-13
 * Time: 上午11:50
 * To change this template use File | Settings | File Templates.
 */
exports.provide = function (req, res) {
    res.render(req.params.page);
};