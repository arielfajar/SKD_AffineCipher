// Fungsi untuk mengenkripsi teks
function encrypt(text, keyA, keyB) {
  let encryptedText = '';
  for (let i = 0; i < text.length; i++) {
    const char = text[i];
    if (char >= 'A' && char <= 'Z') {
      const charCode = (((keyA * (char.charCodeAt(0) - 'A'.charCodeAt(0)) + keyB) % 26) + 'A'.charCodeAt(0));
      encryptedText += String.fromCharCode(charCode);
    } else if (char >= 'a' && char <= 'z') {
      const charCode = (((keyA * (char.charCodeAt(0) - 'a'.charCodeAt(0)) + keyB) % 26) + 'a'.charCodeAt(0));
      encryptedText += String.fromCharCode(charCode);
    } else {
      encryptedText += char;
    }
  }
  return encryptedText;
}

// Fungsi untuk mendekripsi teks
function decrypt(text, keyA, keyB) {
  // Menghitung invers kunci A
  let aInv = 0;
  for (let i = 0; i < 26; i++) {
    if ((keyA * i) % 26 === 1) {
      aInv = i;
      break;
    }
  }

  let decryptedText = '';
  for (let i = 0; i < text.length; i++) {
    const char = text[i];
    if (char >= 'A' && char <= 'Z') {
      const charCode = (((aInv * (char.charCodeAt(0) - 'A'.charCodeAt(0) - keyB)) % 26 + 26) % 26 + 'A'.charCodeAt(0));
      decryptedText += String.fromCharCode(charCode);
    } else if (char >= 'a' && char <= 'z') {
      const charCode = (((aInv * (char.charCodeAt(0) - 'a'.charCodeAt(0) - keyB)) % 26 + 26) % 26 + 'a'.charCodeAt(0));
      decryptedText += String.fromCharCode(charCode);
    } else {
      decryptedText += char;
    }
  }
  return decryptedText;
}

// Contoh penggunaan
const plaintext = "Ariel Fajar Herdanto";
const keyA = 7;
const keyB = 15;

const encryptedText = encrypt(plaintext, keyA, keyB);
const decryptedText = decrypt(encryptedText, keyA, keyB);

console.log("Plaintext: " + plaintext);
console.log("kunci A: " + keyA);
console.log("kunci B: " + keyB);
console.log("Encrypted Text: " + encryptedText);
console.log("Decrypted Text: " + decryptedText);
