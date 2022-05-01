const bcrypt = require("bcrypt");
const sequelize = require("../../database/database");
const User = require("../user/userModel");
const createUser = async (body) => {
  console.log(body);
  //Recuperer les données
  const { username, email, image, password } = body;
  // hasher le plaintmotdepasse
  const passwordHashed = await bcrypt.hash(password, 10);
  //initialiser la transcato
  const t = await sequelize.transaction();
  //enegistrer le user
  await User.create(
    { username, image, email, password: passwordHashed },
    { t }
  );
  //Onvyer un message dans son mail
  try {
    //TODO: Service d'envoie de mail
    await t.commit();
  } catch (error) {
    await t.rollback();
    function EmailException() {
      this.message = "email_failure";
      this.status = 502;
    }
    throw new EmailException();
    //TODO:  throw error d'envoi de mail
  }
};

const getByEmail = async (email) => {
  return await User.findOne({
    attributes: ["username", "email", "bio"],
    where: {
      email: email,
    },
  });
};
const getById = async (id) => {
  return await User.findOne({
    attributes: ["username", "email", "bio"],
    where: {
      uid: id,
    },
  });
};
/**
 * @param String token
 */
const activeUserCount = async (token) => {
  const user = await User.findOne({
    where: {
      activationToken: token,
    },
  });
  if (!user) {
    throw new Error("invalid Token ");
  }
  user.active = true;
  user.activationToken = null;
  await user.save();
};

const getUsers = async () => {
  const usersWithCount = await User.findAndCountAll({
    where: {
      active: false,
    },
    attributes: ["username", "email", "bio"],
  });
  return usersWithCount;
};
const updateUser = async (id, body) => {
  const user = await User.findOne({ where: { id: id } });
  user.set({ ...body });
  await user.save();
  return { ...user };
};

const updateUserPicture = async (body, ids) => {
  const user = await User.findOne({ where: { id: id } });
  if (body.image) {
    if (user.image) {
      //TODO: delete old file
    }
    //TODO:  save un new picture
  }
  await user.save();
  return user;
};

const deleteUser = async (id) => {
  const user = await User.findOne({ where: { uid: id } });
  //TODO: delete files of user
  await user.destroy();
  return true;
};

module.exports = {
  createUser,
  getByEmail,
  getUsers,
  getById,
  deleteUser,
  updateUser,
  updateUserPicture,
};
