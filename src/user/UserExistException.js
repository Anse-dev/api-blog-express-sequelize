function UserExistException(status, message) {
  this.status = status;
  this.message = message;
}
module.exports = UserExistException;
