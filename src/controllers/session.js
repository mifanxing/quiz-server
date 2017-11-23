/**
 * Created by Freeman on 2017/11/14.
 */
const SessionModel = require('../models/sessions')
const QuestionModal = require('../models/questions')
const AnswerModal = require('../models/answers')
const AnswerOption = require('../models/answers/answer_options')
const RecordModal = require('../models/records')
class SessionController {

  static async saveSession (ctx) {
    const sessionModal = new SessionModel();
    sessionModal.quiz = ctx.params.id
    const session = await sessionModal.save()
    const currentQuestion = await QuestionModal.findOne({quiz:ctx.params.id,question_order:0})
    const nextQuestion = await QuestionModal.findOne({quiz:ctx.params.id,question_order:1})
    const data = {
      session_id: session.id,
      id:currentQuestion.id,
      next:nextQuestion.id
    }
    return ctx.success({data})
  }

  /**
   *
   * @param ctx
   * @return {Promise.<void>}
   */
  static async getSessionQuestion (ctx) {
    const sessionId = ctx.params.sessionId
    const questionId = ctx.params.questionId

    const session = await SessionModel.findById(sessionId)

    // if (!session){
    //   return ctx.notfound()
    // }

    const currentQuestion = await QuestionModal.findById(questionId)
    const answer = await AnswerModal.findOne({question:questionId})

    const nextQuestion = await QuestionModal.findOne({quiz:session.quiz,question_order:currentQuestion.question_order+1})

    const record = await RecordModal.findOne({session:sessionId,question:questionId})
    let answer_options
    if (record){
      answer_options = await AnswerOption.find({answer:answer.id},'label _id correct')
    }else {
      answer_options = await AnswerOption.find({answer:answer.id},'label _id')
    }

    const data = {
      session_id: sessionId,
      question:currentQuestion,
      correct: record?record.correct:null,
      answer:{
        multiple:answer.multiple,
        options:answer_options
      },
      next:!!nextQuestion?  nextQuestion.id:null,
    }
    record && (data.chooseValue = record.value)
    return ctx.success({data})
  }

  static async postSessionAnswer (ctx) {
    const sessionId = ctx.params.sessionId
    const questionId = ctx.params.questionId
    const {value} = ctx.request.body

    const session = await SessionModel.findById(sessionId)
    const currentQuestion = await QuestionModal.findById(questionId)
    const answer = await AnswerModal.findOne({question:questionId})
    const answer_value = await AnswerOption.findById(value)
    const answer_options = await AnswerOption.find({answer:answer.id},'label _id correct')
    const nextQuestion = await QuestionModal.findOne({quiz:session.quiz,question_order:currentQuestion.question_order+1})


    const recordModal = new RecordModal()

    recordModal.value = value
    recordModal.question = questionId
    recordModal.session = sessionId
    recordModal.correct = answer_value.correct

    await recordModal.save()

    const data = {
      session_id: sessionId,
      question:currentQuestion,
      correct: answer_value.correct,
      answer:{
        multiple:answer.multiple,
        options:answer_options
      },
      next:nextQuestion?  nextQuestion.id:null
    }

    return ctx.success({data})
  }


  static async getSessionResult (ctx) {
    const sessionId = ctx.params.sessionId

    const total_count = await RecordModal.count({session:sessionId})
    const correct_count = await RecordModal.count({session:sessionId,correct:true})

    const data = {
      score:correct_count,
      total:total_count,
    }

    return ctx.success({data})
  }

}

module.exports = SessionController