const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');
const mongooseDelete = require('mongoose-delete');

const Schema = mongoose.Schema;

const News = new Schema(
    {
        title: { type: String, required: true },
        content: { type: String },
        image: { type: String },
        videoId: { type: String },
        author: { type: String, required: true },
        slug: { type: String, slug: 'title', unique: true },
    },
    {
        timestamps: true,
    },
);

// Add plugins
mongoose.plugin(slug);
News.plugin(mongooseDelete, {
    deletedAt: true,
    overrideMethods: 'all',
});

module.exports = mongoose.model('News', News);
