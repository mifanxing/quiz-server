/**
 * Created by Freeman on 2017/7/11.
 */
const mongoose = require('mongoose')
const config = require('../config')

const dbURI = config[process.env.NODE_ENV || 'development']

mongoose.connect(dbURI.mongodbURI, {
  useMongoClient: true,
})

// 连接成功
mongoose.connection.on('connected', () => {
  console.log('Mongoose connection open to ' + dbURI.mongodbURI)
})
// 连接失败
mongoose.connection.on('error', err => {
  console.log('Mongoose connection error: ' + err)
})

// 断开连接
mongoose.connection.on('disconnected', () => {
  console.log('Mongoose connection disconnected')
})