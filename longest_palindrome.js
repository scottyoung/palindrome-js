/**
Checks if string passed in is a palindrome
Parameter : string to be checked for palindrome
Returns true if palindrome
**/
function isPalindrome(word) {

	var new_word = "";

		for(var j = word.length-1; j >= 0; j--) {
			new_word = new_word + word[j];
		}

	if (word == new_word)
		return true;
	else
		return false;

}

/**
Returns a substring of the string passed in
Parameter : Word to get a substring from, and number to subtract from original string
Returns substring of original word
**/
function getSubstring(word, number) {

	var new_word = "";

		for(var i = 0; i < word.length-number; i++) {
			new_word = new_word + word[i];
		}

	return new_word;

}

/**
Main function, cycles through variations of word to find
longest palindrome
**/
function palindrome(word) {

	var longest = '';
	var final_word = '';
	var adjusted_word = word;

	for (var i = 0; i < word.length; i++) {
		adjusted_word = getSubstring(word,i);

		for (var j = 0; j < adjusted_word.length; j++) {

			for (var k = j; k < adjusted_word.length; k++) {
				final_word = final_word + adjusted_word[k];	
			}
			if (isPalindrome(final_word) && final_word.length > longest.length)
				longest = final_word;
			final_word = '';
		}
	}
	alert("Longest palindrome is: " + longest);
}