const { validationResult } = require("express-validator");

const Project = require("../../../models/project.model");
const User = require("../../../models/user.model");

const getPhoneNumber = require("../../../helpers/get-phone-number");
const saveUploadedFile = require("../../../helpers/save-uploaded-file");

const {
  UNSUPPORTED_FILE_TYPE,
  PROJECT_AlREADY_EXIST,
} = require("../../../validations/messages");
const { PHONE_NUMBER_ALREADY_USED } = require("../validations/messages");

exports.createProject = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      const error = new Error("Validation failed.");
      error.status = 422;
      error.data = errors.array();
      throw error;
    }
    const { lastname } = req.body;
    const { firstname } = req.body;
    const { phoneNumber } = req.body;
    const file = req.file;

    console.log(file);

    if (!file) {
      const error = new Error(UNSUPPORTED_FILE_TYPE);
      error.status = 403;
      throw error;
    }

    const photo = await saveUploadedFile(file);
    
    const project = new Project({
      /**
       * TO DO
       */
    });
    await project.save();
    
    console.log(project);

    console.log("User successfully updated", User);
  } catch (err) {
    if (!err.status) {
      err.status = 500;
    }
    next(err);
  }
};
