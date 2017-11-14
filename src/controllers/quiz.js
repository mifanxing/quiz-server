/**
 * Created by Freeman on 2017/11/14.
 */
const QuizModel = require('../models/quizzes')
class QuizController {

  // 用户注册
  static async findQuizById (ctx) {
    const id = ctx.params.id

    const quiz = await QuizModel.findById(id)

    return ctx.success({data: quiz})
  }

  // 用户登录
  // 用户注册
  static async saveQuiz (ctx) {
    const quizDa = new QuizModel();
    quizDa.title = '测试标题';
    quizDa.description = '测试描述';
    quizDa.image = 'https://pic4.zhimg.com/v2-64034bf497f3b792fb661d0aa268930b_b.jpg';
    const quiz = await quizDa.save()
    return ctx.success({data: quiz})
  }

}

module.exports = QuizController