const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
  constructor(mode = true) {
    this.mode = mode;
    //this.reverse = false;
  }
  encrypt(message, key) {
    if (!message || !key) {
      throw new Error("Incorrect arguments!");
    }
    let encodedMessage = "";
    let abc = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    message = message.toUpperCase();

    key = key.toUpperCase(); //
    if (key.length < message.length) {
      let count = 0;
      for (let i = 0; i < message.length; i++) {
        if (abc.includes(message[i])) {
          count++;
        }
      }
      key = key.repeat(count);
      let keyArr = key.split("");
      keyArr.length = count;
      key = keyArr.join("");
    }
    console.log(key);
    for (let i = 0, j = 0; i < message.length; i++) {
      if (abc.includes(message[i])) {
        let currentInd = "";
        currentInd =
          (message[i].codePointAt() - 65 + (key[j].codePointAt() - 65)) % 26;
        encodedMessage += abc[currentInd];
        j++;
      } else {
        encodedMessage += message[i];
      }
    }

    return this.mode
      ? encodedMessage
      : encodedMessage.split("").reverse().join("");
  }
  decrypt(message, key) {
    if (!message || !key) {
      throw new Error("Incorrect arguments!");
    }
    let decodedMessage = "";

    let abc = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    message = message.toUpperCase();

    key = key.toUpperCase();
    if (key.length < message.length) {
      let count = 0;
      for (let i = 0; i < message.length; i++) {
        if (abc.includes(message[i])) {
          count++;
        }
      }
      key = key.repeat(count);
      let keyArr = key.split("");
      keyArr.length = count;
      key = keyArr.join("");
    }

    for (let i = 0, j = 0; i < message.length; i++) {
      if (abc.includes(message[i])) {
        let currentInd = "";
        currentInd =
          (message[i].codePointAt() - 65 - (key[j].codePointAt() - 65)) % 26;
        if (currentInd >= 0) {
          decodedMessage += abc[currentInd];
        } else {
          currentInd =
            (message[i].codePointAt() - 65 + 26 - (key[j].codePointAt() - 65)) %
            26;
          decodedMessage += abc[currentInd];
        }

        j++;
      } else {
        decodedMessage += message[i];
      }
    }

    return this.mode
      ? decodedMessage
      : decodedMessage.split("").reverse().join("");
  }
}

module.exports = {
  VigenereCipheringMachine,
};
