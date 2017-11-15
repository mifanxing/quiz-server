/**
 * Created by Freeman on 2017/11/14.
 */
const QuestionModel = require('../models/questions')
const AnswerModel = require('../models/answers')
const AnswerOptionModel = require('../models/answers/answer_options')
class QuestionController {

  static async saveQuestion (ctx) {

    const q = new QuestionModel()

    q.title = '测试问题'
    q.question_order = 0
    q.quiz = '5a0a9ae130e9251c0cfb1ecf'

    const question = await q.save()

    const answer = new AnswerModel()

    answer.multiple = false
    answer.question = question.id

    const answerSave =  await answer.save()

    const answerOption1 = new AnswerOptionModel();
    answerOption1.label = '选项一'
    answerOption1.correct = false
    answerOption1.answer = answerSave.id
    await answerOption1.save()
    const answerOption2 = new AnswerOptionModel();
    answerOption2.label = '选项2'
    answerOption2.correct = false
    answerOption2.answer = answerSave.id
    await answerOption2.save()

    return ctx.success({data: q})
  }

}

module.exports = QuestionController