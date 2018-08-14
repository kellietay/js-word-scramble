// Create a function that reverses a word

function reverseWord(word)	{
	let reverseWord = word.split("").reverse().join("");
	return reverseWord
}

// Create a function that takes an array of words and returns a new array of the
 // words with each word reversed.

function reverseArray(wordArray){
let reverse = [];
	for (let word of wordArray){
		reverse.push(reverseWord(word));
	}
	return reverse
}

// Create a function that returns a random word from an array

function randomWord(wordArray)	{
	let i = Math.floor(Math.random() * wordArray.length);
	return wordArray[i]
}


// Create an array of words and save it to a variable. Using your functions create
// a second array of reversed words.

let wordArray = ['Hello','World','Happy'];

let revArray = reverseArray(wordArray);

// We could use the two arrays we've created to select a random word to show the user
// and check their guess. How could we do that? Is there a better way?


// ////////////////////////////////////////////////////////////////////////////

// Create a function that takes an array of words and returns a map with the keys
// as the reversed word and the values as the original word.

function wordMap(wordArray)	{
	let wordReverseMap = new Map([]);

	for (let word of wordArray){
		wordReverseMap.set(reverseWord(word), word);
	}
	return wordReverseMap
}


// Create a function that takes two strings, `guess` and `word` and a map, like
// the one you created above. If the first string is in the map, return the word
// if not, console log "Sorry, incorrect. The word was ..." and include word.


function correctWord(guess,word,wordMap){
	if (wordMap.has(guess)){
		return word
	} else {
		console.log("Sorry, incorrect. The word was ${word}");
	}
}

// ////////////////////////////////////////////////////////////////////////////
// FURTHER STUDY

// Create a function that scrambles a word. Use whatever method you like to
// rearrange the letters.



// Create a function that takes an array of words and returns a map with the
// scrambled words as the keys and the original word as the values.
