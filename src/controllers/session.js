/**
 * Created by Freeman on 2017/11/14.
 */
const SessionModel = require('../models/sessions')
class SessionController {

  static async saveSession (ctx) {
    const session = new SessionModel();
    session.quiz = ctx.params.id
    const data = await session.save()
    return ctx.success({data})
  }

}

module.exports = SessionController