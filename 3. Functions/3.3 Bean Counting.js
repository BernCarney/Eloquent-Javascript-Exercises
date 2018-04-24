/**
 * Bean Counting
 * 
 * You can get the Nth character, or letter, from a string by writing "string"[N]. The
 * returned value will be a string containing only one character (for example, "b").
 * The first character has position zero, which causes the last one to be found at
 * position string.length - 1. In other words, a two-character string has length 2, and
 * its characters have positions 0 and 1.
 * 
 * Write a function countBs that takes a string as its only argument and returns a
 * number that indicates how many uppercase “B” characters there are in the string.
 * 
 * Next, write a function called countChar that behaves like countBs, except it takes
 * a second argument that indicates the character that is to be counted (rather than
 * counting only uppercase “B” characters). Rewrite countBs to make use of this new
 * function.
 */ 

function countBs(string) {
/**
 * Initial Solution
 * 
     let bString = '';
    
    for (let pos = 0; pos < w.length; pos++) {
        if (w[pos] === 'B') {
            bString += w[pos];
        }
    }
    return bString.length;
*/

// Expanded solution after creation of the countChar function
    return countChar(string, 'B');
}

function countChar(word, char) {
    let resultString = '';
    
    for (let pos = 0; pos < word.length; pos++) {
        if (word[pos] === char) {
            resultString += word[pos];
        }
    }
    return resultString.length;
}

console.log(countBs('BBC'));
// → 2
console.log(countChar('kakkerlak', 'k'));
// → 4