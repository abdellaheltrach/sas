const PromptSync = require("prompt-sync")();

let arr = ["youcode", "hello World", "JavaScript"];



function inversArrElements(arr) {
    let arrInverser = [];

    for (let i = 0; i < arr.length; i++) {
        let inverStr = "";
        for (let j = arr[i].length - 1; j > 0; j--) {
            inverStr = inverStr + arr[i][j];

        }
        arrInverser.push(inverStr);
    }
    return arrInverser;
}
console.log(arr)
console.log(inversArrElements(arr))