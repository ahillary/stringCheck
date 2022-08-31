// Directions: Write a function that takes a string as an argument and returns true if there are exactly 3 exclamation marks between every pair of numbers that add up to 15. Otherwise return false. Note that exclamation marks may be separated by other, non-numeric characters.

// assumptions:
// all numbers are integers >=0 and <=99

/// Write a function that takes a string as an argument
const stringExclamCheck = (string) => {
  // have placeholder variables for the sum of the current integer and the most recent one.
  let integerSum = 0;
  // to determine if necessary to reset integerSum have a count of integers. If sum is reset count of ! also needs to be reset
  let integerCount = 0;
  // to keep track of the exclamations between integers
  let exclamations = 0;
  // default return is false. Only return true if at least one pair of numbers sum 15 has !!! between
  let finalBoolean = false;
  // variable to use when checking for and tracking double digit integers
  let prevDigit;

  // loop through string
  for (let i = 0; i < string.length; i++) {
    // for ease of reading create a variable for the current character in the string istead of string[i]
    let currChar = string[i];

    // don't start counting ! until at least one integer has been reached. If current character is an ! add 1 to the count and continue in loop
    if (integerCount > 0) {
      if (currChar === '!') {
        exclamations++;
        continue;
      }
    }

    // function to check if current character is an integer. If it is an integer func returns true.
    let check = (char) => {
      if (Number.isNaN(parseInt(char))) {
        return false;
      } else return true;
    };

    // check if the current character is not an iteger, continue in the loop if not integer. We don't care about saving these characters
    if (!check(currChar)) {
      continue;
    }

    // check if the integer is more than one digit (i.e. integer > 9) by looking at next and previous values
    let next = check(string[i + 1]);
    // if the current character and the next are both integers, go to the next iteration of the loop to view both as a single integer. Save current character as prevDigit
    if (check(string[i + 1])) {
      prevDigit = string[i];
      continue;
    }
    // if the current character and the previous character are both integers, address them together as one integer (i.e. integer > 9)
    if (check(prevDigit)) {
      currChar = parseInt(prevDigit + currChar);
      // reset the prevDigit
      prevDigit = '';
    } else {
      currChar = parseInt(currChar);
    }

    // ensure the current variable is an integer to continue in this code block
    if (Number.isInteger(currChar)) {
      integerSum += currChar;
      integerCount++;
      if (integerCount === 2) {
        // if sum is not 15: reset the sum & counts (integers and exclamations) then continue in loop
        if (integerSum !== 15) {
          integerSum = currChar;
          integerCount--;
          exclamations = 0;
          continue;
          // is sum is 15:
        } else {
          // check count of exclamations. Not not 3 return false because of requirement "every pair of numbers that add up to 15"
          if (exclamations !== 3) return false;
          // if exclamations count is 3: set return value to true, reset counts (exclamations & integers), set sum to only current integer
          // stringExclamCheck will return true if there are exactly 3 exclamation marks between every pair of numbers that add up to 15
          else {
            finalBoolean = true;
            integerSum = currChar;
            integerCount--;
            exclamations = 0;
            continue;
          }
        }
      }
    } else return console.log('should never see this');
  }
  return finalBoolean;
};

module.exports = stringExclamCheck;
