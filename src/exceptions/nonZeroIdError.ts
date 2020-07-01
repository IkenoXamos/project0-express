export default class NonZeroIdError extends Error {
  public message: string;

  constructor();
  constructor(message: string);
  constructor(message?: string) {
    super(message || 'Newly created models must have a zero id');
    this.message = message || 'Newly created models must have a zero id';
  }
}
