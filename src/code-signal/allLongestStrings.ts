/*
Given an array of strings, return another array containing all of its longest strings.

Example

For inputArray = ["aba", "aa", "ad", "vcd", "aba"], the output should be
allLongestStrings(inputArray) = ["aba", "vcd", "aba"].

Input/Output

[execution time limit] 5 seconds (ts)

[input] array.string inputArray

A non-empty array.

Guaranteed constraints:
1 ≤ inputArray.length ≤ 10,
1 ≤ inputArray[i].length ≤ 10.

[output] array.string

Array of the longest strings, stored in the same order as in the inputArray.
*/

function allLongestStrings(inputArray: string[]): string[] {
    let len = inputArray.length;
    
    if(len == 1) return inputArray;
    
    let sortedStrings = inputArray.sort((a, b) => { 
        return a.length - b.length;
        
    });
    
    let longestSize = sortedStrings[len - 1].length;
    
    let longestStrings = [];
    
    
    for(let i = len - 1; sortedStrings[i].length == longestSize; i--) {
        longestStrings.unshift(sortedStrings[i]);
    }
    
    return longestStrings;
    
}
