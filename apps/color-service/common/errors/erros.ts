import { UserInputError, ApolloError } from 'apollo-server-express';

enum ErrorMessage {
  EntityNotFoundError = 'entry not found',
  FieldNotFoundErrorMessage = 'field not defined on your entity',
  GqlOperationNotFoundErrorMessage = 'operation not defined',
  ObjectTypeError = 'expected variable of type object but found object of type',
}

const buildOperationErrorMessage = (
  fieldName: string,
  errorMessage: ErrorMessage,
): string => {
  return `${fieldName} ${errorMessage}`;
};

const buildTypeErrorMessage = (
  objectType: string,
  errorMessage: ErrorMessage,
) => {
  return `${errorMessage} ${objectType}`;
};

export class InvalidObjectTypeException extends ApolloError {
  constructor(objectType: string) {
    super(buildTypeErrorMessage(objectType, ErrorMessage.ObjectTypeError));
  }
}

export class EntryNotFoundException extends ApolloError {
  constructor() {
    super(ErrorMessage.EntityNotFoundError);
  }
}

export class FieldNotDefinedError extends UserInputError {
  constructor(fieldName: string) {
    super(
      buildOperationErrorMessage(
        fieldName,
        ErrorMessage.FieldNotFoundErrorMessage,
      ),
    );
  }
}

export class GqlOperationNotDefinedError extends UserInputError {
  constructor(operationName: string) {
    super(
      buildOperationErrorMessage(
        operationName,
        ErrorMessage.GqlOperationNotFoundErrorMessage,
      ),
    );
  }
}
