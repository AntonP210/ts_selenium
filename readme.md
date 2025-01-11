# TypeScript-Selenium Automation Framework

This project is a test automation framework built with TypeScript and Selenium WebDriver, using Jest as the testing framework.

## Prerequisites

- Node.js (v14 or higher)
- Chrome browser installed
- TypeScript knowledge
- Basic understanding of Selenium WebDriver

## Project Structure

```
TS_SELENIUM/
├── src/
│   ├── tests/
│   │   └── ui/
│   │       ├── ui.test.ts
│   │       ├── driverHelper.ts
│   │       └── pageHelper.ts
├── .gitattributes
├── jest.config.js
├── package-lock.json
├── package.json
└── tsconfig.json
```

## Setup

1. Clone the repository:
```bash
git clone <repository-url>
cd TS_SELENIUM
```

2. Install dependencies:
```bash
npm install
```

## Available Helper Functions

### Driver Helper
Located in `driverHelper.ts`, provides browser initialization:
- `getDriverInstance(maximized: boolean)`: Creates and returns a WebDriver instance with optional window maximization

### Page Helper
Located in `pageHelper.ts`, provides common Selenium operations:
- `getTextsFromElementsBySelector`: Get text from multiple elements
- `clickXpath`: Click element by XPath
- `sendTextToXpath`: Send text to element by XPath
- `clickSelector`: Click element by CSS selector
- `waitForXpath`: Wait for element by XPath
- `waitForSelector`: Wait for element by CSS selector
- `isXpathExists`: Check if element exists by XPath
- `countElementsByXpath`: Count elements by XPath
- `isSelectorExists`: Check if element exists by CSS selector

## Running Tests

Run all tests:
```bash
npm test
```

Run UI tests specifically:
```bash
npm run test:ui
```

## Configuration Files

### tsconfig.json
TypeScript configuration file that specifies compiler options and project settings.

### jest.config.js
Jest configuration file that sets up the testing environment and options.

### package.json
Contains project dependencies and script definitions:
```json
{
  "scripts": {
    "test": "jest",
    "test:ui": "jest tests/ui --detectOpenHandles"
  }
}
```

## Writing Tests

Example test structure:
```typescript
import { WebDriver } from 'selenium-webdriver';
import { getDriverInstance } from '../driverHelper';
import { clickXpath, sendTextToXpath } from '../pageHelper';

describe('Test Suite', () => {
    let driver: WebDriver;

    beforeAll(async () => {
        driver = await getDriverInstance();
    });

    afterAll(async () => {
        await driver.quit();
    });

    test('Test Case', async () => {
        // Your test code here
    });
});
```

## Best Practices

1. Always quit the WebDriver instance after tests
2. Use explicit waits instead of implicit waits when possible
3. Keep selectors in separate files/constants
4. Handle timeouts appropriately
5. Use try-catch blocks for better error handling
6. Add meaningful test descriptions and error messages

## Troubleshooting

Common issues and solutions:

1. ChromeDriver version mismatch:
   - Install chromedriver: `npm install chromedriver`
   - Add import in driverHelper.ts: `import 'chromedriver';`

2. Element not found:
   - Check if element is in viewport
   - Increase wait timeout
   - Verify selector/XPath
   - Check if element is in an iframe

## Contributing

1. Create a new branch for your feature
2. Write tests for new features
3. Update documentation as needed
4. Submit a pull request

## License

ISC