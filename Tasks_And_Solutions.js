/*
    8/27/2020 - MOVIE CLERK

    It's the academic year's end, fateful moment of your school report. The averages must be calculated. 
    All the students come to you and entreat you to calculate their average for them. Easy ! You just need to write a script.
    Return the average of the given array rounded down to its nearest integer.

    The array will never be empty.

    SOLUTION:
*/

function getAverage(marks){
  let markCount = 0;
  let markSum = 0;
  marks.forEach((mark) => {
    markCount++;
    markSum += mark;
  })
    return Math.floor(markSum / markCount);
}

/* More Efficient Answer I Could Have Used */

function getAverage(marks){
  return Math.floor(marks.reduce((sum, x) => sum + x) / marks.length);
}

 /*--------------------------------------------------------------------END OF SOLUTION----------------------------------------------------------------------------------*/


 
/*
    8/25/2020 - WHO LIKES IT?

    You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. 
    We want to create the text that should be displayed next to such an item. Implement a function likes :: [String] -> String, 
    which must take in input array, containing the names of people who like an item. It must return the display text as shown in the examples:

    likes [] // must be "no one likes this"
    likes ["Peter"] // must be "Peter likes this"
    likes ["Jacob", "Alex"] // must be "Jacob and Alex like this"
    likes ["Max", "John", "Mark"] // must be "Max, John and Mark like this"
    likes ["Alex", "Jacob", "Mark", "Max"] // must be "Alex, Jacob and 2 others like this"

    SOLUTION:
*/

/* I changed the strings in my original answer to templated strings  here for readability and cleaner code*/

function likes(names) {
    let nameCount = names.length;
    let whoLikesThisString = "";
    let nameCountMinusTwo = nameCount - 2;
    
    switch(nameCount){
        case 0: 
          whoLikesThisString = "no one likes this"
          break;
        case 1: 
          whoLikesThisString = `${names[0]} likes this`; 
          break;
        case 2:
          whoLikesThisString = `${names[0]} and ${names[1]} like this`; 
          break;
        case 3: 
          whoLikesThisString = `${names[0]}, ${names[1]} and ${names[2]} like this`;
          break;
        default:
          whoLikesThisString = `${names[0]}, ${names[1]} and ${nameCountMinusTwo} others like this`; 
    }
      return whoLikesThisString;
  }

  /* More Efficient Answer I Could Have Used */

  function likes(names) {
    names.length === 0 && (names = ["no one"]);
    let [a, b, c, ...others] = names;
    switch (names.length) {
      case 1: return `${a} likes this`;
      case 2: return `${a} and ${b} like this`;
      case 3: return `${a}, ${b} and ${c} like this`;
      default: return `${a}, ${b} and ${others.length + 1} others like this`;
    }
  }

  /*--------------------------------------------------------------------END OF SOLUTION----------------------------------------------------------------------------------*/

  /*
  -  8/26/2020 - A LETTER FROM YOUR NIECE -

    Your sweet 4 year old niece has sent you a letter, however she is a little bit of an odd ball, so it needs a bit of decoding. 
    You see she seems to love dinosars and often throws "trex" and "raptor" in mid sentence when she gets excited, and is convinced all vowels should be replaced by numbers (a=0, e=1, i=2, o=3, u=4).

    Your challenge is to figure out what she is trying to say and fix her grammar- 
    HINT - All sentences begin with a capital letter, end in a full stop and "I" should be capitalised, 
    no need for capitals for names, she's only 4 after all :)

    SOLUTION:
*/

function nonsense(str) {
  let charArray= str.toLowerCase().replace("trex", "").replace("raptor", "").split('');
  for (i = 0; i < charArray.length; i++) {
    switch(charArray[i]){
        case '0':
          charArray[i] = 'a'
          break;
        case '1':
          charArray[i] = 'e'
          break;
        case '2':
          charArray[i] = 'i'
          break;
        case '3':
          charArray[i] = 'o'
          break;
        case '4':
          charArray[i] = 'u'
          break;
        default:
          break;
    }
  }
  let cleanedString = charArray.join("");
  let answerString = cleanedString.charAt(0).toUpperCase() + cleanedString.slice(1);
  if(answerString.charAt(answerString.length - 1) != "."){
    answerString += ".";
  }
  let regexPattern = /(\si\s)/;
  let finalString = answerString.replace(regexPattern, " I ");
  return finalString;
}

/*--------------------------------------------------------------------END OF SOLUTION----------------------------------------------------------------------------------*/

/*
  8/28/2020 - EGG TALK

  Insert an "egg" after each consonant.
  If there are no consonants, there will be no eggs.
  Argument will consist of a string with only alphabetic characters and possibly some spaces.

  eggsample:

  hello => heggeleggleggo

  eggs => egegggeggsegg

  SOLUTION:
*/

  function heggeleggleggo(word){
    let charStringArray = word.toLowerCase().split("");
    let regexRule = /[bcdfghjklmnpqrstvwxyz]/;
    for(i = 0; i < charStringArray.length; i++){
      if(charStringArray[i].match(regexRule)){
        charStringArray[i] += "egg";
      }
    }
    let finalString = charStringArray.join("");
    return finalString;
  }

/*--------------------------------------------------------------------END OF SOLUTION----------------------------------------------------------------------------------*/

/*
  8/30/2020 - MESSAGE VALIDATOR

In this kata, you have an input string and you should check whether it is a valid message. To decide that, you need to split the string by the numbers, and then compare the numbers with the number of characters in the following substring.

For example "3hey5hello2hi" should be split into 3, hey, 5, hello, 2, hi and the function should return true, because "hey" is 3 characters, "hello" is 5, and "hi" is 2; as the numbers and the character counts match, the result is true.

Notes:

Messages are composed of only letters and digits
Numbers may have multiple digits: e.g. "4code13hellocodewars" is a valid message
Every number must match the number of character in the following substring, otherwise the message is invalid: e.g. "hello5" and "2hi2" are invalid
If the message is an empty string, you should return true

  SOLUTION:
*/

function isAValidMessage(message){
  let lastChar = message.slice(-1);
  let numericRegex = /[0-9]+/;
  let messageIsValid = true;
  
  if(message === ""){
    return messageIsValid;
  }
  else if(!lastChar.match(numericRegex)){
    let messageContentArray = message.match(/[a-z]+/g);
    let messageLengthArray = message.match(/[0-9]+/);
    for(i = 0; i < messageLengthArray.length; i++){
      let currentMessageLength = parseInt(messageLengthArray[i]);
      let currentMessage = messageContentArray[i];
      if(currentMessageLength !== currentMessage.length){
        messageIsValid = false;
      }
      return messageIsValid;
    }
  } else {
    return !messageIsValid;
  }
}

/*--------------------------------------------------------------------END OF SOLUTION----------------------------------------------------------------------------------*/