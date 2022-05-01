function UserNotFoundException() {
  this.status = 404;
  this.message = "Not found user";
}
module.exports = UserNotFoundException;
