// PART 1
// Create an array from the passwords using split, and split them with every new line, then filter the array and only return items with more than 8 characters
const passwordArray = passwords.split("\n").filter(text => text.length > 8);

let finalArray = [];

function spliceData() {
    passwordArray.forEach((password) => {
        // Split each text array in the ":" and " " characters and then filter to remove any blank spaces
        let textArrays = password.split(":" && " ").filter(space => space);
        let num = textArrays[0].split("-"); // Split numbers with the "-" symbol
        let minNum = Number(num[0]); // Convert the smaller number string to Number
        let maxNum = Number(num[1]); // Convert the bigger number string to Number
        let letter = textArrays[1].split(":")[0]; // Select the letter that is supposed to be found in the password
        let str = textArrays[2].toString(); // Select the password string
        let textArray = []; // Create a new array to append the data to
        textArray.push(minNum, maxNum, letter, str); // Append all the required variables into the new array
        finalArray.push(textArray); // Push the text array to the final array
    });
}

function findOccurences() {
    finalArray.forEach(array => {
        // Assign values to variables again, this time, taking the values from the finalArray
        let minNum = array[0];
        let maxNum = array[1];
        let letter = array[2];
        let text = array[3];
        let validPasswords = "Valid passwords";
        const numOfOccurence = text.split(letter).length - 1; // Count the number of occurences the letter occurs in the text
        // If the number of occurence of the letter in the text is bigger or equal to minNum or smaller or equal to the maxNum then return
        if (numOfOccurence >= minNum && numOfOccurence <= maxNum) {
            console.log(validPasswords)
        }
    });
}

// PART 2
function findValidIndex() {
    let validIndexArray = [];

    finalArray.forEach(array => {
        // Assign values to variables again, this time, taking the values from the finalArray
        let minNum = array[0];
        let maxNum = array[1];
        let letter = array[2];
        let text = array[3];
        // const numOfOccurence = text.split(letter).length - 1; // Count the number of occurences the letter occurs in the text
        // // If the number of occurence of the letter in the text is bigger or equal to minNum or smaller or equal to the maxNum then return
        // if (numOfOccurence >= minNum && numOfOccurence <= maxNum) {
        //     console.log(validPasswords)
        // }

        for (let i = 0; i < text.length; i++) {
            if (text[minNum - 1] === letter && !text[maxNum] === letter) {
                validIndexArray.push([i, text[minNum - 1], letter, text[maxNum], text]);
            }
        }
    });
    console.log(validIndexArray.length);
}

function findValidIndex() {
    let validIndex = 0;
    let minNum = [];
    let maxNum = [];
    let letter = [];
    let text = [];
    finalArray.forEach(item => {
        // console.log(item);
        minNum = item[0];
        maxNum = item[1];
        letter = item[2];
        text = item[3];
        if (text[minNum - 1] === letter ^ text[maxNum - 1] === letter) {
            validIndex++;
        }
    });
    console.log("Valid passwords in task 2:", validIndex);
}

spliceData();
findOccurences();
findValidIndex();