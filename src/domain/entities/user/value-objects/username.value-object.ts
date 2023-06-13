import { ValueObjectBase } from '../../bases/value-object.base';

const FIELD_NAME = 'username';
const MIN_LENGTH = 4;
const MAX_LENGTH = 100;

export class UsernameValueObject extends ValueObjectBase<string> {
  protected validate(): void {
    if (this.value.length < MIN_LENGTH || this.value.length > MAX_LENGTH)
      this.error = {
        field: FIELD_NAME,
        message: `${FIELD_NAME} is min ${MIN_LENGTH} and max ${MAX_LENGTH} characters`,
      };
    else if (typeof this.value !== 'string')
      this.error = {
        field: FIELD_NAME,
        message: `${FIELD_NAME} is not valid string`,
      };
  }
}
