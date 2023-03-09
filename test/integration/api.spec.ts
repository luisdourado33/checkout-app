import "isomorphic-fetch";

import { IOffer, ISubscription } from "../../src/@types";
import { ApiClientStub } from "../../src/services/singleton/api-client/api-client-stub";

describe("Integration test: check all API endpoints", () => {
  let apiClientSingleton: ApiClientStub;

  beforeAll(() => {
    apiClientSingleton = ApiClientStub.getInstance();
    apiClientSingleton.baseUrl =
      "https://private-0ced4-pebmeddesafiofrontend.apiary-mock.com";
  });

  it("should return an IOffer array of non-empty items", async () => {
    const response = await apiClientSingleton.getOffers();
    expect((await response).length).toBeGreaterThan(0);
  });

  it("should return a non-empty object and this object is an ISubscription", async () => {
    const response = await apiClientSingleton.getSubscriptions();
    expect(response).not.toBeFalsy();
    expect(response).not.toBeUndefined();
  });
});
