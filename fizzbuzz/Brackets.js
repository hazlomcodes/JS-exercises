// A string S consisting of N characters is considered to be properly nested if any of the following conditions is true:

// S is empty;
// S has the form "(U)" or "[U]" or "{U}" where U is a properly nested string;
// S has the form "VW" where V and W are properly nested strings.
// For example, the string "{[()()]}" is properly nested but "([)()]" is not.

// Write a function:

// function solution(S);

// that, given a string S consisting of N characters, returns 1 if S is properly nested and 0 otherwise.

// For example, given S = "{[()()]}", the function should return 1 and given S = "([)()]", the function should return 0, as explained above.

// Write an efficient algorithm for the following assumptions:

// N is an integer within the range [0..200,000];
// string S is made only of the following characters: "(", "{", "[", "]", "}" and/or ")".


function solution(S) {
    // Implement your solution here
    /*

    S = "{[()()]}"


    S = "{[()()]}"

    Steps:

    1) Que to track unpaired bracket
    2) when pair is found eliminate from que
    3) if at end que > 0 return 0 else return 1
    
    */

    let que = []

    function isBracket(character) {
        if ('{[()()]}'. includes(character)) return true;
        return false;

    }

    function isMirror(bracket1, bracket2) { 
        if(bracket1 == '(' && bracket2 == ')') return true;
        if(bracket1 == '[' && bracket2 == ']') return true;
        if(bracket1 == '{' && bracket2 == '}') return true;
        return false //mathces to que

    }

    for (let i = 0; i < S.length; i++){ 
        let curTop = que[que.length-1];
        let curChar = S[i]; 
        
        
        if(isBracket(curChar)) { 
            if(isMirror(curTop,curChar)) que.pop(); //if is mirror remove que
            else que.push(curChar); // if is not mirror psuh to arrau
        }
    }           

        if(que.length > 0) return 0;
        return 1;

    }