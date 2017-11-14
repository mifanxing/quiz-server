/**
 * Created by Freeman on 2017/11/14.
 */

const mongoose = require('mongoose')
const Schema = mongoose.Schema,  ObjectId = Schema.ObjectId;
const answerOptionSchema = new Schema({
  label:{type:String,},
  correct:{type:Boolean,default:false},
  answer:{type:ObjectId},
  created: {type: Date, default: Date.now},
  updated: {type: Date, default: Date.now},
})
const AnswerOption = mongoose.model('AnswerOption', answerOptionSchema)
mongoose.Promise = global.Promise
module.exports = AnswerOption