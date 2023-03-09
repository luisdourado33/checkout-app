import type { IOffer, ISubscription } from "@types";
import authorizedRequest, { parseResponse } from "services/fetch";

/* eslint-disable @typescript-eslint/strict-boolean-expressions */
export class ApiClient {
  private static instance: ApiClient;
  baseUrl: string;

  private constructor() {
    this.baseUrl = import.meta.env.VITE_API_BASE_URL;
  }

  public static getInstance(): ApiClient {
    if (!ApiClient.instance) {
      ApiClient.instance = new ApiClient();
    }

    return ApiClient.instance;
  }

  public async getOffers(): Promise<IOffer[]> {
    return await authorizedRequest(this.baseUrl + "/offer", {
      method: "GET",
    }).then(parseResponse);
  }

  public async getSubscriptions(): Promise<ISubscription[]> {
    return await authorizedRequest(this.baseUrl + "/subscription", {
      method: "GET",
    }).then(parseResponse);
  }
}
