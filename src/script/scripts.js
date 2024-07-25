const textArea = document.getElementById("txt-area");
const resultTextArea = document.getElementById("txt-result-area");
const whenEmpty = document.querySelector(".when-empty");
const resultText = document.querySelector(".result-text");

function btnEncrypt() {
    const encryptText = encrypt(textArea.value);
    resultTextArea.value = encryptText;
    textArea.value = "";
    whenEmpty.style.display = "none";
    resultText.style.display = "flex";
}

function encrypt(encryptMessage) {
    
    let encryptCode = [
        ['e','enter'],
        ['i','imes'],
        ['a','ai'],
        ['o','ober'],
        ['u','ufat'],
    ];

    encryptMessage = encryptMessage.toLowerCase();

    for (let l = 0; l < encryptCode.length; l++) {
        if (encryptMessage.includes(encryptCode[l][0])) {
            encryptMessage = encryptMessage.replaceAll(encryptCode[l][0], encryptCode[l][1]);
        }
    }

    return encryptMessage;
}

function btnDecrypt() {
    const decryptText = decrypt(textArea.value);
    resultTextArea.value = decryptText;
    textArea.value = "";
    whenEmpty.style.display = "none";
    resultText.style.display = "flex";
}

function decrypt(decryptMessage) {
    
    let decryptCode = [
        ['e','enter'],
        ['i','imes'],
        ['a','ai'],
        ['o','ober'],
        ['u','ufat']
    ];

    decryptMessage = decryptMessage.toLowerCase();

    for (let p = 0; p < decryptCode.length; p++) {
        if (decryptMessage.includes(decryptCode[p][0])) {
            decryptMessage = decryptMessage.replaceAll(decryptCode[p][1], decryptCode[p][0]);
        }
    }

    return decryptMessage;
}

function btnCopy() {
    navigator.clipboard.writeText(resultTextArea.value);
}

function btnClean() {
    whenEmpty.style.display = "flex";
    resultText.style.display = "none";
}
