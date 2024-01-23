//problem: valid parenthesis 

// Given a string containing the characters '('. ')','{'.'}','[',']'. 
// determine if the input string is valid. 

// An input string is valid if: 

// 1.Open bracket must be closed by the same type of bracket. 
// 2. Open brackets must be closed in corret order. 
// 3. Every close bracket has a corresponding open bracket of the same type.  


const validParenthesis = (str)=>{
    const obj = {
        "(" : ")",
        "{" : "}",
        "[" : "]"
    };

    let stack = []; // to push and pop element

    for(let i=0; i<str.length; i++){
        if(obj.hasOwnProperty(str[i])){ //if our str contains key pair of obj
            stack.push(str[i]);
        }else{
            //needs to check two thing
            // 1> is stack is empty and another is is stack last element is same type
            if(stack.length === 0 || obj[stack.at(-1)] !== str[i])  //obj[stack.at(-1)] checks stack last element  obj["("] === ")"
             return false;

             //if our item is matched then pop item from stack
             stack.pop();
        }
    }

    return stack.length ===0;
}

console.log(validParenthesis('({[]})'));
console.log(validParenthesis('({[})'));
