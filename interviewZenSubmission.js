// Write a function that takes a string as an argument and returns true if there are exactly 3 exclamation marks between every pair of numbers that add up to 15. Otherwise return false. Note that exclamation marks may be separated by other, non-numeric characters.

// See the examples below:

// "gaeb7!!!8jeks5!!!tux10"   => true
// "kem!7!!nej!8ww1!!!!!!5"   => true
// "7!!!8!!!7!!!8!!!7"        => true
// "5!!aaaaaaaaaaaaa!10!5"    => false
// "Aa6!9"                    => false


// Write a function that takes a string as an argument
const stringExclamCheck = (string) => {
    // have placeholder variables for the sum of the current integer and the most recent one.
    let integerSum = 0
    // to determine if necessary to reset integerSum have a count of integers and a count of !
    let integerCount = 0
    let exclamations = 0
    // default return is false. Only return true if at least one pair of numbers sum 15 has !!! between 
    let finalBoolean = false
    // loop through string
    for (let i=0; i<string.length-1; i++) {
        let currChar = string[i]
        let checkNum = parseInt(currChar)
        if (currChar === '!') {
            exclamations++
            continue;
        }
        if (typeof checkNum === Number) {
            integerSum += checkNum
            integerCount++
            if (integerCount === 2) {
                // first check sum for 15
                // if not 15, continue by resetting the sum and counts
                if (integerSum !== 15) {
                    integerSum = checkNum
                    integerCount--
                    continue;
                    // could just put else because (integerSum === 15) is the only else from the above if
                } else if (integerSum === 15) {
                    // if 15, check count of !
                    // if !3 return false because "every pair of numbers that add up to 15"
                    if (exclamations !== 3) return false
                    // if ! is count 3, set return value to true and continue
                    // again, could just have else here for same reason, only reach this code if (exclamations === 3)
                    // returns true if there are exactly 3 exclamation marks between every pair of numbers that add up to 15
                    else (exclamations === 3) finalBoolean = true
                }
            }
        }
    }
    return finalBoolean
}



