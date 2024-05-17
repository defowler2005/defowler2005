/**
 * Password generator.
 * @param {Number} length - The number of characters included in the password.
 * @returns {String} - Returns the password result.
 */

function generatePassword(length = 8) {
    const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numericChars = '0123456789';
    const specialChars = '!@#]$?>{%^&*("_+}[|:;<,./)~¶';

    const allChars = lowercaseChars + uppercaseChars + numericChars + specialChars;

    let password = '';

    password += specialChars[Math.floor(Math.random() * specialChars.length)];
    password += lowercaseChars[Math.floor(Math.random() * lowercaseChars.length)];
    password += specialChars[Math.floor(Math.random() * specialChars.length)];
    password += uppercaseChars[Math.floor(Math.random() * uppercaseChars.length)];
    password += specialChars[Math.floor(Math.random() * specialChars.length)];
    password += specialChars[Math.floor(Math.random() * specialChars.length)];
    password += numericChars[Math.floor(Math.random() * numericChars.length)];

    for (let i = 0; i < length - 4; i++) {
        password += allChars[Math.floor(Math.random() * allChars.length)];
    }; password = password.split('').sort(() => Math.random() - 0.5).join('').slice(0, length);
    return password;
}; console.log(generatePassword(12));