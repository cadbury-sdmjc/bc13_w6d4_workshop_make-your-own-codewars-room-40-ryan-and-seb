import {jest} from '@jest/globals'

/* 
👉 Write your kata here!
*/

//👉 Write the function your CodeWarriors will start with below here:

export function result(score) {
    let myString = score;
    let result = {};
    for (let str of myString) {
      result[str] = result.hasOwnProperty(str) ? result[str] + 1 : 1;
    }
    console.log(result)

    // for (const [key, value] of Object.entries(result)) {
    //     console.log(`${key}`);
    // }
    let arr = Object.values(result);
    // let letter = Object.keys(result)
    let max = Math.max(...arr);
    //search through object
    console.log(Object.keys(result).filter(function(x){ return result[x] == max; })[0]);

    return (Object.keys(result).filter(function(x){ return result[x] == max; })[0]);
    //find highest number
    // //! Object.entries
    //find letter with highest value
    //return letter ONLY

}

// function mostOfSameLetter(str) {
//     let myString = str;
//     let result = {};
//     for (let str of myString) {
//       result[str] = result.hasOwnProperty(str) ? result[str] + 1 : 1;
//     }
//     let max = 0;
//     let maxChar = '';
//     for (let char in result) {
//       if (result[char] > max) {
//         max = result[char];
//         maxChar = char;
//       }
//     }
//     return maxChar;
//   }