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