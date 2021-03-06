const { BaseController } = require("@the-medicsoft/webapi-framework");

const { EmailModel } = require("../models");

const email = new EmailModel();

class EmailController extends BaseController {
  constructor() {
    super();
  }

  async sendEmail(req, res) {
    try {
      const response = await email.sendEmails(req.query);
      super.sendResponse({ req, res, response });
    } catch (err) {
      super.sendErrorResponse({ req, res, errResponse: err });
    }
  }
}

module.exports = { EmailController };
