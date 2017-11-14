/**
 * Created by Freeman on 2017/11/14.
 */
const Router = require ('koa-router');
const compose = require('koa-compose');
const QuizController = require('../controllers/quiz')
const SessionController = require('../controllers/session')
const QuestionController = require('../controllers/question')

const router = new Router();

router.post('/quizzes', QuizController.saveQuiz)

router.get('/quizzes/:id', QuizController.findQuizById)

router.post('/quizzes/:id/sessions', SessionController.saveSession)

router.post('/question', QuestionController.saveQuestion)

router.get('*', async (ctx, next) => {
  ctx.body = { status : 404 }
})

function routes() {
  return compose([
      router.routes(),
      router.allowedMethods()
    ])
}

module.exports =  routes