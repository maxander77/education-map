class ErrorRepository {
  constructor() {
    this.errors = new Map();
  }

  addError(code, description) {
    this.errors.set(code, description);
  }

  translate(code) {
    const erorrDescription = this.errors.get(code);
    return erorrDescription !== undefined ? erorrDescription : 'Unknown error';
  }
}

export default ErrorRepository;