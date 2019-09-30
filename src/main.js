//Function layout
const calcstringLength = (firstString) => {
    const stringLength = firstString.length;
    return stringLength;
};


document.querySelector("#calcButton").addEventListener("click", () => {
    //Grabbing value of string
    const firstString = document.querySelector("#firstString").value;

    //Begin of calculations
    const stringLength = calcstringLength(firstString);
    const characterLength = `The length of this string is ${stringLength} characters`;
    
    //Send results back to IDs

    if(stringLength < 2){
        document.querySelector("#result").innerHTML = "Please put a word that contains at least 2 characters";
    }
    else{
        document.querySelector("#result").innerHTML = characterLength;
    }

});