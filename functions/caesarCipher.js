function caesarCipher(str, shift){

    let shiftAmt = shift;

    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const alphabetArray = alphabet.split("");
    console.log(alphabetArray);
        
    const rot13Alphabet = "NOPQRSTUVWXYZABCDEFGHIJKLM";
    const rot13Array = rot13Alphabet.split("");
    console.log(rot13Array);

    let strArray = str.toUpperCase().split("");
    console.log(strArray);

    let encodedStr = "";
    
    //Now iterate through the array compared to the alphabetArray to find the index of that char
    for(let i = 0; i < str.length; i++){
        const character = strArray[i];
        const letterIndex = alphabetArray.indexOf(character);
        const newIndex = (letterIndex + shiftAmt) % 26;
        const newCharacter = alphabetArray[newIndex];
        encodedStr += newCharacter;
    }

    //Then replace that char with the char at the index in rot13Array
    console.log(encodedStr);
    return encodedStr;
  }
  
module.exports = caesarCipher;