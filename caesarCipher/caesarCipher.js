// --------------------------------------------------
// Test Description
// In cryptography, a Caesar cipher, also known as Caesar's cipher, the shift cipher,
// Caesar's code or Caesar shift, is one of the simplest and most widely known
// encryption techniques. It is a type of substitution cipher in which each letter
// in the plaintext is replaced by a letter some fixed number of positions down the alphabet.
// --------------------------------------------------

function caesarCipher(str, key) {
    let strArray = str.split('');
    let result = '';

    for (let i = 0; i < strArray.length; i++) {
        const curChar = str[i];
        const ascii = curChar.charCodeAt(0);

        if (ascii >= 65 && ascii <= 90) {
            result = result + String.fromCharCode((ascii - 65 + key) % 26 + 65);
        } else if (ascii >= 97 && ascii <= 122) {
            result = result + String.fromCharCode((ascii - 97 + key) % 26 + 97);
        } else {
            result = result + curChar;
        }
    }

    return result;
}

module.exports = caesarCipher;