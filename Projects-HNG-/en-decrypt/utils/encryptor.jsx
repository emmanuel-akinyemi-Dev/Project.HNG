import { Buffer } from "buffer";

/**
 * Encrypts a given plaintext string using a secret key.
 * @param {string} text - The plaintext string to encrypt.
 * @param {string} secretKey - The secret key for encryption.
 * @returns {string} - The encrypted Base64 string.
 */
export const encryptText = (text, secretKey) => {
  if (!text || !secretKey) {
    throw new Error("Both text and secretKey are required for encryption.");
  }

  let encryptedChars = [];

  for (let i = 0; i < text.length; i++) {
    let keyChar = secretKey[i % secretKey.length]; // using a Cyclic key 
    let encryptedChar = String.fromCharCode(text.charCodeAt(i) + keyChar.charCodeAt(0));
    encryptedChars.push(encryptedChar);
  }

  let encryptedString = encryptedChars.join("");
  return Buffer.from(encryptedString).toString("base64"); // lets Encode in Base64
}; 

/**
 * @param {string} encryptedText - The encrypted Base64 string.
 * @param {string} secretKey - The secret key for decryption.
 * @returns {string} - The original plaintext string.
 */
export const decryptText = (encryptedText, secretKey) => {
  if (!encryptedText || !secretKey) {
    throw new Error("Both encryptedText and secretKey are required for decryption.");
  }

  let decodedString = Buffer.from(encryptedText, "base64").toString("utf-8");
  let decryptedChars = [];

  
  for (let i = 0; i < decodedString.length; i++) {
    let keyChar = secretKey[i % secretKey.length];
    let decryptedChar = String.fromCharCode(decodedString.charCodeAt(i) - keyChar.charCodeAt(0));
    decryptedChars.push(decryptedChar);
  }

  return decryptedChars.join("");
};