/**
 * Created by Freeman on 2017/11/14.
 */

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const QuizSchema = new Schema({
  title: {type: String, required: true}, // 标题
  description: {type: String, required: true}, // 描述
  image: {type: String, default: ''},    // image
  created: {type: Date, default: Date.now},
  updated: {type: Date, default: Date.now},
})
const Quiz = mongoose.model('Quiz', QuizSchema)
mongoose.Promise = global.Promise
module.exports = Quiz