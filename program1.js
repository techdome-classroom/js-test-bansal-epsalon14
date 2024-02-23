/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const stack = [];
    const bracketPairs = {
        ')': '(',
        '}': '{',
        ']': '['
    };
    
    for (let char of s) {
        if (char === '(' || char === '{' || char === '[') {
            stack.push(char);
        } else {
            const top = stack.pop();
            if (bracketPairs[char] !== top) {
                return false;
            }
        }
    }
    
    return stack.length === 0;
};module.exports = { isValid };
