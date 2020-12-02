// Create an array from the passwords using split, and split them with every new line, then filter the array and only return items with more than 8 characters
const passwordArray = passwords.split("\n").filter(text => text.length > 8);

// console.log(passwordArray);
let finalArray = [];

console.log("NewArray", finalArray);

function spliceData() {
    passwordArray.forEach((password) => {
        // Split each text array in the ":" and " " characters and then filter to remove any blank spaces
        let textArrays = password.split(":" && " ").filter(space => space);
        let num = textArrays[0].split("-"); // Split numbers with the "-" symbol
        let minNum = Number(num[0]); // Convert the smaller number string to Number
        let maxNum = Number(num[1]); // Convert the bigger number string to Number
        let letter = textArrays[1].split(":")[0]; // Select the letter that is supposed to be found in the password
        let str = textArrays[2].toString(); // Select the password string
        // console.log("text", textArrays);
        // console.log("Num", num);
        // console.log("Min Num", minNum);
        // console.log("Max Num", maxNum);
        // console.log("letter:", letter);
        // console.log("string", str);
        // console.log(" ");
        let textArray = []; // Create a new array to append the data to
        textArray.push(minNum, maxNum, letter, str); // Append all the required variables into the new array
        finalArray.push(textArray); // Push the text array to the final array
    });
}

function findOccurences() {
    finalArray.forEach(array => {
        console.log("Final arrays", array)
        let minNum = array[0];
        let maxNum = array[1];
        let letter = array[2];
        let text = array[3];
        console.log(minNum, maxNum, letter, text);
    });
}

spliceData();
findOccurences();

