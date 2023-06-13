export type ValueObjectExceptionType = {
  field: string;
  message: string;
};

export class DomainException extends Error {}
