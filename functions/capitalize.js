
function capitalize (string) {
    let stringArray = string.split('');
    const firstLetter = stringArray.shift().toUpperCase();
    stringArray.slice(1);
    stringArray.unshift(firstLetter);
    const newString = stringArray.join('');
    return newString;
}

module.exports = capitalize;