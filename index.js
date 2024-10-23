const hexInput = document.getElementById('hexInput');
const inputColor = document.getElementById('inputColor');

hexInput.addEventListener('keyup', () => {
    const hex= hexInput.value;
})

const isValidHex = (hex) => {
    if(!hex) return false;

    const strippedHex = hex.replace('#','');

    const hexRegex = /^[0-9a-fA-F]+$/;

    return (strippedHex.length === 3 || strippedHex.length === 6) && hexRegex.test(strippedHex);
}
