/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/no-throw-literal */
/* eslint-disable @typescript-eslint/consistent-type-definitions */
/* eslint-disable @typescript-eslint/return-await */
export default async function authorizedRequest(
  url: string,
  options: RequestInit
): Promise<Response> {
  const patchedOptions: any = {
    ...options,
    headers: {
      "Content-Type": options.body !== null ? "application/json" : "text/html",
      ...(options.headers ?? {}),
    },
  };

  return fetch(url, patchedOptions);
}

export type ErrorMessage = {
  error: string;
  message: string;
  statusCode: string;
};

export function isError<T>(
  response: T | ErrorMessage
): response is ErrorMessage {
  return typeof (response as ErrorMessage).error !== "undefined";
}

export const parseResponse = async (response: Response) => {
  if (response.status === 204) {
    return true;
  }

  const body = await response.json();

  if (response.status === 401) {
    return false;
  }

  if (isError(body)) {
    throw body;
  }

  return body;
};
