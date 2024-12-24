# 📸 Instagram Downloader

![npm](https://img.shields.io/npm/v/ig-downloader)
![GitHub Release](https://img.shields.io/github/v/release/decryptable/ig-downloader)
![Build Status](https://img.shields.io/github/actions/workflow/status/decryptable/ig-downloader/publish.yml)
![Libraries.io dependency status for GitHub repo](https://img.shields.io/librariesio/github/decryptable/ig-downloader)

**`ig-downloader`** is a powerful Node.js library for downloading and processing Instagram media data such as reels, posts, and stories with ease. 🚀

![Instagram Downloader GIF](https://media.giphy.com/media/26BRuo6sLetdllPAQ/giphy.gif)

---

## ✨ Features

- ✅ Fetch detailed Instagram media data.
- ✅ Supports **posts**, **reels**, and more.
- ✅ Easy-to-use API with TypeScript support.
- ✅ Handles errors gracefully for invalid URLs.
- ✅ Lightweight and efficient.

---

## 📦 Installation

Install the library via `npm` or `yarn`:

```bash
# Using npm
npm install ig-downloader

# Using yarn
yarn add ig-downloader
```

---

## 🚀 Usage

### CommonJS Example

```javascript
const IgDownloader = require("ig-downloader").IgDownloader;

const urls = [
  "https://www.instagram.com/p/DD6_fC1TkcK/?utm_source=ig_web_copy_link",
];

const fetchInstagramData = async () => {
  for (const url of urls) {
    try {
      console.log(`Fetching data for: ${url}`);
      const data = await IgDownloader(url);
      console.log("Instagram Data:", data);
    } catch (error) {
      console.error(`Error fetching data for ${url}:`, error.message);
    }
  }
};

fetchInstagramData();
```

### ESModule Example

```javascript
import { IgDownloader } from "ig-downloader";

const urls = [
  "https://www.instagram.com/p/DD6_fC1TkcK/?utm_source=ig_web_copy_link",
];

const fetchInstagramData = async () => {
  for (const url of urls) {
    try {
      console.log(`Fetching data for: ${url}`);
      const data = await IgDownloader(url);
      console.log("Instagram Data:", data);
    } catch (error) {
      console.error(`Error fetching data for ${url}:`, error.message);
    }
  }
};

fetchInstagramData();
```

---

## 🌟 Features in Detail

| Feature                       | Description                                           |
| ----------------------------- | ----------------------------------------------------- |
| **Support for Posts & Reels** | Works seamlessly with Instagram posts and reels.      |
| **Error Handling**            | Handles invalid URLs and other API errors gracefully. |
| **TypeScript Support**        | Fully typed API for enhanced development experience.  |

---

## 🛠️ Development

### Running Tests

Run all unit tests with Jest:

```bash
yarn test
```

### Generating Documentation

Generate Typedoc documentation:

```bash
yarn docs
```

### Running Examples

Run example usage scripts:

```bash
yarn example
```

## 🔗 Contributing

Contributions are welcome! If you'd like to contribute, feel free to open an issue or submit a pull request. Make sure to follow the [contribution guidelines](CONTRIBUTING.md). ❤️

---

## 📜 License

This project is licensed under the [MIT License](./LICENSE). See the license file for details.

---

## 📞 Contact

For questions or support, reach out via:

- **GitHub Issues**: [Submit an Issue](https://github.com/decryptable/ig-downloader/issues)
- **Email**: [hello@decryptable.dev](mailto:hello@decryptable.dev)

---

Feel free to adapt this template to your specific needs. If you want, you can replace the GIF link with a relevant GIF or badge for your project! 🚀
