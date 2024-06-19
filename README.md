# [<img src="https://i.imgur.com/IfMAa7E.png" height="50"/>](image.png) | NodeJS Implementation of CryptAPI's Payment Gateway

This project provides a Node.js implementation of CryptAPI's payment gateway, ensuring type safety with TypeScript. The implementation includes features to handle cryptocurrency payments, fetch supported coins, generate payment addresses, create QR codes for payments, check payment logs, and convert currency values.

### Features

- **Type Safety**: All functionalities are implemented with TypeScript, ensuring robust type safety.
- **Supported Coins**: Fetch a list of supported cryptocurrencies.
- **Payment Address Generation**: Generate new addresses for receiving payments.
- **QR Code Generation**: Generate QR codes for cryptocurrency payments.
- **Payment Logs**: Check logs for received payments.
- **Currency Conversion**: Convert values between different cryptocurrencies and fiat currencies.
- **Estimated Fees**: Fetch estimated transaction fees for supported cryptocurrencies.

## Installation 📦

You can easily install it:

```bash
npm install @samocodes/cryptapi
yarn add @samocodes/cryptapi
pnpm add @samocodes/cryptapi
bun add @samocodes/cryptapi
```

## Usage

Here's an example of how to use this package:

```ts
import { CryptAPI } from "@samocodes/cryptapi";

const cryptAPI = new CryptAPI(
  "btc", // Cryptocurrency
  "your-bitcoin-address", // Your own crypto address
  "https://your-webhook-url.com/callback", // Webhook URL
  { orderId: 12345 }, // Additional parameters
  { customParam1: "value1" }, // Custom CryptAPI parameters
);

async function main() {
  try {
    const address = await cryptAPI.createAddress();
    console.log("Payment address:", address);

    const logs = await cryptAPI.checkLogs();
    console.log("Payment logs:", logs);

    // static methods
    const qrCode = await CryptAPI.fetchQRCode(
      "btc",
      "crypto-address",
      100,
      256,
    );
    console.log("QR Code:", qrCode);

    const serviceInfo = await CryptAPI.fetchServiceInfo(true);
    console.log("Service Information:", serviceInfo);

    const estimatedFees = await CryptAPI.fetchEstimatedFees("btc", 2, "fast");
    console.log("Estimated Fees:", estimatedFees);

    const conversion = await CryptAPI.fetchConversion("btc", 1000, "usd");
    console.log("Conversion Information:", conversion);
  } catch (error) {
    console.error("Error:", error);
  }
}

main();
```

### API Reference

#### `CryptAPI`

##### Constructor

```typescript
new CryptAPI(
  coin: string,
  address: string,
  callbackUrl: string,
  params?: Record<string, string | number>,
  caParams?: CryptAPIParams
);
```

- `coin`: The cryptocurrency you wish to use (e.g., 'btc', 'eth').
- `address`: Your own cryptocurrency address to receive payments.
- `callbackUrl`: The webhook URL to receive payment notifications.
- `params`: Additional parameters to identify the payment.
- `caParams`: Custom parameters that will be passed to CryptAPI.

##### Methods

###### `createAddress()`

Creates a new address to receive payments.

```typescript
async createAddress(): Promise<string>;
```

###### `fetchQRCode(coin: string, address: string, value: number | null, size: number = 512)`

Fetches a QR code for the specified value and size.

```typescript
async fetchQRCode(value: number | null, size?: number): Promise<GenerateQR>;
```

###### `checkLogs()`

Checks the payment logs.

```typescript
async checkLogs(): Promise<PaymentLogs>;
```

###### `fetchServiceInfo(prices?: boolean)`

Fetches service information.

```typescript
static async fetchServiceInfo(prices?: boolean): Promise<ServiceInformation<typeof prices>>;
```

###### `fetchEstimatedFees(coin: string, addresses?: number, priority?: Priority)`

Fetches estimated fees for transactions.

```typescript
static async fetchEstimatedFees(coin: string, addresses?: number, priority?: Priority): Promise<EstimatedFees>;
```

###### `fetchConversion(coin: string, value: number, from: string)`

Fetches conversion information for a given value.

```typescript
static async fetchConversion(coin: string, value: number, from: string): Promise<Conversion>;
```

### Contributing

Contributions are welcome! Please open an issue or submit a pull request on GitHub.

### License

This project is licensed under the MIT License.
