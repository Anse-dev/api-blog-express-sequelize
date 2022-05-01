const { Router } = require("express");
const { catchAsyncError } = require("../middlewares/catchAsyncError");
const {
  createUser,
  getUsers,
  getById,
  deleteUser,
  getByEmail,
} = require("./UserService");
const { check, validationResult } = require("express-validator");
const ValidationException = require("../error/ValidationException");
const UserExistException = require("./UserExistException");
const UserNotFoundException = require("./UserNotFoundException");
const route = Router();
//Add user with validatorHandler
route.post(
  "/",
  check("username")
    .notEmpty()
    .withMessage("username is empty")
    .bail()
    .isLength({ min: 4, max: 32 })
    .withMessage("username invalid"),
  check("password")
    .notEmpty()
    .withMessage("password not be empty")
    .bail()
    .isLength({ min: 6 })
    .withMessage("password invalid"),
  check("email")
    .notEmpty()
    .withMessage("Email not be empty")
    .bail()
    .isEmail()
    .withMessage("email is invalid"),
  catchAsyncError(async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return next(new ValidationException(null, errors.array()));
    }

    const user = await getByEmail(req.body.email);
    if (user) {
      return next(new UserExistException(501, "email not be utilise"));
    }

    await createUser(req.body);
    res.status(201).json({ success: true });
  })
);

//GET USER
route.get(
  "/:id",
  catchAsyncError(async (req, res, next) => {
    const { id } = req.params;
    const user = await getById(id);
    if (!user) {
      return next(new UserNotFoundException());
    }
    res.status(200).json({ user });
  })
);
//DELETE USER
route.delete(
  "/:id",
  catchAsyncError(async (req, res, next) => {
    const { id } = req.params;

    const user = await getById(id);
    if (!user) {
      return next(new UserNotFoundException());
    }
    const isSucces = await deleteUser(id);
    res.status(500).json({ success: isSucces });
  })
);

//Get ALL USERS
route.get(
  "/",
  catchAsyncError(async (req, res) => {
    const users = await getUsers();
    res.status(200).json({ users });
  })
);
module.exports = route;
