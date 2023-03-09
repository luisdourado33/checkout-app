/* eslint-disable @typescript-eslint/explicit-function-return-type */
import type * as yup from "yup";

import { type FormName, type FormValues, testSchema } from "./testSchemas";

type ErrorList = Array<{ item?: string; message: string }>;

export interface ErrorInterface {
  formTested: FormName;
  errors: ErrorList;
}

const formatErrorList = (err: yup.ValidationError[]) => {
  const errorList: ErrorList = [];

  err.forEach((item) => {
    const error = {
      item: item.path,
      message: item.errors[0],
    };

    errorList.push(error);
  });

  return errorList;
};

export const validateForm = async (
  value: Partial<FormValues>,
  formName: FormName
): Promise<ErrorInterface | undefined> => {
  const validationResult = await testSchema(formName, value);

  if (validationResult === true) return;

  const errorsList = formatErrorList(validationResult);
  return { formTested: formName, errors: errorsList };
};
