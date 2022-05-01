class ValidationException extends Error {
  constructor(statusCode = null, errors) {
    super();
    this.status = statusCode || 400;
    this.errors = errors;
    this.message = "validation_failure";
  }
}

module.exports = ValidationException;
