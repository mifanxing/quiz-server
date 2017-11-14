/**
 * Created by Freeman on 2017/11/14.
 */
const mongoose = require('mongoose')
const Schema = mongoose.Schema,
ObjectId = Schema.ObjectId;
const SessionSchema = new Schema({
  quiz:ObjectId,
  finished: {type: Boolean, required: true,default:false}, // 标题
  created: {type: Date, default: Date.now},
  updated: {type: Date, default: Date.now},
})
const Session = mongoose.model('Session', SessionSchema)
mongoose.Promise = global.Promise
module.exports = Session