import { CryptAPI } from "../dist/index";

const callbackUrl =
  "https://webhook.site/fc6e4031-66e7-45ef-9b9c-b6101958478dsa1";

test("Test requesting service info", async () => {
  const cryptApi = await CryptAPI.fetchServiceInfo();
  expect(cryptApi).toBeTruthy();
});

test("Test requesting coin pricing", async () => {
  const cryptApi = await CryptAPI.fetchServiceInfo(true);

  expect(cryptApi).toBeTruthy();
});

test("Test requesting supported cryptocurrencies", async () => {
  const r = await CryptAPI.fetchSupportedCoins();

  expect(r).toBeTruthy();
});

test("Test generating address", async () => {
  const r = new CryptAPI(
    "polygon_usdt",
    "0xA6B78B56ee062185E405a1DDDD18cE8fcBC4395d",
    callbackUrl,
    {
      order_id: 12345,
    },
    {
      multi_chain: 1,
      convert: 1,
    }
  );
  const address = await r.createAddress();
  expect(typeof address).toBe("string");
});

test("Test getting logs", async () => {
  const logs = await CryptAPI.fetchLogs("polygon_matic", callbackUrl);
  expect(logs !== null).toBe(true);
});

test("Test fetching QRCode", async () => {
  const qrCode = await CryptAPI.fetchQRCode(
    "polygon_matic",
    "0xA6B78B56ee062185E405a1DDDD18cE8fcBC4395d",
    1,
    300
  );

  expect(qrCode !== null).toBe(true);
});

test("Test fetching estimated fees", async () => {
  const estimate = await CryptAPI.fetchEstimatedFees(
    "polygon_matic",
    1,
    "default"
  );
  expect(estimate !== null).toBe(true);
});

test("Test fetching FIAT conversion", async () => {
  const estimate = await CryptAPI.fetchConversion("polygon_matic", 1, "USD");

  expect(estimate !== null).toBe(true);
});
