/* eslint-disable @typescript-eslint/strict-boolean-expressions */

import { type IOffer, type ISubscription } from "@types";

import authorizedRequest, { parseResponse } from "../../fetch";

export class ApiClientStub {
  private static instance: ApiClientStub;
  baseUrl: string;

  private constructor() {
    this.baseUrl = "";
  }

  public static getInstance(): ApiClientStub {
    if (!ApiClientStub.instance) {
      ApiClientStub.instance = new ApiClientStub();
    }

    return ApiClientStub.instance;
  }

  public async getOffers(): Promise<IOffer[]> {
    return await authorizedRequest(this.baseUrl + "/offer", {
      method: "GET",
    }).then(parseResponse);
  }

  public async getSubscriptions(): Promise<ISubscription[] | ISubscription> {
    return await authorizedRequest(this.baseUrl + "/subscription", {
      method: "GET",
    }).then(parseResponse);
  }

  public async makeSubscription(
    subscription: ISubscription
  ): Promise<ISubscription[]> {
    return await authorizedRequest(this.baseUrl + "/subscription", {
      method: "POST",
      body: JSON.stringify(subscription),
    }).then(parseResponse);
  }
}
