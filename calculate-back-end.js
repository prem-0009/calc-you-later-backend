/******************
 * YOUR CODE HERE *
 ******************/
function calculate (str11, str22, str3){
  let str1 = Number(str11);
  let str2 = Number(str22);
  
  
  // if ( str3 === '+' || str3 === 'plus' || str3 === 'added to'){
  //   return str1 + str2;
  // }
  // else if ( str3 === '-' || str3 === 'minus' || str3 === 'subtracted from'){
  //   return str1 - str2;
  // }
  // else if ( str3 === 'x' || str3 === 'X' || str3 === 'times' || str3 === 'multiplied by'){
  //   return str1 * str2;
  // }
  // else if ( str3 === '/' || str3 === 'divided by' ){
  //   return str1 / str2;
  // }
  // else if ( str3 === '%' || str3 === 'modulus' || str3 === 'mod'){
  //   return str1 % str2;
  // }
  // else {
  //   return `Sorry, that's not a mathematical operation!`
  // }

  //switch
  switch(str3){
    case '+':
    case 'plus':
    case 'added to':
      return str1 + str2;
    case '-':
    case 'minus':
    case 'subtracted from':
      return str1 - str2;
    case 'x':
    case 'X':
    case 'multiplied by':
    case 'times':
      return str1 * str2;
    case '/':
    case 'divided by':
    case 'added':
      return str1 / str2;
    case '%':
    case 'modulus':
    case 'mod':
      return str1 % str2;
    default:
      return `Sorry, that's not a mathematical operation!`;

  }


}


 

/********************************************
 * CODE DOWN HERE IS FOR INTERNAL USE ONLY. *
 *           PLEASE DON'T TOUCH!            *
 ********************************************/

if (typeof calculate === 'undefined') {
  calculate = undefined;
}


module.exports = calculate;