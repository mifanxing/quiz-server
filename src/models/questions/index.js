/**
 * Created by Freeman on 2017/11/14.
 */

const mongoose = require('mongoose')
const Schema = mongoose.Schema,
  ObjectId = Schema.ObjectId;
const questionSchema = new Schema({
  title:{type:String,required: true,},
  question_order:{type:Number,default:0},
  quiz:{type:ObjectId},
  created: {type: Date, default: Date.now},
  updated: {type: Date, default: Date.now},
})
const Question = mongoose.model('Question', questionSchema)
mongoose.Promise = global.Promise
module.exports = Question