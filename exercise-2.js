// ---------------------
// Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in JavaScript.
// ---------------------

function max(num1, num2){
    //...
    if (num1 > num2) {
	return num1
}
    else { return num2
}}

// ---------------------
// Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
// ---------------------

function maxOfThree(num1, num2, num3) {
    //...
    if (num1 > num2 && num1 > num3) {
    	return num1
    }
    else if (num2 > num3) {
    	return num2
    }
    else {
    	return num3
    }
 }

// ---------------------
// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
// ---------------------

function isVowel(char){
    //...
    if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u" || char === "A" || char === "E" || char === "I" || char === "O" || char === "U") {
    	return true
    }else {
    	return false
    }
}

// ---------------------
// Write a function translate() that will translate a text into "rÃ¶varsprÃ¥ket". That is, double every consonant and place an occurrence of "o" in between. For example, translate("this is fun") should return the string "tothohisos isos fofunon".
// ---------------------

function translate(phrase) {
	var phraseApart = phrase.split('')
	var translatePhrase = phraseApart.map(function (currentLetter) {
		if (currentLetter !== 'a' && currentLetter !== "e" && currentLetter !== "i" && currentLetter !== "o" && currentLetter !== "u" 
			&& currentLetter !== "A" && currentLetter !== "E" && currentLetter !== "I" && currentLetter !== "O" && currentLetter !== "U" && currentLetter !== " ") {
			return currentLetter + "o" + currentLetter
		}else {
			return currentLetter
		}
	});
	var phraseTogether = translatePhrase.reduce(function (item, currentNewLetter) {
		return item + currentNewLetter
	}); return phraseTogether
}

// ---------------------
// Define a function reverse() that computes the reversal of a string. For example, reverse("jag testar") should return the string "ratset gaj".
// ---------------------

function reverse(words){
	var lettersArray = words.split('')
	lettersArray.reverse() //found reverse in online research
	return lettersArray.reduce(function (item, revWord){
		return item + revWord
	});
}

// ---------------------
// Write a function findLongestWord() that takes an array of words and returns the length of the longest one.
// ---------------------

//INCOMPLETE
function findLongestWord(words){
    words.filter(function (word){
        return word.length > 2
    });
}
// ---------------------
// Write a function filterLongWords() that takes an array of words and an integer i and returns the array of words that are longer than i.
// ---------------------

//INCOMPLETE
function filterLongWords(words, i){
    var longWords = words.filter(function(word) {
        if (word.length > i) {
            return word
        } else {
            return ""
        } return longWords
});
}

// ---------------------
// Write a function charFreq() that takes a string and builds a frequency listing of the characters contained in it. Represent the frequency listing as a Javascript object. Try it with something like charFreq("abbabcbdbabdbdbabababcbcbab").
// ---------------------

//INCOMPLETE
function charFreq(string){
    var splitUp = string.split('')
    splitUp.filter(function(letter){
        return letter === letter[++1]
    })
}
