const tracks = data.split("\n").filter(item => item.length > 8);

// PART 1
const countingTrees = (moveRight, moveDown) => {
    let down = 0;
    let right = 0;
    let treeCount = 0;
    const trackWidth = tracks[0].length;
    tracks.forEach(track => {
        if (tracks[down][right] === "#") {
            treeCount++;
        }
        right += moveRight;
        right %= trackWidth;
        down += moveDown;
    });
    return treeCount;
}

console.log(countingTrees(1, 1));
console.log(countingTrees(3, 1));
console.log(countingTrees(5, 1));
console.log(countingTrees(7, 1));
console.log(countingTrees(1, 2));



// // PART 2
// const countingTrees2 = (moveRight, moveDown) => {
//     let down = 0;
//     let right = 0;
//     let treeCount2 = 0;
//     const trackWidth = tracks[0].length;
//     tracks.forEach(track => {
//         if (tracks[down][right] === "#") {
//             treeCount2++;
//         }
//         down += moveDown;
//         right += moveRight;
//         right %= trackWidth;
//     });
//     return treeCount2;
// }

// const countingTrees3 = (moveRight, moveDown) => {
//     let down = 0;
//     let right = 0;
//     let treeCount3 = 0;
//     const trackWidth = tracks[0].length;
//     tracks.forEach(track => {
//         if (tracks[down][right] === "#") {
//             treeCount3++;
//         }
//         down += moveDown;
//         right += moveRight;
//         down %= trackWidth;
//     });
//     return treeCount3;
// }

// console.log(countingTrees2(1, 1));
// console.log(countingTrees2(5, 1));
// console.log(countingTrees2(7, 1));
// console.log(countingTrees3(1, 2));