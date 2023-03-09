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
