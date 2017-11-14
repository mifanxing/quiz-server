/**
 * Created by Freeman on 2017/11/14.
 */

const mongoose = require('mongoose')
const Schema = mongoose.Schema,ObjectId = Schema.ObjectId;
const recordSchema = new Schema({
  value:{type:String},
  session:{type:ObjectId,},//
  question:{type:ObjectId},// 与session 和 question关联
  correct:{type:Boolean,default:false},
  created: {type: Date, default: Date.now},
  updated: {type: Date, default: Date.now},
})
const Record = mongoose.model('Record', recordSchema)
mongoose.Promise = global.Promise
module.exports = Record