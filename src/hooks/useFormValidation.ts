/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import { useCallback, useState } from "react";
import {
  type ErrorInterface,
  validateForm,
} from "utils/validators/formValidation";
import { type FormName } from "utils/validators/formValidation/testSchemas";

export type DefaultForm = Record<string, unknown>;

export const useFormValidation = <Form = DefaultForm>(
  formName: FormName
): any => {
  const [errorItems, setErrorItems] = useState<ErrorInterface>();

  const validateErrors = async (formParams: any): Promise<boolean> => {
    const errors = await validateForm(formParams, formName);

    if (errors) {
      setErrorItems(errors);
      return false;
    }

    return true;
  };

  const handleErrorMessage = useCallback(
    (item: keyof Form, helperText?: string) => {
      if (errorItems) {
        const error = errorItems.errors.find((err) => err.item === item);
        if (error) return { error: true, helperText: error?.message };
      }

      return { helperText };
    },
    [errorItems]
  );

  const clearErrors = (): void => {
    setErrorItems(undefined);
  };

  return { handleErrorMessage, clearErrors, validateErrors, errorItems };
};
