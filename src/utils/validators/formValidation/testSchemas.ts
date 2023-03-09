/* eslint-disable @typescript-eslint/consistent-type-imports */
import { type ICheckoutForm } from "@types";
import * as yup from "yup";

import { register } from "./formValidationSchema";

const listSchemas: any = {
  register,
};

export type FormName = keyof typeof listSchemas;

export type FormValues = ICheckoutForm;

export const testSchema = async (
  schema: FormName,
  value: Partial<FormValues>
): Promise<true | yup.ValidationError[]> => {
  try {
    const formSchema = listSchemas[schema];
    await formSchema.validate(value, {
      abortEarly: true,
    });

    return true;
  } catch (error: any) {
    return error.inner;
  }
};
