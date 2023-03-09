import { ApiClientStub } from "../../../src/services/singleton/api-client/api-client-stub";

describe("Integration test: check ApiClient singleton", () => {
  it("singleton is instantiated", () => {
    const firstInstance = ApiClientStub.getInstance();
    const secondInstance = ApiClientStub.getInstance();
    expect(firstInstance).toBe(secondInstance);
  });
});
