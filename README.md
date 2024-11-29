# kuantokusta-seller-api-node-sdk

Node.js SDK for the KuantoKusta Seller API. For more details, refer to the [official API documentation](https://seller.kuantokusta.pt/api/kms/#).

## Table of Contents

- [kuantokusta-seller-api-node-sdk](#kuantokusta-seller-api-node-sdk)
  - [Table of Contents](#table-of-contents)
  - [Installation](#installation)
  - [Usage](#usage)
    - [Authentication](#authentication)
  - [Contributing](#contributing)
  - [License](#license)

## Installation

Install the package using npm:

```sh
npm install @bsolus/kuantokusta-seller-api-node-sdk
```

## Usage

```javascript
import createSDK from '@bsolus/kuantokusta-seller-api-node-sdk';

const sdk = createSDK;

// Configure SDK
sdk.config({
  timeout: 60000, // 60 seconds
});

// Authenticate
sdk.auth('your-api-key');

// Example: Fetch all orders
sdk.orderController_findAll().then(response => {
  console.log(response);
}).catch(error => {
  console.error(error);
});
```

### Authentication

To authenticate, use the auth method with your API key:

```javascript
sdk.auth('your-api-key');
```

## Contributing

Contributions are welcome! Please open an issue or submit a pull request.

## License

This project is licensed under the MIT License. See the LICENSE file for details.
