/*
Given a string s consisting of small English letters, find and return the first instance of a non-repeating character in it. If there is no such character, return '_'.

Example

For s = "abacabad", the output should be
firstNotRepeatingCharacter(s) = 'c'.

There are 2 non-repeating characters in the string: 'c' and 'd'. Return c since it appears in the string first.

For s = "abacabaabacaba", the output should be
firstNotRepeatingCharacter(s) = '_'.

There are no characters in this string that do not repeat.

Input/Output

[execution time limit] 5 seconds (ts)

[input] string s

A string that contains only lowercase English letters.

Guaranteed constraints:
1 ≤ s.length ≤ 105.

[output] char

The first non-repeating character in s, or '_' if there are no characters that do not repeat.
*/

function firstNotRepeatingCharacter(s: string): string {
    
    let founds: {
        [key:string]: true
    } = {};
    
    for(let i =0; i < s.length; i++) {
        
        if(founds[s[i]]) continue;
        
       if(!s.slice(i+1).includes(s[i])) return s[i];
       
       else founds[s[i]] = true;
    }
    
    return '_';
}
