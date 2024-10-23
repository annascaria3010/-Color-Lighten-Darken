const isValidHex = (hex) => {
    if(!hex) return false;

    const strippedHex = hex.replace('#','');

    const hexRegex = /^[0-9a-fA-F]+$/;

    return (strippedHex.length === 3 || strippedHex.length === 6) && hexRegex.test(strippedHex);
}

console.log(isValidHex("#000000")) //true
console.log(isValidHex("#0000000")) //false
console.log(isValidHex("#ffzff")) //true
console.log(isValidHex("#fff")) //true
console.log(isValidHex("fff")) //true
console.log(isValidHex("#bac")) //false