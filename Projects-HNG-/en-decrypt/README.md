# React Native Encryption & Decryption

This project demonstrates a **custom encryption and decryption** system in a **React Native** app using a **custom algorithm** and **Base64 encoding**.

## Features

✅ Encrypts and decrypts text using a secret key  
✅ Custom encryption logic (ASCII shift + Base64)  
✅ Modular & reusable utility functions  
✅ Simple React Native UI for testing

---

## Project Structure

/EncryptionApp │── /utils │ ├── encryption.js # Encryption & decryption logic │── App.js # React Native UI │── README.md # Documentation

---

## 🚀 Getting Started

### ** 1. Install Dependencies**

### ** 2. Run the App**

```bash
npm install buffer
npx react-native run-android  # For Android
npx react-native run-ios      # For iOS
---
```

### ** 2. Run the App**

Encryption Logic
The text is shifted using the ASCII value of the secret key.
The encrypted result is Base64 encoded for safe storage.
Decryption Logic
The text is Base64 decoded.
The ASCII shift is reversed using the secret key.

### **Usage**

**Encryption**

```bash
import { encryptText } from "./utils/encryption";
const secretKey = "MySecretKey";
const encrypted = encryptText("Hello, World!", secretKey);
console.log(encrypted);  // Output: Encrypted Base64 string
---
```

**Decryption**
```bash
import { decryptText } from "./utils/encryption";

const decrypted = decryptText(encrypted, secretKey);
console.log(decrypted);  // Output: Hello, World!
```
### ***Contributing**
Feel free to fork this repo and submit pull requests!
```sh

```
