import ErrorRepository from "../app";

test('should add translate an error', () => {
  let errorRepo = new ErrorRepository();

  errorRepo.addError(404, 'Not Found');

  expect(errorRepo.translate(404)).toBe('Not Found');
});

test('should return "Unknown error" ', () => {
  let errorRepo = new ErrorRepository();

  expect(errorRepo.translate(999)).toBe('Unknown error');
});