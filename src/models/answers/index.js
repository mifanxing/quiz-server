/**
 * Created by Freeman on 2017/11/14.
 */

const mongoose = require('mongoose')
const Schema = mongoose.Schema,ObjectId = Schema.ObjectId;
const answerSchema = new Schema({
  multiple:{type:Boolean,default:false,},
  question:{type:ObjectId},
  created: {type: Date, default: Date.now},
  updated: {type: Date, default: Date.now},
})
const Answer = mongoose.model('Answer', answerSchema)
mongoose.Promise = global.Promise
module.exports = Answer