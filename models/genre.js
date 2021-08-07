const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const GenreSchema = new Schema({
    name: { type: String, required: true, minlength: 3, maxlength: 100 }
});

// 虚拟属性'url'：藏书 URL
GenreSchema
    .virtual('url')
    .get(function () {
        return '/catalog/genre/' + this._id;
    });

// 导出 Book 模块
module.exports = mongoose.model('Genre', GenreSchema);